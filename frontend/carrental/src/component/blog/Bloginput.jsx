import React from 'react';
import { useState } from 'react';

const Bloginput = () => {
  const [selectedLetter, setSelectedLetter] = useState(''); // For alphabet filtering

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  return (
    <div className="px-6 py-12 mx-auto max-w-7xl sm:px-12">
<div className="w-24 h-24 mb-20 bg-green-600 border-4 border-white rounded-full"></div>
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
      <div className="grid gap-12 md:grid-cols-3">

        {/* Blog Post 1 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <img 
            className="object-cover w-full h-64" 
            src="https://via.placeholder.com/600x400" 
            alt="Blog Post Image"
          />
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Blog Title</h2>
            <p className="mb-4 text-gray-600">
              This is a short description of the blog post. You can write a brief overview here, summarizing the content of the article or post.
            </p>
            <a href="/blog/post-id" className="text-indigo-600 hover:text-indigo-800">Read more...</a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <img 
            className="object-cover w-full h-64" 
            src="https://via.placeholder.com/600x400" 
            alt="Blog Post Image"
          />
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Another Blog Title</h2>
            <p className="mb-4 text-gray-600">
              Here's another brief description of a different blog post. It provides a quick look into what the content will be about.
            </p>
            <a href="/blog/post-id" className="text-indigo-600 hover:text-indigo-800">Read more...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloginput;
