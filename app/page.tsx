// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { CarouselSize } from "@/components/sections/Carousel";
import Services from "@/components/sections/Services";
import Blogs from "@/components/sections/Blogs";
import ClientMarquee from "@/components/sections/ClientMarquee";

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

export default async function Home() {
  // Fetching data directly in the component
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

    const posts = data?.posts?.nodes || []; // Default to empty array if no posts

    return (
      <div>
        <Hero />
        <About />
        <CarouselSize />
        <Services />
        <ClientMarquee />
        <Blogs posts={posts} /> {/* Pass posts as props */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <div>
        <Hero />
        <About />
        <CarouselSize />
        <Services />
        <Blogs posts={[]} /> {/* Pass empty array if fetching fails */}
      </div>
    );
  }
}
