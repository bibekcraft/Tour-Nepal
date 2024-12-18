import { useState } from "react";
import hm from "../assets/deer.jpg"; // Replace with your actual image import

const destinations = [
  { img: hm, name: "Paris", tours: "100+ Tours" },
  { img: hm, name: "Singapore", tours: "300+ Tours" },
  { img: hm, name: "Roma", tours: "400+ Tours" },
  { img: hm, name: "Bangkok", tours: "100+ Tours" },
  { img: hm, name: "Bali", tours: "600+ Tours" },
  { img: hm, name: "Phuket", tours: "200+ Tours" },
  { img: hm, name: "Tokyo", tours: "700+ Tours" },
  { img: hm, name: "Cappadocia", tours: "900+ Tours" },
];

function TrendingDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < destinations.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="px-6 my-12">
      <div className="mb-6 text-center">
        <p className="text-4xl font-extrabold text-gray-800">Trending Destinations</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="flex space-x-8 overflow-hidden">
          {destinations.slice(currentIndex, currentIndex + 4).map((destination, index) => (
            <div
              key={index}
              className="relative w-64 overflow-hidden transition-transform duration-300 ease-in-out transform shadow-xl h-80 rounded-2xl hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={destination.img}
                alt={destination.name}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-black bg-opacity-50 rounded-b-2xl">
                <p className="text-2xl font-bold">{destination.name}</p>
                <p className="text-lg">{destination.tours}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-0 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-indigo-700 rounded-full shadow-lg top-1/2 focus:outline-none hover:bg-indigo-600"
        >
          &#8249;
        </button>
        <button
          onClick={goNext}
          className="absolute right-0 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-indigo-700 rounded-full shadow-lg top-1/2 focus:outline-none hover:bg-indigo-600"
        >
          &#8250;
        </button>
      </div>

      {/* See All Button */}
      <div className="mt-6 text-center">
        <button className="text-xl font-semibold text-indigo-600 hover:underline">
          See All
        </button>
      </div>
    </div>
  );
}

export default TrendingDestinations;
  