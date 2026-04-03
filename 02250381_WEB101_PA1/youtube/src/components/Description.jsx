// Description: shows video description with expand/collapse toggle
// Demonstrates useState for UI state management

"use client";
import { useState } from "react";

export default function Description({ text }) {
  // Controls whether full description is shown
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4 p-3 bg-gray-100 rounded-xl text-sm">
      {/* Show full or trimmed text based on state */}
      <p className="whitespace-pre-line text-gray-700">
        {expanded ? text : text.slice(0, 120) + "..."}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 font-semibold text-gray-900 hover:underline"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}