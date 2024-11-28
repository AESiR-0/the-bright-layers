"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogPosts } from "@/lib/blog-client";

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
  featuredImageUrl: FeaturedImage | null;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = date.getFullYear();

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

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchBlogPosts(3); // Fetch only 3 posts for the preview section
      setPosts(fetchedPosts);
    };
    fetchData();
  }, []);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div
                className="bg-white border hover:cursor-pointer border-gray-300 rounded-lg shadow-md overflow-hidden h-full"
                onMouseEnter={() => setHoveredPostId(post.id)}
                onMouseLeave={() => setHoveredPostId(null)}
              >
                {post.featuredImageUrl && (
                  <div className="relative w-full h-64">
                    <Image
                      src={post.featuredImageUrl.node.sourceUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {formatDate(post.date)}
                  </p>
                  <p className="text-sm text-right text-gray-500">
                    By {post.author.node.name}
                  </p>
                </div>
                <div
                  className={`h-1 bg-orange-500 ${hoveredPostId === post.id ? "w-full" : "w-0"
                    } transition-all duration-500`}
                />
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="cursor-pointer border mt-10 border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
