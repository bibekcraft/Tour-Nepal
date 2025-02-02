function Itinerary() {
  return (
    <div>      <section className="px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Itinerary</h2>
      <div className="mt-4">
        {[...Array(7).keys()].map((day) => (
          <div key={day} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Day {day + 1}</h3>
            <p className="text-gray-700">Activity for Day {day + 1}.</p>
          </div>
        ))}
      </div>
    </div>
  </section></div>
  )
}

export default Itinerary