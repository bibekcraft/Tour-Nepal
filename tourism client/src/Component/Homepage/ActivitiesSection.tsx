function ActivitiesSection() {
  const activities = [
    {
      name: "Sailing",
      image: "path/to/sailing.jpg",
    },
    {
      name: "Climbing",
      image: "path/to/climbing.jpg",
    },
    {
      name: "Skiing",
      image: "path/to/skiing.jpg",
    },
    {
      name: "Hiking",
      image: "path/to/hiking.jpg",
    },
  ];

  return (
    <section className="px-6 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Activities</h2>
        <a
          href="#"
          className="text-blue-500 font-medium hover:underline flex items-center"
        >
          View All
          <span className="ml-1">&rarr;</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={activity.image}
              alt={activity.name}
              className="object-cover w-full h-64"
            />
            <p className="mt-3 mb-4 text-lg font-semibold text-gray-800">
              {activity.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;
