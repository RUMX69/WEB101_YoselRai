// CommentCard: reusable component to display a single comment
// Receives comment data via props

export default function CommentCard({ comment }) {
  return (
    <div className="flex gap-3 py-3">
      {/* User avatar */}
      <img
        src={comment.avatar}
        alt={comment.user}
        className="w-9 h-9 rounded-full flex-shrink-0"
      />

      <div>
        {/* Username and timestamp */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium">{comment.user}</span>
          <span className="text-xs text-gray-500">{comment.time}</span>
        </div>

        {/* Comment text */}
        <p className="text-sm text-gray-800 mt-0.5">{comment.text}</p>

        {/* Like count */}
        <button className="text-xs text-gray-500 mt-1 hover:text-gray-800">
          👍 {comment.likes}
        </button>
      </div>
    </div>
  );
}