"use client";

import { useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useBlogs } from "../hooks/Blog";

// InstagramPost Component
const InstagramPost = ({ post }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md w-[350px] flex-shrink-0 p-4 transition-transform transform hover:scale-105">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <img
          src={post.authorImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xUoRKWsn5t03RfoeCEHWgUF5BtTHl9H1xA&s"}
          alt={post.author || "Author"}
          className="w-8 h-8 rounded-full object-cover mr-3"
        />
        <p className="font-semibold text-sm text-gray-800">{post.author || "GhumneSathi"}</p>
      </div>
    </div>
    <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
      <img
        src={post.images || "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=max&w=1080"}
        alt={`Nepal ${post.title}`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="mt-3">
      <p className="text-sm text-gray-600">{post.title}</p>
      <Link to="/ViewFrontBlog">
        <button className="text-blue-500 text-sm mt-2">See more</button>
      </Link>
    </div>
  </div>
);

// Main FrontBlog Component
const FrontBlog = () => {
  const scrollContainerRef = useRef(null);
  const { data, isLoading, error } = useBlogs();

  const scroll = (offset) => scrollContainerRef.current?.scrollBy({ left: offset, behavior: "smooth" });

  if (isLoading) return <div className="text-center py-8">Loading blogs...</div>;
  if (error) return <div className="text-center py-8">Error loading blogs: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-150 py-8">
      <div className="container mx-auto px-4 relative">
        <button onClick={() => scroll(-370)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
          <IoChevronBackOutline size={24} />
        </button>
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 py-4 px-2 scrollbar-hide">
          {data?.blogs?.map((post) => <InstagramPost key={post.id} post={post} />)}
        </div>
        <button onClick={() => scroll(370)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
          <IoChevronForwardOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default FrontBlog;
