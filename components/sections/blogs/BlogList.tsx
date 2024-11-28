"use client";

import { fetchBlogPosts } from "@/lib/blog-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Author = {
  node: {
    name: string;
  };
};

type FeaturedImage = {
  node: {
    sourceUrl: string;
  };
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: Author;
  featuredImageUrl: FeaturedImage | null; // URL of the featured image
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = date.getFullYear();

  // Add ordinal suffix to the day
  const ordinal =
    day % 10 === 1 && day !== 11
      ? "ST"
      : day % 10 === 2 && day !== 12
        ? "ND"
        : day % 10 === 3 && day !== 13
          ? "RD"
          : "TH";

  return `${day}${ordinal} ${month} ${year}`;
}

export default function BlogPage() {
  const [postsWP, setPostsWP] = useState<BlogPost[]>([]);
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null); // Track hovered post ID

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchBlogPosts(6);
      setPostsWP(posts);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {postsWP.map((post) => (
          <Link href={`/blog/${post.id}`}>
            <div

              key={post.id}
              className="bg-white border hover:cursor-pointer border-gray-300 rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredPostId(post.id)} // Set hovered post ID
              onMouseLeave={() => setHoveredPostId(null)} // Reset onMouseLeave
            >
              {post.featuredImageUrl && (
                <div className="relative w-full h-64">
                  <Image
                    src={post.featuredImageUrl.node.sourceUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(post.date)}
                </p>
                <p className="text-sm text-right text-gray-500 mt-2">
                  By {post.author.node.name}
                </p>
              </div>
              <div
                className={`h-1 bg-orange-500 ${hoveredPostId === post.id ? "w-full" : "w-0"
                  } transition-all duration-500`}
              ></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
