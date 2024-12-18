import hm from '../assets/deer.jpg';

function Home() {
  return (
    <div className="relative flex items-center justify-center w-10/12 mx-auto mt-12 overflow-hidden shadow-lg rounded-xl h-96">
      {/* Background Image */}
      <img
        src={hm}
        className="object-cover w-full h-full rounded-xl"
        alt="Deer"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/70 via-black/50 to-black/40 rounded-xl">
        {/* Title */}
        <p className="mb-6 text-4xl font-extrabold text-white drop-shadow-md">
          Discover Nepal
        </p>

        {/* Search Form */}
        <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg sm:w-8/12 lg:w-6/12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* "Where" Section */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* "When" Section */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">When</label>
              <input
                type="text"
                placeholder="Select dates"
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* "Tour Type" Section */}
            <div className="flex flex-col">
              <div className="text-sm font-medium text-gray-800">Tour Type</div>
              <select
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All tours</option>
                <option>Adventure</option>
                <option>Cultural</option>
                <option>Relaxation</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 text-center">
            <button className="w-full px-8 py-3 text-lg font-semibold text-white transition-transform duration-200 bg-orange-500 rounded-md shadow-md hover:bg-orange-600 hover:scale-105 sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
