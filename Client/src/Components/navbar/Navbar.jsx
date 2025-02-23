import React from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Replace with actual logo path
              alt="Ghumne Sathi Logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-green-700">Ghumne Sathi</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-xl font-medium"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-xl font-medium"
            >
              Dashboard
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-xl font-medium"
            >
              About
            </a>
            <a
              href="/#fontblog"
              className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-xl font-medium"
            >
              Blog
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50"
            >
              Dashboard
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="/#fontblog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
