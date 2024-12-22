import { FaCar, FaUmbrellaBeach, FaHiking, FaHotel } from 'react-icons/fa';  // Importing some example icons

function Why() {
  return (
    <div className="my-8 text-center ">
      <p className="mb-6 text-2xl font-bold text--800">
        Why Choose Us!
      </p>
      
      {/* Image/Icons and Descriptions Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        
        {/* First Icon and Description */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <FaCar className="text-4xl text-orange-500" />
          <p className="text-lg font-medium text-gray-700">Comfortable Travel</p>
        </div>

        {/* Second Icon and Description */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <FaUmbrellaBeach className="text-4xl text-orange-500" />
          <p className="text-lg font-medium text-gray-700">Beautiful Locations</p>
        </div>

        {/* Third Icon and Description */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <FaHiking className="text-4xl text-orange-500" />
          <p className="text-lg font-medium text-gray-700">Adventure Treks</p>
        </div>

        {/* Fourth Icon and Description */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <FaHotel className="text-4xl text-orange-500" />
          <p className="text-lg font-medium text-gray-700">Comfortable Hotels</p>
        </div>
      </div>
    </div>
  );
}

export default Why;
