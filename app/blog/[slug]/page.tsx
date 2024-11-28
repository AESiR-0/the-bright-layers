import { getPost, getBlogPosts } from '@/lib/wordpress';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

// Generate static params for static generation
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="space-y-4 mb-12">
        {post.featuredImage && (
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Categories */}
        <div className="flex gap-2">
          {post.categories?.nodes.map((category) => (
            <span
              key={category.slug}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {category.name}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>

        {/* Author and Date */}
        <div className="flex items-center gap-4">
          {post.author.node.avatar?.url && (
            <Image
              src={post.author.node.avatar.url}
              alt={post.author.node.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <p className="text-gray-900 font-medium">{post.author.node.name}</p>
            <p className="text-gray-500 text-sm">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </p>
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

// Loading state
export function loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="space-y-4 mb-12">
        <div className="aspect-video w-full bg-gray-200 rounded-lg" />
        <div className="h-8 w-32 bg-gray-200 rounded-full" />
        <div className="h-12 w-3/4 bg-gray-200 rounded" />
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
    </div>
  );
} 