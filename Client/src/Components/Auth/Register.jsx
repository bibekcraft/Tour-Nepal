import home from '../../assets/loginbg.png';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handel = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  const remove = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

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
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded focus:outline-customblue focus:ring-customblue"
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                placeholder="Enter your phone number here"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded focus:outline-customblue focus:ring-customblue"
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded focus:outline-customblue focus:ring-customblue"
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded focus:outline-customblue focus:ring-customblue"
              />
            </div>


          {/* <div className='flex'>
            <button className='flex items-center justify-center w-32 h-12 ml-6 bg-white border-2 rounded-full border-customble mb-7'>
            <img src={google} height={20} width={20}></img>
            <p className='ml-3'>
            google
            </p>
            </button>
            <button className='flex items-center justify-center w-32 h-12 ml-6 bg-white border-2 rounded-full border-customble mb-7'>
            <img src={facebook} height={20} width={20}></img>
            <p className='ml-3'>
            Facebook
            </p>
            </button>
            </div> */}
            <Link to="/login">
            <a href="#" className="self-end mb-10 text-sm text-customblue">
              Login Here               
            </a>
            </Link> 

              
            <button className="px-4 py-2 font-bold text-white bg-gray-500 border-blue-300 rounded hover:bg-customblue"
            onClick={handel}
            >
              
              ENTER
            </button>
            {localStorage.getItem('name') && (
            <div>
               Name: <p>{localStorage.getItem('name')}</p>
            </div>
         )}
                     {localStorage.getItem('phone ') && (
            <div>
               Phone number: <p>{localStorage.getItem('phone')}</p>
            </div>
         )}
            {localStorage.getItem('email') && (
            <div>
               email: <p>{localStorage.getItem('email')}</p>
            </div>
         )}
         {localStorage.getItem('password') && (
            <div>
               Password: <p>{localStorage.getItem('password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
