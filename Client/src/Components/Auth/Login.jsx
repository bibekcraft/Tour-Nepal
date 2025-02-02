import home from '../../assets/loginbg.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-sky-300"
      style={{
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative flex w-4/6 overflow-hidden bg-white rounded-lg shadow-lg h-11/12">
        <div
          className="relative flex flex-col items-center justify-center flex-1 p-8 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/nature-high-quality-4k-hdr_889056-32969.jpg')",
          }}
        >
          {/*  blue Overlay in screen */}

          <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>

          <h1 className="relative text-3xl font-bold text-center text-white">
            TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER
          </h1>
          <div className="relative flex mt-8 space-x-4">
            <a href="#" className="text-2xl text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 bg-white w-96">
          <h2 className="mb-6 text-2xl font-bold text-gray-400">TRAVEL BLOGGER</h2>
          <form className="flex flex-col">
            <div className="mb-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white rounded focus:outline-customblue focus:ring-customblue"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-white rounded focus:outline-customblue focus:ring-2 focus:ring-customblue"
              />
            </div>
            <Link to="/Register">
            <a href="#" className="self-end mb-4 text-sm text-customblue">
              Register Here               
            </a>
            </Link>

            <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-customblue">
              ENTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
