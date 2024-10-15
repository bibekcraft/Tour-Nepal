import { Link } from 'react-router-dom'; // Import Link for routing
import mapOfNepal from '../../assets/mapimg.png'; // Update this path to the actual location of your image

const MapOfNepal = () => {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gray-50">
      {/* Left side - Province Cards */}
      <div className="relative z-10 flex flex-col justify-center w-1/3 p-12 space-y-8">
        {/* Title for the section */}
        <h2 className="text-4xl font-bold text-gray-900">Explore Provinces</h2>

        {/* Province 1 */}
        <Link to="/province1" className="group">
          <div className="relative overflow-hidden transition-transform transform bg-white rounded-lg shadow-xl hover:shadow-2xl group-hover:scale-105">
            <img src="province1.jpg" alt="Province 1" className="object-cover w-full h-48 transition-transform duration-500 transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-lg font-semibold text-white bg-gray-900 bg-opacity-75">
              Province 1
            </div>
          </div>
        </Link>

        {/* Madesh Pradesh */}
        <Link to="/province2" className="group">
          <div className="relative overflow-hidden transition-transform transform bg-white rounded-lg shadow-xl hover:shadow-2xl group-hover:scale-105">
            <img src="province2.jpg" alt="Madesh Pradesh" className="object-cover w-full h-48 transition-transform duration-500 transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-lg font-semibold text-white bg-gray-900 bg-opacity-75">
              Madesh Pradesh
            </div>
          </div>
        </Link>

        {/* Bagmati Pradesh */}
        <Link to="/province3" className="group">
          <div className="relative overflow-hidden transition-transform transform bg-white rounded-lg shadow-xl hover:shadow-2xl group-hover:scale-105">
            <img src="province3.jpg" alt="Bagmati Pradesh" className="object-cover w-full h-48 transition-transform duration-500 transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-lg font-semibold text-white bg-gray-900 bg-opacity-75">
              Bagmati Pradesh
            </div>
          </div>
        </Link>

        {/* Add more provinces similarly if needed */}
      </div>

      {/* Right side - Map of Nepal */}
      <div className="relative w-2/3 h-full">
        {/* Nepal Map Image */}
        <img 
          src={mapOfNepal} 
          alt="Map of Nepal" 
          className="absolute inset-0 object-cover w-full h-full opacity-90"
        />

        {/* Map Highlights or Icons (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Example marker (you can add more or customize) */}
          <div className="absolute w-5 h-5 bg-red-500 rounded-full top-1/3 left-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
