import React from "react";
import nepal from "../assets/nepal.png";
import abstract from "../assets/abstractbg.png";

function DsnCrausel() {
  return (
    <div
      className="relative flex items-center w-7/12 mx-auto overflow-hidden rounded-lg shadow-lg h-80 mt-11"
      style={{
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative flex items-center w-full h-full">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-5/12 h-full p-6 space-y-4 text-center">
          <p className="text-2xl font-bold text-white">Join the Community</p>
          <p className="text-lg font-medium text-gray-200">Stay Updated With Us!</p>

          {/* Email Input and Button */}
          <div className="flex items-center w-full space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-7/12 h-full">
          <img
            src={nepal}
            alt="Destination"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default DsnCrausel;
