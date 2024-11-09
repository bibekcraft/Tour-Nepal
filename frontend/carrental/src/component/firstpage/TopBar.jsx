import { FcOk } from "react-icons/fc";

function TopBar() {
  return (
    <div className="bg-gray-100 font-poppins">
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-6 bg-white shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="w-12 h-12 bg-black rounded-full"></div>
          <h1 className="text-4xl font-semibold">Urban Wheels</h1>
        </div>
        <div className="space-x-8">
          <button className="px-10 py-3 text-lg transition-all border border-black rounded-md hover:bg-gray-200">
            Register
          </button>
          <button className="px-10 py-3 text-lg text-white transition-all bg-black rounded-md hover:bg-gray-800">
            Login
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 text-center">
        <h2 className="font-bold text-green-800 text-7xl">Find Your Perfect Place to Visit</h2>
        <p className="mt-8 text-2xl text-gray-500">
          Aim to expand the Reach of tourism in Nepal
        </p>

        {/* Features */}
        <div className="flex justify-center mt-20 space-x-20">
          <div className="flex items-center space-x-5 text-2xl">
            <FcOk className="text-4xl" />
            <span>Time Friendly</span>
          </div>
          <div className="flex items-center space-x-5 text-2xl">
            <FcOk className="text-4xl" />
            <span>Transparent Pricing</span>
          </div>
          <div className="flex items-center space-x-5 text-2xl">
            <FcOk className="text-4xl" />
            <span>Flexible Cancellations</span>
          </div>
        </div>

        {/* Search Filter */}
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
        </div>
      </div>
    </div>
  );
}

export default TopBar;
