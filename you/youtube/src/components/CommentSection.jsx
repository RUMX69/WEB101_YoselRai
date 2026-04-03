// CommentSection: renders a comment input field and a list of CommentCards
// Uses useState to manage new comment input

"use client";
import { useState } from "react";
import CommentCard from "./CommentCard";

export default function CommentSection({ comments }) {
  const [input, setInput] = useState("");
  const [allComments, setAllComments] = useState(comments);

  // Adds a new comment to the top of the list
  function handleSubmit() {
    if (!input.trim()) return;
    const newComment = {
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/40?img=5",
      text: input,
      likes: 0,
      time: "Just now",
    };
    setAllComments([newComment, ...allComments]);
    setInput("");
  }

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-base mb-4">
        {allComments.length} Comments
      </h2>

      {/* Comment input */}
      <div className="flex gap-3 items-start mb-6">
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="Your avatar"
          className="w-9 h-9 rounded-full flex-shrink-0"
        />
        <div className="flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border-b pb-1 outline-none text-sm focus:border-black"
          />
          <div className="flex justify-end mt-2 gap-2">
            <button
              onClick={() => setInput("")}
              className="text-sm px-3 py-1 rounded-full hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="text-sm px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* Render each comment using the reusable CommentCard */}
      <div className="divide-y">
        {allComments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}