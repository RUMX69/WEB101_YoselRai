// VideoInfo: shows title, views, like/dislike buttons, and channel info
// Uses useState to toggle the like button

"use client";
import { useState } from "react";

export default function VideoInfo({ video }) {
  // State to track whether the user has liked the video
  const [liked, setLiked] = useState(false);

  return (
    <div className="mt-3">
      {/* Video title */}
      <h1 className="text-lg font-semibold leading-snug">{video.title}</h1>

      {/* Views + action buttons row */}
      <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
        <span className="text-sm text-gray-500">
          {video.views} · {video.uploadedAt}
        </span>

        <div className="flex items-center gap-2">
          {/* Like button — toggles on click */}
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition
              ${liked ? "bg-blue-100 border-blue-400 text-blue-700" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"}`}
          >
            👍 {liked ? "Liked" : video.likes}
          </button>

          <button className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200">
            👎 Dislike
          </button>

          <button className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200">
            ↗ Share
          </button>
        </div>
      </div>

      {/* Channel info */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        <div className="flex items-center gap-3">
          <img
            src={video.channel.avatar}
            alt={video.channel.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-sm">{video.channel.name}</p>
            <p className="text-xs text-gray-500">{video.channel.subscribers}</p>
          </div>
        </div>

        <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </div>
  );
}