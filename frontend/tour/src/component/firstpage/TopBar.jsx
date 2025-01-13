import { FcOk } from "react-icons/fc";

import { useState } from "react";



function TopBar() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  
  return (
    <div className="bg-gray-100 font-poppins">
      {/* Navbar */}


      {/* Main Content */}
      <div className="py-24 text-center bg-gray-50">
        <h2 className="text-6xl font-bold text-green-800">Find Your Perfect Place to Visit</h2>
        <p className="mt-6 text-2xl text-gray-600">
          Aim to expand the reach of tourism in Nepal
        </p>

        {/* Features */}
        <div className="flex justify-center mt-16 space-x-12">
          <div className="flex items-center space-x-3 text-2xl text-gray-700">
            <FcOk className="text-3xl" />
            <span>Time Friendly</span>
          </div>
          <div className="flex items-center space-x-3 text-2xl text-gray-700">
            <FcOk className="text-3xl" />
            <span>Transparent Pricing</span>
          </div>
          <div className="flex items-center space-x-3 text-2xl text-gray-700">
            <FcOk className="text-3xl" />
            <span>Flexible Cancellations</span>
          </div>
        </div>

        {/* Search Filter */}
        <div className="flex items-center max-w-5xl p-8 mx-auto mt-16 space-x-8 bg-white shadow-lg rounded-xl">
          {/* Destination Dropdown */}
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-semibold text-gray-700 uppercase">Destination</label>
            <select className="p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
<select value={selectedValue} onChange={handleChange}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
            </select>
          </div>

          {/* Activity Dropdown */}
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-semibold text-gray-700 uppercase">Activity</label>
            <select className="p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option disabled selected>Select an Option</option>
              <option>Activity 1</option>
              <option>Activity 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Duration Dropdown */}
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-semibold text-gray-700 uppercase">Duration</label>
            <select className="p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Less Than 10 Days</option>
              <option>10-20 Days</option>
              <option>More Than 20 Days</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center p-4 text-white bg-green-700 rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a8 8 0 0 1 5.326 13.894l4.833 4.833a1 1 0 0 1-1.415 1.415l-4.833-4.833A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 4.472 10.058A6 6 0 0 0 10 4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
