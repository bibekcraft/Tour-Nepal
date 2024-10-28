
export default function Practise() {
  // Define the photo URL here
  const photoUrl1 = 'https://example.com/photo.jpg'; // Replace this with the actual URL of your image
    const photoUrl2 = 'https://example.com/photo.jpg'; // Replace this with the actual URL of your image
    const photoUrl3 = 'https://example.com/photo.jpg'; // Replace this with the actual URL of your image
    const photoUrl4 = 'https://example.com/photo.jpg'; // Replace this with the actual URL of your image


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <div className="w-auto mt-40 mb-12 ml-20 mr-20 bg-black shadow-xl h-80">
        {/* Content can go here */}
      </div>
      
      <div className="flex justify-center mt-12 font-bold text-green-800">
        Pic: <p className="ml-2 text-gray-600">Supadeurali</p>
      </div>

      {/* Below Section */}
      <div className="relative flex items-center justify-center my-16 mx-50">
        {/* Dashed line with arrow */}
        <div className="absolute flex items-center justify-between w-full h-full mx-4">
          <div className="w-full h-px border-t-4 border-gray-400 border-dashed"></div>
          <svg
            className="absolute w-8 h-8 text-gray-600 transform rotate-45 -right-4"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </div>
      </div>

      {/* Rectangle with Photo */}
      <div className="flex items-center justify-center mb-20 space-x-4">
  <div className="w-64 h-48 overflow-hidden transition-transform transform border-4 border-green-800 rounded-lg shadow-md duration-800 -rotate-6 hover:rotate-0 animate-pulse">
    <img
      src={photoUrl1} // Use the photoUrl variable here
      alt="Tilted Rectangle Photo 1"
      className="object-cover w-full h-full border-4 border-gray-400"
    />
  </div>
  <div className="w-64 h-48 overflow-hidden transition-transform duration-500 transform border-4 border-green-800 rounded-lg shadow-md -rotate-6 hover:rotate-0 animate-pulse">
    <img
      src={photoUrl2} // Use the photoUrl variable here
      alt="Tilted Rectangle Photo 2"
      className="object-cover w-full h-full border-4 border-green-800"
    />
  </div>
  <div className="w-64 h-48 overflow-hidden transition-transform duration-500 transform border-4 border-green-800 rounded-lg shadow-md -rotate-6 hover:rotate-0 animate-pulse">
    <img
      src={photoUrl3} // Use the photoUrl variable here
      alt="Tilted Rectangle Photo 3"
      className="object-cover w-full h-full border-4 border-green-800"
    />
  </div>
  <div className="w-64 h-48 overflow-hidden transition-transform duration-500 transform border-4 border-green-800 rounded-lg shadow-md -rotate-6 hover:rotate-0 animate-pulse">
    <img
      src={photoUrl4} // Use the photoUrl variable here
      alt="Tilted Rectangle Photo 4"
      className="object-cover w-full h-full border-4 border-green-800"
    />
  </div>
</div>



    </div>
  );
}
