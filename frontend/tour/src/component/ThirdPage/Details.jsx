// import dart from "../../src/assets/dart.png";
// import schedule from "../../src/assets/schedule.png";
// import google from "../../src/assets/google-maps.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Footer from "../firstpage/Footer";

function Details() {
  const[open,setOpen]=useState("null");
  const toggleOpen=(index)=>{
    setOpen(open===index ? null:index);
  }
  const faqData = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows the creation of reusable UI components and offers efficient rendering using a virtual DOM.",
    },
    {
      question: "What are hooks in React?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components. They enable managing state and side effects in functional components without needing class components.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript, allowing you to write HTML-like code in your JavaScript files. It gets compiled into JavaScript that React can understand and use to create elements.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="w-full bg-white">
      {/* Tour Banner Section */}
      <section className="w-full bg-white">
        <div className="grid max-w-screen-xl gap-4 px-4 py-8 mx-auto sm:grid-cols-2 md:grid-cols-5">
          {/* Pokhara Card */}
          <div className="flex flex-col col-span-2 bg-gray-50">
            <a
              href="#"
              className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
            >
              <img
                src="https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg"
                alt="Pokhara"
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white">
                Pokhara
              </h3>
            </a>
          </div>

          {/* Rotang La Pass with Manang & Mustang */}
          <div className="flex flex-col col-span-2 gap-4">
            <a
              href="#"
              className="relative flex flex-col px-4 pt-40 pb-4 mb-4 overflow-hidden rounded-lg group"
            >
              <img
                src="https://i.ytimg.com/vi/kbfs_RHYx7c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLArIuMqqkxm3Je0NrzQ79FiCfPyqg"
                alt="Rotang La Pass"
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white">
                Rotang La Pass
              </h3>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="https://fulltimeexplorer.com/wp-content/uploads/2019/06/Most-Beautiful-places-of-Nepal-1-1.jpg"
                  alt="Manang"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white">
                  Manang
                </h3>
              </a>
              <a
                href="#"
                className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="https://mustangnepal.com/wp-content/uploads/2022/01/things-todo.jpg"
                  alt="Mustang"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white">
                  Mustang
                </h3>
              </a>
            </div>
          </div>

          {/* Sagarmatha Card */}
          <div className="flex flex-col bg-gray-50">
            <a
              href="#"
              className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
            >
              <img
                src="https://nationalparks-15bc7.kxcdn.com/images/parks/sagarmatha/Sagarmatha%20National%20Park.jpg"
                alt="Sagarmatha"
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white">
                Sagarmatha
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <div className="max-w-screen-lg px-4 py-8 mx-auto bg-white rounded-md">
        <div className="flex items-center justify-between mb-8 space-x-8">
          <div className="flex items-center">
            <img src={"dart"} alt="Difficulty" className="w-12 h-12" />
            <span className="ml-3 text-lg font-medium text-gray-700">Hard</span>
          </div>
          <div className="flex items-center">
            <img src={"schedule"} alt="Duration" className="w-12 h-12" />
            <span className="ml-3 text-lg font-medium text-gray-700">
              2 days & 1 night
            </span>
          </div>
          <div className="flex items-center">
            <img src={"google"} alt="Location" className="w-12 h-12" />
            <span className="ml-3 text-lg font-medium text-gray-700">
              Kathmandu
            </span>
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-gray-900">Tour Overview</h2>
        <p className="mt-4 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quis,
          pariatur explicabo reprehenderit suscipit maiores obcaecati
          accusantium cupiditate numquam.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-gray-900">
          Tour Highlights
        </h3>
        <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
          <li>Experience a new car</li>
          <li>Explore beautiful places</li>
          <li>Discover unique wildlife</li>
          <li>Enjoy scenic views</li>
        </ul>

        {/* What's Included Section */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">What's included</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Beverages, drinking water, morning tea, and buffet lunch</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Local taxes</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Hotel pickup and drop-off by air-conditioned minivan</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Insurance</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Soft drinks</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Tour guide</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Towel</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full"></span>
                <span className="ml-3 text-gray-700">Alcoholic beverages</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Itinerary</h2>
          <div className="border-l border-gray-300">
            {[
              {
                day: "Day 1",
                title: "Airport Pick Up",
                description:
                  "Arrival at the airport, and transfer directly to the hotel for check-in.",
              },
              {
                day: "Day 2",
                title: "Temples & River Cruise",
                description:
                  "Explore iconic temples and relax during a scenic river cruise.",
              },
              {
                day: "Day 3",
                title: "Massage & Overnight Train",
                description:
                  "Enjoy a traditional massage and board an overnight train to your next destination.",
              },
              {
                day: "Day 4",
                title: "Khao Sok National Park",
                description:
                  "Discover stunning landscapes and immerse yourself in nature.",
              },
            ].map((itinerary, idx) => (
              <div className="relative pl-6 mb-8" key={idx}>
                <div className="absolute w-6 h-6 rounded-full bg-orange -left-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{`${itinerary.day}: ${itinerary.title}`}</h3>
                  <p className="mt-5 text-gray-5 00">{itinerary.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
      {/* Map Section */}
      <div className="text-4xl font-bold mt-9 mb-9">
        Map
      </div>
      <div className="w-10/12 mx-auto bg-black h-96">
        <MapContainer 
          center={[51.505, -0.09]} 
          zoom={13} 
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A random location on the map.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>


{/* Recommendations Section */}
<section className="max-w-screen-xl px-6 py-10 mx-auto">
          <h2 className="mt-10 mb-10 text-4xl font-bold text-orange">Our Recommendations</h2>

          {/* Recommended Places Section */}
          <div className="mb-12 space-y-8">
            <h3 className="text-3xl font-semibold text-gray-900">Places to Visit</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col p-6 rounded-lg shadow-lg bg-gray-50">
                <img
                  src="https://fulltimeexplorer.com/wp-content/uploads/2019/06/Most-Beautiful-places-of-Nepal-1-1.jpg"
                  alt="Place 1"
                  className="object-cover w-full h-64 mb-4 rounded-md"
                />
                <h4 className="text-xl font-semibold text-gray-800">Manang</h4>
                <p className="mt-2 text-gray-600">
                  Known for its scenic beauty and mountainous landscapes, Manang is a must-visit place. It offers breathtaking views, unique culture, and access to incredible trekking paths.
                </p>
              </div>
              <div className="flex flex-col p-6 rounded-lg shadow-lg bg-gray-50">
                <img
                  src="https://mustangnepal.com/wp-content/uploads/2022/01/things-todo.jpg"
                  alt="Place 2"
                  className="object-cover w-full h-64 mb-4 rounded-md"
                />
                <h4 className="text-xl font-semibold text-gray-800">Mustang</h4>
                <p className="mt-2 text-gray-600">
                  Mustang is famous for its rich history, monasteries, and mystical landscapes. Explore the Tibetan influences, discover ancient caves, and admire the mesmerizing beauty of the region.
                </p>
              </div>
            </div>
          </div>

          {/* Must-Try Food Section */}
          <div className="mb-12 space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">Must-Try Foods</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-lg text-gray-600">1. Dal Bhat</span>
                <p className="text-gray-500">
                  A staple food in Nepal, Dal Bhat consists of lentil soup served with rice, vegetables, and pickles.
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-lg text-gray-600">2. Momos</span>
                <p className="text-gray-500">
                  These delicious Tibetan dumplings are filled with vegetables or meat and are a popular snack across Nepal.
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-lg text-gray-600">3. Sel Roti</span>
                <p className="text-gray-500">
                  A traditional Nepali sweet, Sel Roti is a crispy rice doughnut enjoyed during festivals and special occasions.
                </p>
              </li>
            </ul>
          </div>

          {/* Recommended Guide Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Recommended Guide</h3>
            <div className="flex items-center p-6 mt-6 rounded-lg shadow-lg bg-gray-50">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Guide"
                className="object-cover w-24 h-24 rounded-full"
              />
              <div className="ml-6">
                <h4 className="text-xl font-semibold text-gray-800">Rajesh Khadka</h4>
                <p className="mt-2 text-gray-600">
                  With over 10 years of experience in guiding tourists around the Himalayan region, Rajesh is known for his detailed knowledge and friendly approach. Whether you're a trekker or simply exploring, Rajesh will make your journey unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl p-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {open === index && (
                  <div className="p-4 text-gray-700 border-t border-gray-200 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Details;
