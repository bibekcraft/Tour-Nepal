import React from 'react';
import { Menu, X, User, Bell, LogOut } from 'lucide-react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const isLoggedIn = true; // Add your login state logic here

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl lg:text-xl font-bold text-green-700">
                TravelNepal
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-xl text-gray-600 hover:text-green-700 px-3 py-2 rounded-md font-medium">
              Home
            </a>
            <a href="/destinations" className="text-xl text-gray-600 hover:text-green-700 px-3 py-2 rounded-md font-medium">
              Destinations
            </a>
            
            {/* Show Write Blog and View Dashboard for logged-in users */}
            {isLoggedIn && (
              <>
                <a href="/write-blog" className="text-xl text-gray-600 hover:text-green-700 px-3 py-2 rounded-md font-medium">
                  Write Blog
                </a>
                <a href="/dashboard" className="text-xl text-gray-600 hover:text-green-700 px-3 py-2 rounded-md font-medium">
                  View Dashboard
                </a>
              </>
            )}

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-green-700 focus:outline-none">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-xl text-gray-600 hover:text-green-700 focus:outline-none"
                >
                  <User className="h-6 w-6" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {/* Only show LogOut option for logged-in users */}
                      {isLoggedIn && (
                        <button className="flex items-center w-full px-4 py-2 text-xl text-red-700 hover:bg-gray-100">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
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
            <a href="/" className="block text-xl px-3 py-2 rounded-md font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50">
              Home
            </a>
            <a href="/destinations" className="block text-xl px-3 py-2 rounded-md font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50">
              Destinations
            </a>

            {/* Show Write Blog and View Dashboard for logged-in users */}
            {isLoggedIn && (
              <>
                <a href="/write-blog" className="block text-xl px-3 py-2 rounded-md font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50">
                  Write Blog
                </a>
                <a href="/dashboard" className="block text-xl px-3 py-2 rounded-md font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50">
                  View Dashboard
                </a>
              </>
            )}
            
            <div className="px-3 py-2 space-y-2">
              {/* Only show LogOut for logged-in users */}
              {isLoggedIn && (
                <button className="flex items-center w-full px-3 py-2 rounded-md text-xl font-medium text-red-700 hover:bg-gray-50">
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
