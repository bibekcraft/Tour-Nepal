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
            {/* Mountain Trails */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/mountain-trails">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province1Image}
                    alt="Mountain Trails"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Mountain Trails</p>
              </Link>
            </div>

            {/* Trekking Trails */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/trekking-trails">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province2Image}
                    alt="Trekking Trails"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Trekking Trails</p>
              </Link>
            </div>

            {/* Hiking Trails */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/hiking-trails">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province3Image}
                    alt="Hiking Trails"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Hiking Trails</p>
              </Link>
            </div>

            {/* Lakes */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/lakes">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province1Image}
                    alt="Lakes"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Lakes</p>
              </Link>
            </div>

            {/* Wildlife Reserve */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/wildlife-reserve">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province2Image}
                    alt="Wildlife Reserve"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Wildlife Reserve</p>
              </Link>
            </div>

            {/* Districts */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/districts">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province3Image}
                    alt="Districts"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Districts</p>
              </Link>
            </div>

            {/* Historical Sites */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/historical-sites">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province1Image}
                    alt="Historical Sites"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Historical Sites</p>
              </Link>
            </div>

            {/* Temples */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/temples">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province2Image}
                    alt="Temples"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Temples</p>
              </Link>
            </div>

            {/* Adventure Activities */}
            <div className="flex flex-col items-center space-y-2">
              <Link to="/adventure-activities">
                <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img
                    src={province3Image}
                    alt="Adventure Activities"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg font-bold text-gray-700 md:text-xl">Adventure Activities</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
