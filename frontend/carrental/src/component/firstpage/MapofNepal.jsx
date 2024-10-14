import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import mapOfNepal from '../../assets/mapimg.png'; // Update this path to the actual location of your image

const MapofNepal = () => {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Full page background map */}
      <img 
        src={mapOfNepal} 
        alt="Map of Nepal" 
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Consistent black overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Left side content */}
      <div className="relative flex items-end justify-start w-2/3 min-h-screen p-16 text-white">
        <div className="max-w-lg mb-16">
          {/* Large title with shadow */}
          <h1 className="mb-4 font-extrabold text-7xl text-shadow-lg">
            Discover Nepal
          </h1>

          {/* Subtext with larger size and slight shadow */}
          <p className="mb-10 text-2xl text-shadow-md">
            Nepal is a land of majestic mountains, rich culture, and spiritual heritage.
            Embark on an unforgettable adventure today.
          </p>

          {/* Button with glow effect */}
          <button className="px-10 py-4 text-lg font-semibold transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Right side - Boxes with links */}
      <div className="relative flex flex-col justify-center w-1/3 p-8">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">Explore More</h2>
        
        {/* Grid for the boxes in a row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Box 1 */}
          <Link to="/page1" className="flex items-center justify-center p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
            <span className="text-xl font-semibold text-gray-800">Trekking Adventures</span>
          </Link>

          {/* Box 2 */}
          <Link to="/page2" className="flex items-center justify-center p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
            <span className="text-xl font-semibold text-gray-800">Cultural Tours</span>
          </Link>

          {/* Box 3 */}
          <Link to="/page3" className="flex items-center justify-center p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
            <span className="text-xl font-semibold text-gray-800">Wildlife Safaris</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapofNepal;
