function Header() {
    return (
      <div>
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="imgs/Logo/logo.svg"
              alt="2rism"
              className="object-contain w-12 h-12"
            />
          </div>
  
          {/* Navigation Bar */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#hotels"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="#restaurants"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
  
          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <h2 className="text-sm text-gray-700">
                <span className="font-light">Hello,</span>{" "}
                <span className="font-semibold">Riad Khan</span>
              </h2>
            </div>
            <div>
              <img
                src="/Imgs/ProfilePic/user-image.jpg"
                alt="User Profile Picture"
                className="object-cover w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  