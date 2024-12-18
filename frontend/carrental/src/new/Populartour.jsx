import React from "react";

const tours = [
  {
    id: 1,
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    duration: "4 days",
    price: 189.25,
    image: "https://kathmanduvalleyco.com/wp-content/uploads/2017/08/Nepal-Pharilapche-526x1024.jpg",
  },
  {
    id: 2,
    location: "Kathmandu, Nepal",
    title: "Himalayan Bliss Trekking Tour",
    rating: "4.9 (341)",
    duration: "7 days",
    price: 499.99,
    image: "https://kathmanduvalleyco.com/wp-content/uploads/2017/08/Everest-trek-650x1024.jpg",
  },
  // Add more tours here...
];

function Populartour() {
  return (
    <div className="p-6">
      {/* Title Section */}
      <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
        Find Popular Tours
      </h2>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="overflow-hidden transition-transform duration-300 bg-white shadow rounded-2xl group hover:shadow-lg hover:-translate-y-2"
            style={{ maxWidth: "280px", margin: "auto" }} // Adjust width and center
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Location */}
              <p className="text-xs font-light text-gray-500">{tour.location}</p>

              {/* Title */}
              <h3 className="mt-1 text-base font-bold leading-tight text-gray-800 group-hover:text-blue-600">
                {tour.title}
              </h3>

              {/* Rating */}
              <p className="mt-1 text-xs text-gray-600">{tour.rating}</p>

              {/* Duration and Price */}
              <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200">
                <span className="text-xs text-gray-600">{tour.duration}</span>
                <span className="text-sm font-semibold text-blue-700">
                  From <span className="font-bold">${tour.price.toFixed(2)}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populartour;
