import { GetStaticProps } from "next";

// GraphQL query
const GET_BLOG_POSTS = `
  query GetBlogPosts($first: Int!) {
    posts(first: $first) {
      nodes {
        id
        title
        content
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
};

type BlogProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const GRAPHQL_ENDPOINT = "https://thebrightlayers.com/graphql";

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_BLOG_POSTS,
        variables: { first: 5 },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error("GraphQL errors:", errors);
      throw new Error("Failed to fetch GraphQL data");
    }

    return {
      props: {
        posts: data.posts.nodes,
      },
      revalidate: 10, // Revalidate at most every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      notFound: true,
    };
  }
};

const Blog: React.FC<BlogProps> = ({ posts }) => (
  <div>
    <h1>Blog Posts</h1>
    {posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p>Author: {post.author.node.name}</p>
        <p>Date: {new Date(post.date).toLocaleDateString()}</p>
        {post.featuredImage && (
          <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
        )}
      </article>
    ))}
  </div>
);

export default Blog;
