
function ViewBlog() {
  return (
    <div>
      {" "}
      <section className="py-24 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 font-manrope">
            Our latest blog
          </h2>
          <div className="flex flex-wrap justify-center gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="w-full border border-gray-300 group max-lg:max-w-xl lg:w-1/3 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="object-cover w-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50">
                <span className="block mb-3 font-medium text-indigo-600">
                  Jan 01, 2023
                </span>
                <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                  Clever ways to invest in product to organize your portfolio
                </h4>
                <p className="mb-10 leading-6 text-gray-500">
                  Discover smart investment strategies to streamline and
                  organize your portfolio..
                </p>
                <a
                  href="javascript:;"
                  className="text-lg font-semibold text-indigo-600 cursor-pointer"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="w-full border border-gray-300 group max-lg:max-w-xl lg:w-1/3 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="object-cover w-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50">
                <span className="block mb-3 font-medium text-indigo-600">
                  Feb 01, 2023
                </span>
                <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                  How to grow your profit through systematic investment with us
                </h4>
                <p className="mb-10 leading-6 text-gray-500">
                  Unlock the power of systematic investment with us and watch
                  your profits soar. Our..
                </p>
                <a
                  href="javascript:;"
                  className="text-lg font-semibold text-indigo-600 cursor-pointer"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="w-full border border-gray-300 group max-lg:max-w-xl lg:w-1/3 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244356.png"
                  alt="blogs tailwind section"
                  className="object-cover w-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50">
                <span className="block mb-3 font-medium text-indigo-600">
                  Mar 01, 20233
                </span>
                <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                  How to analyze every holdings of your portfolio
                </h4>
                <p className="mb-10 leading-6 text-gray-500">
                  Our comprehensive guide will equip you with the tools and
                  insights needed to..
                </p>
                <a
                  href="javascript:;"
                  className="text-lg font-semibold text-indigo-600 cursor-pointer"
                >
                  Read more..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewBlog;
