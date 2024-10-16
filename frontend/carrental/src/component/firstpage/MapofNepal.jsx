import { Link } from 'react-router-dom';
import province1Image from '../../assets/mustang.jpg'; 
import province2Image from '../../assets/np.png';
import province3Image from '../../assets/pokhara.jpg';
import hm from '../../assets/futurebg.png';

const MapOfNepal = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-center"
        style={{
          backgroundImage: `url(${hm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-8 text-center">
          <h2 className="text-5xl font-bold text-gray-700 md:text-8xl font-petemoss">Explore Nepal</h2>
        </div>

        {/* Grid of Circles - Up to 5 per row */}
        <div className="relative z-10 w-full px-8 mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* Places Circle */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province1Image}
                  alt="Places"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Places</p>
            </div>

            {/* Cities Circle */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province2Image}
                  alt="Cities"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Cities</p>
            </div>

            {/* Trekking & Wildlife Circle */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province3Image}
                  alt="Trekking & Wildlife"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Trekking & Wildlife</p>
            </div>

            {/* Lakes Circle */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province1Image}
                  alt="Lakes"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Lakes</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province1Image}
                  alt="Lakes"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Lakes</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province1Image}
                  alt="Lakes"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Lakes</p>
            </div>

            {/* Mountain Ranges Circle */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                <img
                  src={province3Image}
                  alt="Mountain Ranges"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-lg font-bold text-gray-700 md:text-xl">Mountain Ranges</p>
            </div>

            {/* Add more circles as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
