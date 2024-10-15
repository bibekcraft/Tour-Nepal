function Provience() {
  return (
    <div>

      {/* Search Bar */}
      <div className="flex max-w-lg mx-auto mt-20 overflow-hidden font-sans border-2 border-green-600 rounded-full shadow-lg">
        <input 
          type="text" 
          placeholder="Search something..." 
          className="w-full px-4 py-3 text-base text-gray-800 outline-none bg-gray-50 focus:ring-2 focus:ring-green-500"
        />
        <button type='button' className="flex items-center justify-center px-5 transition-colors bg-green-700 hover:bg-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      <div className="relative flex justify-end mt-6 mr-6">
      {/* Dropdown Wrapper */}
      <div className="relative inline-block text-left group">
        <div>
          {/* Options Button */}
          <button 
            type="button" 
            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-100 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-expanded="true" 
            aria-haspopup="true"
          >
            Options
            <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute right-0 z-10 hidden w-56 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Duplicate</a>
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Archive</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Move</a>
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Share</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Add to favorites</a>
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Provience;
