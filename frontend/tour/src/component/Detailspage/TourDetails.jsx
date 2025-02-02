import dartImage from "../../assets/dart.png";
import scheduleImage from "../../assets/schedule.png";
import googleMapsImage from "../../assets/google-maps.png";

function TourDetails() {
  return (
    <div>      <section className="px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Tour Details</h2>
      <div className="flex mt-4 space-x-6">
        <div className="flex items-center space-x-2">
          <img src={dartImage} alt="Difficulty" className="w-8 h-8" />
          <span className="text-gray-700">Difficulty: Moderate</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={scheduleImage} alt="Duration" className="w-8 h-8" />
          <span className="text-gray-700">Duration: 7 Days</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={googleMapsImage} alt="Location" className="w-8 h-8" />
          <span className="text-gray-700">Location: Annapurna Circuit</span>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default TourDetails