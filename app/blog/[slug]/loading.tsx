export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="space-y-4 mb-12">
        <div className="aspect-video w-full bg-gray-200 rounded-lg" />
        <div className="h-12 w-3/4 bg-gray-200 rounded" />
        <div className="flex items-center gap-4">
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