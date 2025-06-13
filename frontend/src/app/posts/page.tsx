"use client";

import TextareaChat from "@/components/TextareaChat";
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        console.log("API Response:", response.data);
        setPosts(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("データの取得に失敗しました");
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">投稿一覧</h1>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded">
              <div className="font-bold">{post.user_name}</div>
              <div className="mt-2">{post.content}</div>
            </div>
          ))}
          <TextareaChat />
        </div>
      </div>
    </main>
  );
}
