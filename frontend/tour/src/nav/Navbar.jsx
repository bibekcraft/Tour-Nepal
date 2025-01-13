import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            TravelBuddy
          </a>

          {/* Navigation Links */}
          <div className="hidden space-x-8 md:flex">
            <a
              href="/"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="/explore"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Explore
            </a>
            <a
              href="/itinerary"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Itinerary
            </a>
            <a
              href="/blogs"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Blogs
            </a>
            <a
              href="/profile"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Profile
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden space-x-4 md:flex">
            <button
              onClick={() => (window.location.href = "/login")}
              className="px-4 py-2 text-gray-600 transition border border-gray-300 rounded-md hover:text-white hover:bg-gray-600"
            >
              Login
            </button>
            <button
              onClick={() => (window.location.href = "/signup")}
              className="px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 py-3 space-y-1">
            <a
              href="/"
              className="block font-medium text-gray-600 transition hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="/explore"
              className="block font-medium text-gray-600 transition hover:text-blue-600"
            >
              Explore
            </a>
            <a
              href="/itinerary"
              className="block font-medium text-gray-600 transition hover:text-blue-600"
            >
              Itinerary
            </a>
            <a
              href="/blogs"
              className="block font-medium text-gray-600 transition hover:text-blue-600"
            >
              Blogs
            </a>
            <a
              href="/ViewBlog"
              className="block font-medium text-gray-600 transition hover:text-blue-600"
            >
              View Blogs
            </a>
            <div className="mt-3 space-y-2">

              <button
                onClick={() => (window.location.href = "/login")}
                className="w-full px-4 py-2 text-gray-600 transition border border-gray-300 rounded-md hover:text-white hover:bg-gray-600"
              >
                Login
              </button>
              <button
                onClick={() => (window.location.href = "/register")}
                className="w-full px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
