import React from "react"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDestination: "",
      selectedActivity: "",
      selectedDuration: "",
    }
  }

  // Sample static data for destinations, activities, and durations
  items = [
    { id: 1, name: "Annapurna Circuit", activity: "Trekking", traveltimeinday: "5 days" },
    { id: 2, name: "Everest Base Camp", activity: "Hiking", traveltimeinday: "10 days" },
    { id: 3, name: "Langtang Valley", activity: "Sightseeing", traveltimeinday: "7 days" },
    { id: 4, name: "Pokhara", activity: "Relaxation", traveltimeinday: "3 days" },
    { id: 5, name: "Chitwan National Park", activity: "Wildlife Safari", traveltimeinday: "4 days" },
  ]

  // Unique destinations, activities, and durations
  destinations = [...new Set(this.items.map((item) => item.name))]
  activities = [...new Set(this.items.map((item) => item.activity))]
  durations = [...new Set(this.items.map((item) => item.traveltimeinday))]

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  handleSearch = () => {
    // Implement search functionality here
    console.log("Search with:", this.state)
  }

  render() {
    const { selectedDestination, selectedActivity, selectedDuration } = this.state

    return (
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Your Perfect Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Destination Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="destination">
              Destination
            </label>
            <select
              id="destination"
              value={selectedDestination}
              onChange={(e) => this.handleChange(e, "selectedDestination")}
              className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">All Destinations</option>
              {this.destinations.map((destination, index) => (
                <option key={index} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </div>

          {/* Activity Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="activity">
              Activity
            </label>
            <select
              id="activity"
              value={selectedActivity}
              onChange={(e) => this.handleChange(e, "selectedActivity")}
              className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">All Activities</option>
              {this.activities.map((activity, index) => (
                <option key={index} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="duration">
              Duration
            </label>
            <select
              id="duration"
              value={selectedDuration}
              onChange={(e) => this.handleChange(e, "selectedDuration")}
              className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">Any Duration</option>
              {this.durations.map((duration, index) => (
                <option key={index} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={this.handleSearch}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar

