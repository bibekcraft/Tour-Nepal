import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import the react-slick carousel

const trekInfo = {
  name: "Everest Base Camp Trek",
  location: "Solukhumbu District, Nepal",
  description: "The Everest Base Camp trek offers stunning Himalayan views, rich Sherpa culture, and an unforgettable adventure at the foot of Mount Everest.",
  distance: "130 km (80 miles)",
  duration: "12-14 days",
  difficulty: "Challenging",
  altitude: {
    start: "Lukla (2,860 m)",
    highest: "Everest Base Camp (5,364 m)"
  },
  trailType: "Out-and-back",
  stops: ["Lukla", "Phakding", "Namche Bazaar", "Tengboche", "Dingboche", "Lobuche", "Gorak Shep", "Everest Base Camp"]
};

const itinerary = [
  { day: "Day 1", details: "Fly to Lukla, trek to Phakding" },
  { day: "Day 2", details: "Trek to Namche Bazaar" },
  // Other days...
];

const photos = {
  mainPhoto: "/path-to-main-photo.jpg",
  placePhotos: [
    "/path-to-place-photo1.jpg",
    "/path-to-place-photo2.jpg",
    "/path-to-place-photo3.jpg"
  ],
  otherPhotos: [
    "/path-to-other-photo1.jpg",
    "/path-to-other-photo2.jpg",
    "/path-to-other-photo3.jpg"
  ],
  mapImage: "/path-to-map-image.jpg",
  routeAdditionalImage: "/path-to-additional-route-image.jpg"
};

// Carousel settings for the react-slick slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const RouteDetails = () => {
  return (
    <div className="text-gray-800 bg-gray-100">
      {/* Trek Overview */}
      <section id="trek-overview" className="max-w-6xl px-4 py-16 mx-auto text-center bg-white border border-gray-200 rounded-lg shadow-lg">
        <motion.h2
          className="mb-8 text-4xl font-semibold text-green-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {trekInfo.name}
        </motion.h2>
        <p className="mb-6 text-lg text-gray-700">Location: {trekInfo.location}</p>
        <p className="text-lg text-gray-700">{trekInfo.description}</p>
      </section>

      {/* Carousel for Images and Weather */}
      <section id="photos-carousel" className="max-w-6xl px-4 py-16 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <h3 className="mb-8 text-3xl font-semibold text-center text-green-600">Explore the Trek</h3>
        
        {/* React Slick Carousel */}
        <Slider {...settings}>
          {/* Loop over place photos */}
          {photos.placePhotos.map((photo, index) => (
            <div key={index} className="p-4">
              <img src={photo} alt={`Place ${index}`} className="object-cover w-full rounded-lg shadow-lg h-96" />
            </div>
          ))}

          {/* Add weather image as a carousel item */}
          <div className="p-4">
            <img src="/path-to-weather-image.jpg" alt="Weather Condition" className="object-cover w-full rounded-lg shadow-lg h-96" />
            <h4 className="mt-4 text-2xl font-semibold text-center text-green-600">Weather Conditions</h4>
          </div>
        </Slider>
      </section>

      {/* Route Information */}
      <section id="route-info" className="max-w-6xl px-4 py-16 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <h3 className="mb-10 text-3xl font-semibold text-center text-green-600">Route Information</h3>
        <table className="w-full text-left text-gray-800 border-collapse">
          <tbody>
            <tr className="bg-green-100 border-b">
              <td className="p-4 font-semibold">Distance</td>
              <td className="p-4">{trekInfo.distance}</td>
            </tr>
            <tr className="border-b bg-green-50">
              <td className="p-4 font-semibold">Duration</td>
              <td className="p-4">{trekInfo.duration}</td>
            </tr>
            <tr className="bg-green-100 border-b">
              <td className="p-4 font-semibold">Difficulty Level</td>
              <td className="p-4">{trekInfo.difficulty}</td>
            </tr>
            <tr className="border-b bg-green-50">
              <td className="p-4 font-semibold">Altitude</td>
              <td className="p-4">{trekInfo.altitude.start} - {trekInfo.altitude.highest}</td>
            </tr>
            <tr className="bg-green-100 border-b">
              <td className="p-4 font-semibold">Trail Type</td>
              <td className="p-4">{trekInfo.trailType}</td>
            </tr>
          </tbody>
        </table>

        {/* Path Type Drawing */}
        <div className="my-10">
          <h4 className="mb-4 text-2xl font-semibold text-green-600">Path Type</h4>
          <img src="/path-to-path-type-drawing.png" alt="Path Type Drawing" className="w-64 h-40 mx-auto" />
        </div>

        <h4 className="mt-10 mb-4 text-2xl font-semibold text-green-600">Major Stops:</h4>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          {trekInfo.stops.map((stop, index) => (
            <li key={index} className="flex items-center">
              <img src={`/path-to-png-icon-${index}.png`} alt={`Stop icon ${index}`} className="w-6 h-6 mr-2" /> {/* PNG icons for major stops */}
              {stop}
            </li>
          ))}
        </ul>

        {/* Additional route information image */}
        <div className="mt-10">
          <motion.div
            className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={photos.routeAdditionalImage} alt="Additional Route Information" className="object-cover w-full transition-transform duration-500 transform h-80 hover:scale-110" />
          </motion.div>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="max-w-6xl px-4 py-16 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <h3 className="mb-8 text-3xl font-semibold text-center text-green-600">Itinerary</h3>
        <table className="w-full text-left text-gray-800 border-collapse">
          <thead className="bg-green-200">
            <tr>
              <th className="p-4">Day</th>
              <th className="p-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-100 border-b' : 'bg-green-50 border-b'}>
                <td className="p-4">{item.day}</td>
                <td className="p-4">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Trek map image */}
        <div className="mt-10">
          <motion.div
            className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={photos.mapImage} alt="Trekking Map" className="object-cover w-full transition-transform duration-500 transform h-80 hover:scale-110" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RouteDetails;
