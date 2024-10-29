import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import guide from '../../assets/guide.png'; // Correct import for guide image

// Example hotel images (replace with actual URLs)
const hotelPhotos = [
  'https://example.com/hotel1.jpg',
  'https://example.com/hotel2.jpg',
  'https://example.com/hotel3.jpg',
  'https://example.com/hotel4.jpg',
  'https://example.com/hotel5.jpg',
  'https://example.com/hotel6.jpg',
];

// Recommended hotels
const recommendedHotels = [
  { 
    name: 'Manakamana Village Resort', 
    location: 'Near the Cable Car Station', 
    phone: '9876543210', 
    description: 'A perfect spot with beautiful views and comfortable rooms.', 
    photo: 'https://example.com/photo1.jpg' 
  },
  { 
    name: 'Hotel Gorkha Inn', 
    location: 'Close to Main Trekking Routes', 
    phone: '9823456789', 
    description: 'Ideal for trekkers looking for a cozy rest stop.', 
    photo: 'https://example.com/photo2.jpg' 
  },
  { 
    name: 'Himalayan View Hotel', 
    location: 'Short Drive from Base Camp', 
    phone: '9812345678', 
    description: 'Enjoy the magnificent Himalayan views from your window.', 
    photo: 'https://example.com/photo3.jpg' 
  },
  { 
    name: 'Buddha Hotel and Restaurant', 
    location: 'In the Heart of the Village', 
    phone: '9801234567', 
    description: 'Great food, friendly service, and a central location.', 
    photo: 'https://example.com/photo4.jpg' 
  },
  { 
    name: 'Rama Hotel', 
    location: 'Budget-Friendly Option', 
    phone: '9798765432', 
    description: 'Affordable and clean accommodations for budget travelers.', 
    photo: 'https://example.com/photo5.jpg' 
  },
  { 
    name: 'Green Palace Resort', 
    location: 'Peaceful Retreat', 
    phone: '9787654321', 
    description: 'Escape the hustle with a relaxing stay at our peaceful retreat.', 
    photo: 'https://example.com/photo6.jpg' 
  },
];

// Nearby places
const nearbyPlaces = [
  { name: 'Gorkha Durbar', district: 'Gorkha' },
  { name: 'Taal Barahi Temple', district: 'Pokhara' },
  { name: 'Bhimsen Thapa Palace', district: 'Gorkha' },
  { name: 'Syangja District', district: 'Syangja' },
  { name: 'Khadga Devi Temple', district: 'Syangja' },
];

// Temple information
const templeInfo = {
  distance: '15 km',
  duration: '1-2 days',
  difficulty: 'Moderate',
  altitude: { start: '700 m', highest: '1,400 m' },
  trailType: 'Out-and-back',
  district: 'Gorkha',
  province: 'Gandaki Pradesh',
  stops: ['Syangja', 'Gorkha', 'Manakamana'],
};

// FAQs Section
const faqs = [
  {
    question: 'What is the best time to visit Manakamana Temple?',
    answer: 'The best time to visit is from September to November and February to April when the weather is pleasant and clear.',
  },
  {
    question: 'How can I reach Manakamana Temple?',
    answer: 'You can reach Manakamana Temple by a cable car from the base station or by trekking from Gorkha.',
  },
  {
    question: 'Is there an entrance fee for Manakamana Temple?',
    answer: 'Yes, there is a nominal entrance fee for the temple, which goes towards maintenance and preservation.',
  },
  {
    question: 'Are there accommodations near the temple?',
    answer: 'Yes, there are several hotels and guesthouses near the temple, providing comfortable lodging for visitors.',
  },
  {
    question: 'What should I pack for the trek?',
    answer: 'Pack comfortable trekking shoes, water, snacks, and weather-appropriate clothing.',
  },
];

export default function Manakamana() {
  const [loading, setLoading] = useState(true);
  const [visibleFaqIndex, setVisibleFaqIndex] = useState(null); // State to manage visible FAQ index

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading delay
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setVisibleFaqIndex(visibleFaqIndex === index ? null : index); // Toggle the visibility of the answer
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Carousel Section */}
      <div className="flex items-center justify-center w-auto mx-4 mt-40 mb-12 overflow-hidden bg-black rounded-lg shadow-xl h-80">
        <p className="text-xl text-white font-petemoss">Carousel Content Placeholder</p>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-start mt-12 font-bold text-green-800">
  <h2 className="text-4xl font-petemoss">Manakamana Temple</h2>
  <div className='w-full mt-4 text-lg text-center text-gray-600'> {/* Set w-full to center this description within the parent */}
    This is a description section for the Manakamana Temple.
  </div>
</div>

      <section className="flex flex-col items-start max-w-6xl p-8 mx-auto my-12 ">
  <h3 className="mb-8 font-bold text-center text-green-800 font-petemoss text-8xl">Cultural Significance</h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-600">
    The Manakamana Temple holds immense cultural and spiritual significance for the people of Nepal. 
    Dedicated to the goddess Manakamana, this sacred site is believed to grant the wishes of those who visit. 
    Pilgrims from all over the country travel to this temple to seek blessings and fulfill their desires. 
    The temple also hosts several festivals throughout the year, drawing large crowds and showcasing vibrant traditions.
  </p>
</section>



      {/* Dashed Line with Arrow Section */}
      <div className="relative flex items-center justify-center my-16">
        <div className="absolute flex items-center justify-between w-full h-full">
          <div className="w-full h-px border-t-4 border-gray-400 border-dashed"></div>
          <svg
            className="absolute w-8 h-8 text-green-800 transform rotate-45 -right-4 animate-bounce"
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
        {hotelPhotos.map((photo, index) => (
          <div
            key={index}
            className="w-64 h-48 overflow-hidden transition-transform duration-500 ease-in-out transform border-4 border-green-800 rounded-lg shadow-lg -rotate-6 hover:rotate-0"
          >
            <img
              src={photo}
              alt={`Tilted Rectangle Photo ${index + 1}`}
              className="object-cover w-full h-full border-4 border-gray-400"
              loading="lazy" // Lazy loading for images
            />
          </div>
        ))}
      </div>

      {/* Temple Information Section */}
      <section className="max-w-6xl p-6 mx-auto mb-12 ">
        <h3 className="flex flex-col items-start mb-12 font-bold tracking-wide text-center text-green-800 text-8xl font-petemoss" > Information</h3>

        {/* Route Map Image */}
        <div className="flex justify-center mb-10">
          <img src={guide} alt="Route Map" className="w-auto h-auto max-w-sm rounded-lg shadow-2xl max-h-64" />
        </div>

        {/* Trek Info Table */}
        <table className="w-full text-left text-red-800 border-collapse">
          <tbody>
            {[
              { label: 'Distance', value: templeInfo.distance },
              { label: 'Duration', value: templeInfo.duration },
              { label: 'Difficulty Level', value: templeInfo.difficulty },
              { label: 'Altitude', value: `${templeInfo.altitude.start} - ${templeInfo.altitude.highest}` },
              { label: 'Trail Type', value: templeInfo.trailType },
              { label: 'District', value: templeInfo.district },
              { label: 'Province', value: templeInfo.province },
            ].map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
                <td className="p-5 text-lg font-semibold">{item.label}</td>
                <td className="p-5 text-lg text-gray-700">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Major Stops Section */}
      <h4 className="flex flex-col items-start mt-10 mb-8 font-semibold text-center text-green-800 text-8xl font-petemoss">Major Stops</h4>
      <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {templeInfo.stops.map((stop, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 transition-transform bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 p-2 mb-4 bg-green-100 rounded-full shadow-md">
                <img
                  src={`/path-to-png-icon-${index}.png`} // Add actual icons here
                  alt={`Stop icon ${index}`}
                  className="w-10 h-10"
                />
              </div>
              <p className="text-lg font-semibold text-red-800">{stop}</p>
            </div>
          </motion.div>
        ))}
      </div>
{/* Local Cuisine Section */}
<section className="max-w-6xl p-8 mx-auto my-12 ">
  <h3 className="flex flex-col items-start mb-8 font-bold text-center text-green-800 font-petemoss text-8xl">Local Cuisine</h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-700">
    Hungry after conquering that temple hike? Fear not! The local Nepali cuisine is here to rescue your taste buds. From savory to sweet, you’ll find dishes that are not just tasty but loaded with a punch of culture and carbs (the trekkers' secret fuel!).
  </p>
  
  {/* Recommended Dishes */}
  <h4 className="flex flex-col items-start mb-4 font-semibold text-center text-green-800 font-petemoss text-8xl">Must-Try Dishes</h4>
  <ul className="mb-8 text-lg leading-relaxed list-disc list-inside">
  <li>
    <strong className="text-red-800">Dal Bhat:</strong> 
    <span className="text-gray-700">                 The OG Nepali meal. Rice, lentils, veggies, and pickles. Perfect for saying, "I just climbed a mountain, what’s next?"</span>
  </li>
  <li>
    <strong className="text-red-800">Momo:</strong> 
    <span className="text-gray-700">              Tiny pockets of happiness. These dumplings will have you asking, "Why didn't I try this sooner?"</span>
  </li>
  <li>
    <strong className="text-red-800">Gundruk:</strong> 
    <span className="text-gray-700">                Fermented greens. Sounds funky, tastes fantastic. Your stomach will thank you, eventually.</span>
  </li>
  <li>
    <strong className="text-red-800">Sel Roti:</strong> 
    <span className="text-gray-700">                Crispy, soft, and shaped like a ring... it's basically a rice doughnut, and yes, it’s a breakfast dream.</span>
  </li>
  <li>
    <strong className="text-red-800">Yomari:</strong> 
    <span className="text-gray-700">                 The sweetest treat in town! Rice flour dumplings stuffed with sesame and jaggery, traditionally devoured on special days... but any day can be special, right?</span>
  </li>
</ul>

</section>

{/* Recommended Hotels Section */}
<section className="max-w-6xl p-8 mx-auto my-12">
  <h3 className="flex flex-col items-start mb-8 font-bold text-center text-green-800 text-8xl font-petemoss">
    Recommended Hotels
  </h3>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {recommendedHotels.map((hotel, index) => (
      <div key={index} className="p-6 transition-shadow duration-300 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
        <img 
          src={hotel.photo} 
          alt={hotel.name} 
          className="object-cover w-full h-40 mb-4 rounded-lg" 
        />
        <h4 className="mb-2 text-2xl font-semibold text-gray-800">{hotel.name}</h4>
        <p className="text-green-800">{hotel.location}</p>
        <p className="text-green-800">Phone: {hotel.phone}</p>
        <p className="mt-4 text-sm text-gray-800">{hotel.description}</p>
      </div>
    ))}
  </div>
</section>


      {/* Nearby Places Section */}
      <section className="max-w-6xl p-8 mx-auto my-12 "> {/* Increased padding */}
  <h3 className="flex flex-col items-start mb-8 font-bold text-center text-green-800 text-8xl font-petemoss">Nearby Places </h3> {/* Increased title font size */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> {/* Increased gap between cards */}
    {nearbyPlaces.map((place, index) => (
      <div key={index} className="p-6 transition-shadow duration-300 border border-gray-200 rounded-lg shadow-md hover:shadow-xl"> {/* Increased padding for individual cards */}
        <h4 className="mb-2 text-2xl font-semibold text-gray-800">{place.name}</h4> {/* Increased place name font size */}
        <p className="text-gray-600">District: {place.district}</p>
      </div>
    ))}
  </div>
</section>
{/* Cultural Significance Section */}
<section className="max-w-6xl p-6 mx-auto my-12 ">
    <h3 className="flex flex-col items-start mb-8 font-bold text-center text-green-800 text-8xl font-petemoss">Local Guides</h3>
    <ul className="text-lg leading-relaxed text-gray-600 list-disc list-inside">
        <li><strong>Guide Name 1:</strong> Specializes in historical tours. Contact: 123-456-7890.</li>
        <li><strong>Guide Name 2:</strong> Expert in trekking routes. Contact: 098-765-4321.</li>
    </ul>
</section>


      {/* FAQs Section */}
      <section className="max-w-6xl p-6 mx-auto my-12 mb-12 ">
        <h3 className="flex flex-col items-start mb-6 font-bold text-center text-green-800 text-8xl font-petemoss">FAQs</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="my-4 border-b border-gray-300">
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full p-4 text-lg font-semibold text-left text-gray-800 bg-gray-100 hover:bg-gray-200"
            >
              {faq.question}
              <span className="ml-2">{visibleFaqIndex === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {visibleFaqIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </div>
  );
}
