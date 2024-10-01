import { FcOk } from "react-icons/fc";

function TopBar() {
  return (
    <div className="bg-gray-100 font-poppins ">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <h1 className="text-2xl font-semibold">Urban Wheels</h1>
        </div>
        <div className="space-x-6">
          <button className="px-6 py-2 transition-all border border-black rounded-md hover:bg-gray-200">
            Register
          </button>
          <button className="px-6 py-2 text-white transition-all bg-black rounded-md hover:bg-gray-800">
            Login
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 text-center">
        <h2 className="text-5xl font-bold text-green-800">Find Your Perfect Place to visit</h2>
        <p className="mt-4 text-lg text-gray-500">
          Explore our wide range of place    for your journey.
        </p>

        {/* Features */}
        <div className="flex justify-center mt-12 space-x-12">
          <div className="flex items-center space-x-3 text-lg">
            <FcOk className="text-2xl " />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FcOk className="text-2xl" />
            <span>Transparent pricing</span>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FcOk className="text-2xl" />
            <span>Flexible cancellations</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="inline-block p-10 mt-16 bg-white rounded-lg shadow-xl">
          <div className="flex items-center space-x-10">
            <div>
              <label className="block text-lg font-semibold">Search Locations To Visit</label>
              <input
                type="text"
                placeholder="Select location"
                className="p-3 mt-2 border-2 border-gray-300 rounded-lg w-104 focus:outline-none focus:border-black"
              />
            </div>


            <button className="p-4 text-white transition-all bg-black rounded-full hover:bg-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>

            </button>
          </div>
          <h4></h4>
          <div></div>

          <div className="flex items-center mt-20 space-x-10">
            
            <div>
              <label className="block text-lg font-semibold">Search Locations </label>
              <input
                type="text"
                placeholder="Select location"
                className="w-64 p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold"> Start from </label>
              <input
                type="date"
                className="w-48 p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold"> Estimated End </label>
              <input
                type="date"
                className="w-48 p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            <button className="p-4 text-white transition-all bg-black rounded-full hover:bg-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TopBar;
