import np from '../../assets/np.png';
import arrow from '../../assets/arrow.png';

function Footer() {
  return (
    <>
      <div className="relative w-full h-64">
        <img
          src={np}
          alt="Nepal"
          className="object-cover w-full h-full opacity-70"
        />
        <footer className="py-10 bg-gradient-to-t bg-lightGray">
          <div className="container px-6 mx-auto md:px-12">
            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
              {/* Contacts Section */}
              <div>
                <h2 className="mb-4 font-serif text-2xl text-yellow-400">Contacts</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="transition duration-200 hover:text-yellow-300">Kathmandu, Nepal</li>
                  <li className="transition duration-200 hover:text-yellow-300">Calltobibek@gmail.com</li>
                  <li className="transition duration-200 hover:text-yellow-300">+977 9860056658</li>
                </ul>
              </div>

              {/* Explore Section */}
              <div>
                <h2 className="mb-4 font-serif text-2xl text-yellow-400">Explore</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="transition duration-200 hover:text-yellow-300">Category</li>
                  <li className="transition duration-200 hover:text-yellow-300">Feature</li>
                  <li className="transition duration-200 hover:text-yellow-300">Search</li>
                </ul>
              </div>

              {/* Company Section */}
              <div>
                <h2 className="mb-4 font-serif text-2xl text-yellow-400">Company</h2>
                <p className="text-gray-300 transition duration-200 hover:text-yellow-300">
                  The company is registered under Bibek Pandye.
                </p>
              </div>

              {/* Help Center Section */}
              <div>
                <h2 className="mb-4 font-serif text-2xl text-yellow-400">Help Center</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="transition duration-200 hover:text-yellow-300">Contact</li>
                  <li className="transition duration-200 hover:text-yellow-300">Terms & Conditions</li>
                  <li className="hover:text-yellow-300 transition duration=200">Feedback</li>
                  <li className="hover:text-yellow-300 transition duration=200">Join Our Team</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center mt-10 md:flex-row md:justify-between">
              {/* Left Section */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Bibek Pandye. All rights reserved.
                </p>
              </div>

              {/* Right Section with Arrows */}
              <div className="flex mt-4 space-x-4 md:mt-0">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={arrow}
                      alt={`Arrow ${index + 1}`}
                      className="w-10 h-10 transition duration=200 ease-in-out transform hover:scale-[1.3] hover:rotate-[15deg]"
                    />
                  ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
