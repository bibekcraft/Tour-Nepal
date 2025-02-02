
const Map = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
      {/* Background Section */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

      {/* Image */}
      <div className="relative z-10 w-[80%] md:w-[50%] shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400" // Replace with your image URL
          alt="Tourism Place"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Text Overlay (Optional) */}
      <div className="absolute text-center text-white top-10">
        <h2 className="text-3xl font-bold">Beautiful Destination</h2>
        <p className="text-lg">Explore the wonders of nature</p>
      </div>
    </div>
  );
};

export default Map;
