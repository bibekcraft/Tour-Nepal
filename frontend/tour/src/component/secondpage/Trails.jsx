import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SearchBar from '../firstpage/SearchBar';
import Footer from '../firstpage/Footer';
// import Popularthingtodo from '../../new/Popularthingtodo';
const Trails = () => {
  const [trails, setTrails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const [selectedLetter, setSelectedLetter] = useState(''); // For alphabet filtering

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/categories/${categoryId}/trail-items/`);
        setTrails(response.data);
      } catch (err) {
        setError('Failed to fetch trails. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchTrails();
    }
  }, [categoryId]);

  if (isLoading) {
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  if (trails.length === 0) {
    return <p className="text-center text-gray-600">No trails found for this category.</p>;
  }

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <SearchBar />
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Explore Trails</h1>
        <p className="mt-2 text-gray-600">Discover amazing trekking trails across various categories.</p>
      </div>

      {/* Alphabet Navigation for Filtering */}
      <div className="flex justify-center mb-8 space-x-3">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`px-4 py-2 text-xl font-semibold transition-colors duration-300 rounded-full 
            ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Trails Grid */}
      <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {trails
          .filter((trail) => !selectedLetter || trail.name.startsWith(selectedLetter))
          .map((trail) => (
            <motion.div
              key={trail.id}
              className="overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:scale-105"
            >
              <div className="relative">
                <img
                  src={trail.image}
                  alt={`Image of the trail ${trail.name}`}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{trail.name}</h3>
                <p className="flex items-center mb-3 text-gray-500">
                  <FontAwesomeIcon icon={faLocationPin} className="mr-1 text-green-600" />
                  {trail.location}
                </p>
                <div className="flex items-center justify-between mb-4 text-md">
                  <p className="font-semibold text-gray-600">
                    {trail.traveltimeinday} Day & {trail.traveltimeinnight} Night
                  </p>
                  <p className="font-semibold text-red-600">Difficulty: {trail.difficulty}</p>
                </div>
                <Link
                  to={`/trail/${trail.id}/practise`}
                  className="inline-block px-4 py-2 mt-4 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
        {/* <Popularthingtodo/> */}
        <Footer />
            </div>
  );
};

export default Trails;
