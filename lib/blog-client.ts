// lib/fetchGraphQL.ts
const GRAPHQL_ENDPOINT = "https://thebrightlayers.com/graphql";

// Define the types for the fields you want to retrieve
type Author = {
  node: {
    name: string;
  };
};
type featuredImage = {
  node: {
    sourceUrl: string;
  };
};
type BlogPost = {
  id: string;
  title: string;
  content: string; // Description or content of the post
  date: string; // Date of publication (ISO format)
  author: Author; // Author name
  featuredImageUrl: featuredImage | null; // URL of the featured image
};

type GetBlogPostsResponse = {
  data: {
    posts: {
      nodes: BlogPost[];
    };
  };
  errors?: { message: string }[];
};

// Modified GraphQL query to fetch author, content, date, and featured image
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

export async function fetchBlogPosts(first: number): Promise<BlogPost[]> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_BLOG_POSTS,
      variables: { first },
    }),
  });

  const json: GetBlogPostsResponse = await response.json();

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("Failed to fetch GraphQL data");
  }

  // Map the response data to our BlogPost type
  const blogPosts = json.data.posts.nodes.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.content, // Description or full content
    date: post.date, // Date in ISO format
    author: post.author || { node: { name: "" } }, // Safe access to author name
    featuredImageUrl: post.featuredImageUrl || null, // Safe access to the image URL
  }));

  return blogPosts;
}
