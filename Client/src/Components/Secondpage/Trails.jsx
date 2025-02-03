import { Link } from "react-router-dom";
import Footer from "../navbar/Footer";
// import Navbar from "../navbar/Footer"
function PhuketTours() {
  return (    
    <>
      <div className="w-full h-full bg-white ">
        <div className="flex w-4/5 h-20 p-6 mx-auto mt-5 bg-white rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h1>Home / Category / Nepal</h1>
            <h1>Tour Nepal</h1>
          </div>
        </div>
        <div className="flex w-4/5 h-screen mx-auto mt-5 bg-white rounded-lg">
          {/* SIDEBAR CONTENT */}
          <div className="w-1/5 mr-3 bg-white border-2 border-gray-100 rounded-lg h-4/6">
            <div>
              <p className="flex items-center justify-center w-full h-32 mx-auto text-white rounded-t-lg bg-orange">
                When to when travel
              </p>
              <div className="mx-auto mb-5 text-xl text-orange">
                Tour Activities
                </div>
              <div className="flex flex-col ml-3 text-gray-600">
                <label>
                  <input type="checkbox" /> Temple
                </label>
                <label>
                  <input type="checkbox" /> Adventure
                </label>
                <label>
                  <input type="checkbox" /> National Park
                </label>
                <label>
                  <input type="checkbox" /> Geographical Regions
                </label>
              </div>
              <div className="mx-auto mt-5 mb-5 text-xl align-middle text-orange">
                Estimated date
                </div>
                <div className="ml-3 text-gray-600">
                <p>1 day</p>
                <p>2-4 day</p>
                <p>4-6 day</p>
                <p>6-10 day</p>
                </div>
            </div>
            <div className="ml-2"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="w-4/5 h-screen p-4 overflow-y-scroll bg-white rounded-lg">
            <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md mb-9">
              <div className="flex">
                <div className="relative flex-shrink-0 w-1/3">
                  <img
                    className="object-cover w-56 h-full rounded-lg"
                    src="https://images.squarespace-cdn.com/content/v1/609d3f1781f4a87463f238cb/1692302796055-97BM3S7YLYKRR1DEI2DS/image-asset.jpeg"
                    alt="Phi Phi Islands"
                  />
                  <span className="absolute p-3 text-xs font-semibold text-white bg-orange-500 bg-green-700 rounded top-2 left-2">
                    Difficulty
                  </span>
                </div>
                <div className="flex w-2/3">
                  <div className="flex flex-col justify-between p-6 w-3/3">
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Paris, France
                      </div>
                      <h1 className="mt-1 text-lg font-medium leading-tight text-black">
                        Phi Phi Islands Adventure Day Trip with Seaview Lunch by
                        V. Marine Tour
                      </h1>

                      <p className="mt-4 text-sm text-gray-500">
                        The Phi Phi archipelago is a must-visit while in Phuket,
                        and this speedboat trip.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4"></div>
                  </div>
                  <div className="w-1 h-full bg-gray-100"></div>
                  <div className="flex flex-col justify-between w-1/3 p-6">
                    {/* Days and Nights Information at the Top */}
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        2 Days 1 Nights
                      </div>
                    </div>

                    <div className="flex-grow"></div>

                    <Link to='/details'>
                    <button className="w-auto h-10 mt-10 font-semibold border-2 rounded-lg text-orange border-orange">
                      Show Details
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PhuketTours;
