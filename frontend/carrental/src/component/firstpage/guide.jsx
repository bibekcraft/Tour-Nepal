const Guide = () => {
    return (
      <section className="flex-col flexCenter bg-gray-50">
        <div className="w-full pb-24 padding-container max-container">
          <img src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="mb-3 -mt-1 text-green-600 uppercase regular-18">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-gray-800">
              Guide You to Easy Path
            </h2>
            <p className="regular-16 text-gray-600 xl:max-w-[520px]">
              Only with the hilink application will you no longer get lost and get
              lost again, because we already support offline maps when there is
              no internet connection in the field. Invite your friends, relatives,
              and friends to have fun in the wilderness through the valley and
              reach the top of the mountain.
            </p>
          </div>
        </div>
  
        <div className="relative w-full flexCenter max-container">
          {/* Image Placeholder */}
          <div className="bg-gray-200 w-full h-[580px] rounded-xl flex items-center justify-center">
            <img 
              src="/boat.png" // Change this to the path of your image
              alt="boat"
              className="object-cover w-full h-full opacity-50 rounded-xl" // Adjust opacity or other styles if necessary
            />
            {/* Overlay for Text */}
            <div className="absolute bg-white p-5 rounded-3xl border border-gray-200 shadow-md md:left-[5%] lg:top-20">
              <img 
                src="/meter.svg"
                alt="meter"
                width={16}
                height={158}
                className="w-auto h-full"
              />
              <div className="flex-col flexBetween">
                <div className='flex flex-col w-full'>
                  <div className="w-full flexBetween">
                    <p className="text-gray-500 regular-16">Destination</p>
                    <p className="text-green-600 bold-16">48 min</p>
                  </div>
                  <p className="mt-2 text-gray-800 bold-20">Aguas Calientes</p>
                </div>
  
                <div className='flex flex-col w-full'>
                  <p className="text-gray-500 regular-16">Start track</p>
                  <h4 className="mt-2 text-gray-800 bold-20 whitespace-nowrap">Wonorejo Pasuruan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Guide;
  