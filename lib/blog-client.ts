// lib/fetchGraphQL.ts
const GRAPHQL_ENDPOINT = "http://thebrightlayers.com/graphql";

type BlogPost = {
  id: string;
  title: string;
};

type GetBlogPostsResponse = {
  data: {
    posts: {
      nodes: BlogPost[];
    };
  };
  errors?: { message: string }[];
};

const GET_BLOG_POSTS = `
  query GetBlogPosts($first: Int!) {
    posts(first: $first) {
      nodes {
        id
        title
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

  return json.data.posts.nodes;
}
