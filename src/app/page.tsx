"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="font-semibold text-4xl flex items-center justify-center h-screen">
        Home Page
      </h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
