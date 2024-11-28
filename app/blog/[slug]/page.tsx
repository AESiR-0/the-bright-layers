import { fetchBlogPosts } from '@/lib/blog-client';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Generate static params for static generation
export async function generateStaticParams() {
  const posts = await fetchBlogPosts(100); // Fetch first 100 posts for static paths
  return posts.map((post) => ({
    slug: post.id, // Using ID as slug since that's what we have in the current setup
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetchBlogPosts(100);
  const post = posts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  // Format date without date-fns
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="space-y-4 mb-12">
        {post.featuredImageUrl && (
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={post.featuredImageUrl.node.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>

        {/* Author and Date */}
        <div className="flex items-center gap-4">
          <div>
            <p className="text-gray-900 font-medium">{post.author.node.name}</p>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
} 