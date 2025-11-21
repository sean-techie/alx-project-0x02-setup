import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";

export default function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded mb-6"
      >
        Add New Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.length === 0 && (
          <p className="text-gray-500">No posts yet. Add one!</p>
        )}

        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
