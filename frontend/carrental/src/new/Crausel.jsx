function Crausel() {
  return (
    <div className="flex items-center w-7/12 mx-auto rounded-lg bg-slate-900 h-72 mt-11">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-5/12 h-full p-4 text-center">
        <p className="text-xl font-semibold text-gray-700">Grab up to 35% Off</p>
        <p className="text-lg font-medium text-gray-600">On Your Favorite</p>
        <p className="text-lg font-medium text-gray-600">Destination</p>
        <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Book Now
        </button>
      </div>

      {/* Right Section */}
      <div className="w-7/12 h-full">
        <img
          src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?cs=srgb&dl=pexels-souvenirpixels-1531660.jpg&fm=jpg"
          alt="Destination"
          className="object-cover w-full h-full rounded-r-lg"
        />
      </div>
    </div>
  );
}

export default Crausel;
