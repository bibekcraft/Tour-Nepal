
function TourBanner() {
  return (
    <div>      <section className="py-10">
    <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3">
      {["Pokhara", "Manang", "Mustang", "Sagarmatha"].map((place, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
        >
          <img
            src={`https://via.placeholder.com/300x200?text=${place}`}
            alt={place}
            className="object-cover w-full transition-transform duration-300 h-60 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60">
            {place}
          </div>
        </div>
      ))}
    </div>
  </section></div>
  )
}

export default TourBanner