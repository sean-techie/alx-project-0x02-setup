import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-200 flex gap-4">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
