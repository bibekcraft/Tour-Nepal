// eslint-disable-next-line no-unused-vars
import React from 'react';
import npl from '../../assets/npl.png';
// import '../../App.css';
function Nepal() {
  return (
    <div className="relative w-screen h-auto">
              <div className="text-3xl text-green-600 hangover-font">
        </div>
      <div className="absolute w-full h-[650px] bg-black opacity-25">
        <img
          src={npl}

          alt="background pattern"
          className="object-cover w-full h-full"
        />

      </div>
    </div>
  );
}

export default Nepal;
