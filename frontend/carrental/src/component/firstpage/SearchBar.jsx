
function SearchBar() {
  return (
    <div className="flex items-center max-w-5xl p-8 mx-auto mt-20 space-x-8 bg-white rounded-lg shadow-lg">
    {/* Destination Dropdown */}
    <div className="flex flex-col w-1/3">
      <label className="text-base font-bold text-gray-700 uppercase">Destination</label>
      <select className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
        <option>All</option>
        <option>Destination 1</option>
        <option>Destination 2</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Activity Dropdown */}
    <div className="flex flex-col w-1/3">
      <label className="text-base font-bold text-gray-700 uppercase">Activity</label>
      <select className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
        <option disabled selected>Select an Option</option>
        <option>Activity 1</option>
        <option>Activity 2</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Duration Dropdown */}
    <div className="flex flex-col w-1/3">
      <label className="text-base font-bold text-gray-700 uppercase">Duration</label>
      <select className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
        <option>Less Than 10 Days</option>
        <option>10-20 Days</option>
        <option>More Than 20 Days</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Search Button */}
    <button className="flex items-center justify-center p-4 text-white bg-green-700 rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-red-700">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 0 1 5.326 13.894l4.833 4.833a1 1 0 0 1-1.415 1.415l-4.833-4.833A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 4.472 10.058A6 6 0 0 0 10 4z"/>
      </svg>
    </button>
  </div>  )
}

export default SearchBar