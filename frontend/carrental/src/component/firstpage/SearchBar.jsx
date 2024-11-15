import { useState } from 'react';

function SearchBar() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  // Sample static data for destinations, activities, and durations
  const items = [
    { id: 1, name: 'Annapurna Circuit', activity: 'Trekking', traveltimeinday: '5 days' },
    { id: 2, name: 'Everest Base Camp', activity: 'Hiking', traveltimeinday: '10 days' },
    { id: 3, name: 'Langtang Valley', activity: 'Sightseeing', traveltimeinday: '7 days' },
  ];

  // Unique destinations, activities, and durations
  const destinations = [...new Set(items.map((item) => item.name))];
  const activities = [...new Set(items.map((item) => item.activity))];
  const durations = [...new Set(items.map((item) => item.traveltimeinday))];

  return (
    <div className="flex items-center max-w-5xl p-8 mx-auto mt-20 space-x-8 bg-white rounded-lg shadow-lg">
      {/* Destination Dropdown */}
      <div className="flex flex-col w-1/3">
        <label className="text-base font-bold text-gray-700 uppercase">Destination</label>
        <select
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All</option>
          {destinations.map((destination, index) => (
            <option key={index} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>

      {/* Activity Dropdown */}
      <div className="flex flex-col w-1/3">
        <label className="text-base font-bold text-gray-700 uppercase">Activity</label>
        <select
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
          className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select an Option</option>
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>

      {/* Duration Dropdown */}
      <div className="flex flex-col w-1/3">
        <label className="text-base font-bold text-gray-700 uppercase">Duration</label>
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Duration</option>
          {durations.map((duration, index) => (
            <option key={index} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button className="flex items-center justify-center p-4 text-white bg-green-700 rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-red-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a8 8 0 0 1 5.326 13.894l4.833 4.833a1 1 0 0 1-1.415 1.415l-4.833-4.833A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 4.472 10.058A6 6 0 0 0 10 4z"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
