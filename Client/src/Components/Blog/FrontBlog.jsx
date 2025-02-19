"use client"

import { useState, useRef } from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

// Sample post with one image of Nepal's nature
const posts = [
  {
    id: 1,
    username: "nepaltourism",
    userImage: "https://picsum.photos/32/32?random=1",
    location: "Annapurna Base Camp, Nepal",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l0ISZjCmzdnuNQ41hUedaNK9ymBTmX.png", // One image of Nepal
  },
  {
    id: 2,
    username: "nepaltourism",
    userImage: "https://picsum.photos/32/32?random=1",
    location: "Annapurna Base Camp, Nepal",
    image: "https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg", // One image of Nepal
  },
  {
    id: 3,
    username: "nepaltourism",
    userImage: "https://picsum.photos/32/32?random=1",
    location: "Annapurna Base Camp, Nepal",
    image: "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/dawn-light-over-ama-dablam-sagarmatha-feng-wei-photography.jpg", // One image of Nepal
  }
]

const InstagramPost = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-[350px] flex-shrink-0 p-4 transition-transform transform hover:scale-105">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={post.userImage || "/placeholder.svg"}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-semibold text-sm text-gray-800">{post.username}</p>
            <p className="text-xs text-gray-500">{post.location}</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
        <img
          src={post.image || "/placeholder.svg"}
          alt={`Nepal ${post.location}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Content */}
      <div className="mt-3">
        {/* Location */}
        <p className="text-sm text-gray-600">{post.location}</p>
        {/* "See more" button */}
        <Link to="/ViewFrontBlog">
        <button className="text-blue-500 text-sm mt-2">See more</button>
        </Link>
      </div>
    </div>
  )
}

const FrontBlog = () => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -370, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 370, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow-md z-10 hover:bg-white transition-colors"
          >
            <IoChevronBackOutline size={24} />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-4 px-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => (
              <InstagramPost key={post.id} post={post} />
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow-md z-10 hover:bg-white transition-colors"
          >
            <IoChevronForwardOutline size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FrontBlog
