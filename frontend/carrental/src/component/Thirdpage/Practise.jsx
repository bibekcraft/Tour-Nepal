import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import guide from '../../assets/guide.png'; // Correct import for guide image

// Replace these URLs with actual image URLs or correct paths
const photoUrl1 = 'https://example.com/photo1.jpg'; 
const photoUrl2 = 'https://example.com/photo2.jpg'; 
const photoUrl3 = 'https://example.com/photo3.jpg'; 
const photoUrl4 = 'https://example.com/photo4.jpg'; 

const trekInfo = {
  distance: '130 km',
  duration: '12-14 days',
  difficulty: 'Challenging',
  altitude: { start: '2,860 m', highest: '5,364 m' },
  trailType: 'Out-and-back',
  district: 'Solukhumbu',
  province: 'Province No. 1',
  stops: ['Lukla', 'Phakding', 'Namche Bazaar', 'Tengboche', 'Dingboche', 'Lobuche', 'Gorak Shep', 'Everest Base Camp'],
};

export default function Practise() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Carousel Section */}
      <div className="flex items-center justify-center w-auto mx-20 mt-40 mb-12 bg-black shadow-xl h-80">
        <p className="text-white">Carousel Content Placeholder</p>
      </div>

      {/* Title Section */}
      <div className="flex justify-center mt-12 font-bold text-green-800">
        Pic: <p className="ml-2 text-gray-600">Supadeurali</p>
      </div>

      {/* Dashed Line with Arrow Section */}
      <div className="relative flex items-center justify-center my-16">
        <div className="absolute flex items-center justify-between w-full h-full">
          <div className="w-full h-px border-t-4 border-gray-400 border-dashed"></div>
          <svg
            className="absolute w-8 h-8 text-gray-600 transform rotate-45 -right-4 animate-bounce"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </div>
      </div>

      {/* Tilted Photo Section */}
      <div className="flex items-center justify-center mb-20 space-x-4">
        {[photoUrl1, photoUrl2, photoUrl3, photoUrl4].map((photo, index) => (
          <div
            key={index}
            className="w-64 h-48 overflow-hidden transition-transform duration-500 ease-in-out transform border-4 border-green-800 rounded-lg shadow-md -rotate-6 hover:rotate-0"
          >
            <img
              src={photo}
              alt={`Tilted Rectangle Photo ${index + 1}`}
              className="object-cover w-full h-full border-4 border-gray-400"
            />
          </div>
        ))}
      </div>

      {/* Route Information Section */}
      <section className="max-w-6xl p-6 mx-auto rounded-lg shadow-xl bg-gray-50">
        <h3 className="mb-12 text-4xl font-bold tracking-wide text-center text-gray-800">Route Information</h3>

        {/* Route Map Image */}
        <div className="flex justify-center mb-10">
          <img src={guide} alt="Route Map" className="w-auto h-auto max-w-sm rounded-lg shadow-2xl max-h-64" />
        </div>

        {/* Trek Info Table */}
        <table className="w-full text-left text-gray-700 border-collapse">
          <tbody>
            {[
              { label: 'Distance', value: trekInfo.distance },
              { label: 'Duration', value: trekInfo.duration },
              { label: 'Difficulty Level', value: trekInfo.difficulty },
              { label: 'Altitude', value: `${trekInfo.altitude.start} - ${trekInfo.altitude.highest}` },
              { label: 'Trail Type', value: trekInfo.trailType },
              { label: 'District', value: trekInfo.district },
              { label: 'Province', value: trekInfo.province },
            ].map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
                <td className="p-5 text-lg font-semibold">{item.label}</td>
                <td className="p-5 text-lg text-gray-600">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Major Stops Section */}
      <h4 className="mt-10 mb-8 text-3xl font-semibold text-center text-green-600">Major Stops</h4>
      <div className="grid grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-4">
        {trekInfo.stops.map((stop, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 transition-transform bg-white border border-gray-200 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 p-2 mb-4 bg-green-100 rounded-full">
                <img
                  src={`/path-to-png-icon-${index}.png`} // Add actual icons here
                  alt={`Stop icon ${index}`}
                  className="w-10 h-10"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{stop}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Itinerary Section */}
      <section className="max-w-6xl px-4 py-16 mx-auto mt-40 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h3 className="mb-8 text-3xl font-semibold text-center text-green-600">Itinerary</h3>

        <table className="w-full text-left text-gray-800 border-collapse">
          <thead className="bg-green-200">
            <tr>
              <th className="p-4 text-lg font-semibold">Day</th>
              <th className="p-4 text-lg font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: 'Day 1', detail: 'Arrival at the starting point and briefing.' },
              { day: 'Day 2', detail: 'Trek to the first stop along the trail.' },
              { day: 'Day 3', detail: 'Trek through scenic landscapes.' },
              { day: 'Day 4', detail: 'Rest day at a beautiful campsite.' },
              { day: 'Day 5', detail: 'Continue trekking to higher altitudes.' },
              { day: 'Day 6', detail: 'Reach the final destination and celebrate.' },
              { day: 'Day 7', detail: 'Return trek to the starting point.' },
            ].map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-100 border-b' : 'bg-green-50 border-b'}>
                <td className="p-4 font-medium text-gray-700">{item.day}</td>
                <td className="p-4 text-gray-600">{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
