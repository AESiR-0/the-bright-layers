import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        variables: { first: 3 }, // Limit to 3 posts for the blog section
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

    // Ensure that posts are fetched and exist before returning them
    const posts = data?.posts?.nodes || []; // Default to empty array if no posts

    return {
      props: {
        posts,
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

const Blogs: React.FC<BlogProps> = ({ posts }) => {
  // Check if posts are available and not empty

  if (!posts || posts.length === 0) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
            Our Latest Blog
          </h2>
          <p className="text-center text-gray-500">
            No blog posts available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Our Latest Blog
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group w-full px-6 max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
            >
              <div className="flex w-full items-center">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    width={512}
                    height={128}
                    alt={post.title}
                    className="rounded-t-2xl w-full"
                  />
                )}
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">
                    By {post.author.node.name}
                  </h6>
                  <span className="text-sm text-indigo-600">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/blogs"
          className="cursor-pointer border mt-10 border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
