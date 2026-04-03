// RecommendationCard: reusable card shown in the sidebar
// Receives video recommendation data via props

export default function RecommendationCard({ video }) {
  return (
    <div className="flex gap-2 cursor-pointer group">
      {/* Thumbnail with duration badge */}
      <div className="relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden bg-gray-200">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:opacity-90 transition"
        />
        <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
          {video.duration}
        </span>
      </div>

      {/* Video details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium line-clamp-2 group-hover:text-blue-600">
          {video.title}
        </p>
        <p className="text-xs text-gray-500 mt-1">{video.channel}</p>
        <p className="text-xs text-gray-500">
          {video.views} · {video.uploadedAt}
        </p>
      </div>
    </div>
  );
}