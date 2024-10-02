// eslint-disable-next-line no-unused-vars
import React from 'react';
import travel from '../../assets/travel.png';
import '../../App.css';
function Nepal() {
  return (
    <div className="relative w-screen h-auto">
              <div className="text-3xl text-green-600 hangover-font">
          Visit Nepal With Us
        </div>
      <div className="absolute w-full h-[500px] bg-black opacity-20">
        <img
          src={travel}
          alt="background pattern"
          className="object-cover w-full h-full"
        />

      </div>
    </div>
  );
}

export default Nepal;
