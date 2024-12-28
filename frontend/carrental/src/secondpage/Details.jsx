import dart from "../../src/assets/dart.png";
import schedule from "../../src/assets/schedule.png";
import google from "../../src/assets/google-maps.png";
import { FaHiking, FaFirstAid, FaMapMarkedAlt, FaUmbrellaBeach, FaPassport, FaCamera, FaWater, FaHatCowboy, FaPizzaSlice, FaThermometerThreeQuarters } from 'react-icons/fa';
import { GiClothes, GiBackpack } from 'react-icons/gi';
function Details() {
  return (
    <div className="w-full h-screen bg-white">
      <section className="bg-white">
        <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 md:h-full">
              <a
                href=""
                className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                  Pokhara
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="relative flex flex-col px-4 pt-40 pb-4 mb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="https://i.ytimg.com/vi/kbfs_RHYx7c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLArIuMqqkxm3Je0NrzQ79FiCfPyqg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                  Rotanglapass
                </h3>
              </a>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
                >
                  <img
                    src="https://fulltimeexplorer.com/wp-content/uploads/2019/06/Most-Beautiful-places-of-Nepal-1-1.jpg"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                    Manang
                  </h3>
                </a>
                <a
                  href=""
                  className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
                >
                  <img
                    src="https://mustangnepal.com/wp-content/uploads/2022/01/things-todo.jpg"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                    Mustang
                  </h3>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 md:h-full">
              <a
                href=""
                className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="https://nationalparks-15bc7.kxcdn.com/images/parks/sagarmatha/Sagarmatha%20National%20Park.jpg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                  Sagarmatha
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between w-4/5 p-4 mx-auto space-x-4 bg-white rounded-md ">
        {/* Difficulty */}
        <div className="flex items-center">
          <img
            src={dart}
            alt="Difficulty Logo"
            className="object-cover w-12 h-12"
          />
          <span className="ml-3 font-medium text-gray-700">hard</span>
        </div>

        {/* Duration */}
        <div className="flex items-center">
          <img
            src={schedule}
            alt="Schedule Icon"
            className="object-cover w-12 h-12"
          />
          <span className="ml-3 text-gray-700">2 days & 1 night</span>
        </div>

        {/* Place */}
        <div className="flex items-center">
          <img
            src={google}
            alt="Google Maps Icon"
            className="object-cover w-12 h-12"
          />
          <span className="ml-3 font-semibold text-gray-700">Kathmandu</span>
        </div>
      </div>

      {/*TOur overview*/}
      <div className="w-4/5 mx-auto mt-4 text-4xl font-semibold">
        Tour Overview
        <div className="mt-5 text-lg font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quis,
          pariatur explicabo reprehenderit suscipit maiores obcaecati
          accusantium cupiditate numquam vero porro voluptatum consectetur ipsum
          asperiores odit quos corporis? Rem, doloremque.
        </div>
        <div className="text-2xl font-semibold mt-7 mb-7">Tour Highlights</div>
        <div className="text-lg font-normal">
          <p> . Experiance a new Car</p>
          <p> . Experiance of new Place</p>
          <p> . Experiance a new Animal</p>
          <p> . Experiance a new Scenaric View</p>
        </div>
        <div className="w-full h-1 mt-5 mb-5 bg-gray-500"></div>


    <div className='mt-4 text-4xl font-semibold'>
      What You Should Take
      <div className='mt-4 text-lg font-normal'>

        <div className='flex items-center mb-4'>
          <GiBackpack className='w-8 h-8 mr-2 text-blue-500' />
          A durable and comfortable backpack
        </div>

        <div className='flex items-center mb-4'>
          <FaHiking className='w-8 h-8 mr-2 text-green-500' />
          Trekking boots or comfortable walking shoes
        </div>

        <div className='flex items-center mb-4'>
          <FaFirstAid className='w-8 h-8 mr-2 text-red-500' />
          A basic first-aid kit with essentials
        </div>

        <div className='flex items-center mb-4'>
          <FaWater className='w-8 h-8 mr-2 text-blue-400' />
          Reusable water bottle and water purification tablets
        </div>

        <div className='flex items-center mb-4'>
          <GiClothes className='w-8 h-8 mr-2 text-purple-500' />
          A warm jacket and layers for varying weather conditions
        </div>

        <div className='flex items-center mb-4'>
          <FaUmbrellaBeach className='w-8 h-8 mr-2 text-yellow-500' />
          Sunscreen, sunglasses, and a wide-brimmed hat
        </div>

        <div className='flex items-center mb-4'>
          <FaMapMarkedAlt className='w-8 h-8 mr-2 text-orange-500' />
          Maps, guidebooks, or offline navigation apps
        </div>

        <div className='flex items-center mb-4'>
          <FaPassport className='w-8 h-8 mr-2 text-gray-500' />
          Passport, permits, and photocopies of important documents
        </div>

        <div className='flex items-center mb-4'>
          <FaCamera className='w-8 h-8 mr-2 text-indigo-500' />
          A camera or phone for capturing memories
        </div>

        <div className='flex items-center mb-4'>
          <FaPizzaSlice className='w-8 h-8 mr-2 text-red-400' />
          Lightweight snacks for energy during the journey
        </div>

      </div>
      </div>
      <div className="mt-4 text-4xl font-semibold">
  Itinerary
  <div className="mt-8 text-2xl">

    {/* Timeline Container */}
    <div className="relative pl-12 border-l-4 border-orange-500">

      {/* Day 1 */}
      <div className="relative flex items-start mb-14">
        <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
          1
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 1:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Airport Pick Up</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Arrival at the airport and a warm welcome. Our team will transfer you directly to the hotel.
          </p>
        </div>
      </div>

      {/* Day 2 */}
      <div className="relative flex items-start mb-14">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
      2
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 2:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Temples & River Cruise</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Explore iconic temples and enjoy a relaxing river cruise through scenic views.
          </p>
        </div>
      </div>

      {/* Day 3 */}
      <div className="relative flex items-start mb-14">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
      3
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 3:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Massage & Overnight Train</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Relax with a traditional massage followed by an overnight train journey to the next destination.
          </p>
        </div>
      </div>

      {/* Day 4 */}
      <div className="relative flex items-start mb-14">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
      4
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 4:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Khao Sok National Park</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Visit Khao Sok's stunning landscapes and immerse yourself in its natural beauty.
          </p>
        </div>
      </div>

      {/* Day 5 */}
      <div className="relative flex items-start mb-14">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
      5
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 5:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Travel to Koh Phangan</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Set off for the paradise island of Koh Phangan and relax by its pristine beaches.
          </p>
        </div>
      </div>

      {/* Day 6 */}
      <div className="relative flex items-start mb-14">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
      6
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 6:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Morning Chill & Muay Thai Lesson</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Enjoy a relaxed morning followed by an exciting Muay Thai training session.
          </p>
        </div>
      </div>

      {/* Day 7 */}
      <div className="relative flex items-start">
      <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-md bg-orange -left-7">
          7
        </div>
        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-semibold text-orange-500">Day 7:</h3>
            <h3 className="text-3xl font-medium text-gray-900">Island Boat Trip</h3>
          </div>
          <p className="mt-2 text-lg text-gray-700">
            Experience an unforgettable boat trip exploring nearby islands and snorkeling.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>






      </div>
    </div>
  );
}

export default Details;
