import dart from '../../src/assets/dart.png'
import schedule from '../../src/assets/schedule.png'
import google from '../../src/assets/google-maps.png'
function Details() {
    return (
      <div className="w-full h-screen bg-white">
        <section className="bg-white">
      <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
              <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 md:h-full">
                  <a href="" className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group">
                      <img src="https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg" alt="" className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">Pokhara</h3>
                  </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                  <a href="" className="relative flex flex-col px-4 pt-40 pb-4 mb-4 overflow-hidden rounded-lg group">
                      <img src="https://i.ytimg.com/vi/kbfs_RHYx7c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLArIuMqqkxm3Je0NrzQ79FiCfPyqg" alt="" className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">Rotanglapass</h3>
                  </a>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                      <a href="" className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group">
                          <img src="https://fulltimeexplorer.com/wp-content/uploads/2019/06/Most-Beautiful-places-of-Nepal-1-1.jpg" alt="" className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                          <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">Manang</h3>
                      </a>
                      <a href="" className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group">
                          <img src="https://mustangnepal.com/wp-content/uploads/2022/01/things-todo.jpg" alt="" className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                          <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">Mustang</h3>
                      </a>
                  </div>
              </div>
              <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 md:h-full">
                  <a href="" className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group">
                      <img src="https://nationalparks-15bc7.kxcdn.com/images/parks/sagarmatha/Sagarmatha%20National%20Park.jpg" alt="" className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">Sagarmatha</h3>
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

      </div>
      
    )
  }
  
  export default Details