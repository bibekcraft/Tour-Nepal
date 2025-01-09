import React from "react";

const Nav = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source src="https://www.youtube.com/watch?v=XS0QSHpXuws&list=RDMMEU_MyoenL_Q&index=2" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/40">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Make in your journey.</h1>
        <p className="mb-8 text-lg md:text-xl">
          Explore the world with what you love, beautiful natural beauty.
        </p>

        {/* Search Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <select
            className="p-3 text-gray-800 bg-white rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Location</option>
          </select>
          <input
            type="date"
            className="p-3 text-gray-800 bg-white rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="p-3 text-gray-800 bg-white rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">People</option>
          </select>
          <button className="p-3 text-white transition bg-blue-600 rounded-md hover:bg-blue-700">
            Explore Now
          </button>
        </div>

        <p className="text-sm md:text-base">
          Popular Places: <span className="font-medium">Bali, Istanbul, Rome, Paris.</span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-20 w-full">
        {/* Empty Navbar with Transparent Background */}
      </nav>
    </div>
  );
};

export default Nav;
