"use client";
import React from "react";
import Image from "next/legacy/image";
import { useParams } from "next/navigation";
import { getBlogById } from "../../../data/blogPosts";
import Link from "next/link";

const BlogPostDetail = () => {
  const params = useParams();
  const postId = params?.id;

  if (!postId) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Invalid Blog ID
        </h1>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find the blog post
  const post = getBlogById(postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Blog Post Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span>{post.author}</span>
          <span className="mx-3">|</span>
          <span>{post.date}</span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-8">
          <Image
            src={post.image.src}
            alt={post.title}
            fill
            width={500}
            height={300}
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Topics */}
      <div className="mt-8 flex flex-wrap gap-2">
        {post.topics.map((topic) => (
          <span
            key={topic}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Back to Blog Link */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogPostDetail;
