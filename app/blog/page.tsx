// app/blog/page.tsx
import { fetchBlogPosts } from "@/lib/blog-client";

type BlogPost = {
  id: string;
  title: string;
};

export default async function BlogPage() {
  // Fetch blog posts directly in the component
  const posts: BlogPost[] = await fetchBlogPosts(5); // Fetch the first 5 blog posts

  return (
    <div>
      <h1>Blog Titles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
