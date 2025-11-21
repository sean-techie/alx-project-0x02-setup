import React from "react";
import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-3">User ID: {userId}</p>
    </div>
  );
}
