import React from "react";

const Cards = () => {
  return (
    <div className="flex justify-around items-center mt-24 w-screen mx-28 box-border">
      <div className="bg-indigo-950 rounded-3xl shadow border backdrop-blur-2xl text-center">
        <div className="w-20 h-20 bg-white rounded-full border border-gray-400 flex justify-center items-center mx-auto mt-9 box-border">
          <img className="w-10 h-10" src="/icons/icon1.png" alt="icon" />
        </div>
        <h6 className="text-white text-3xl font-bold tracking-wide whitespace-nowrap mt-4 font-inter box-border">
          Free IELTS Modules
        </h6>
        <p className="whitespace-nowrap text-white text-opacity-60 text-lg font-normal leading-relaxed mt-3 mb-9 px-9 font-inter">
          20,000+ Listed Properties across 5 countries.
        </p>
      </div>
      <div className="bg-indigo-950 rounded-3xl shadow border backdrop-blur-2xl text-center">
        <div className="w-20 h-20 bg-white rounded-full border border-gray-400 flex justify-center items-center mx-auto mt-9">
          <img className="w-10 h-10" src="/icons/icon2.png" alt="icon" />
        </div>
        <h6 className="text-white text-3xl font-bold tracking-wide whitespace-nowrap mt-4 font-inter box-border">
          Offline Classes
        </h6>
        <p className="whitespace-nowrap text-white text-opacity-60 text-lg font-normal leading-relaxed mt-3 mb-9 px-9 font-inter">
          20,000+ Listed Properties across 5 countries.
        </p>
      </div>
      <div className="bg-indigo-950 rounded-3xl shadow border backdrop-blur-2xl text-center">
        <div className="w-20 h-20 bg-white rounded-full border border-gray-400 flex justify-center items-center mx-auto mt-9">
          <img className="w-10 h-10" src="/icons/icon3.png" alt="icon" />
        </div>
        <h6 className="text-white text-3xl font-bold tracking-wide whitespace-nowrap mt-4 font-inter box-border">
          Live / Online Classes
        </h6>
        <p className="whitespace-nowrap text-white text-opacity-60 text-lg font-normal leading-relaxed mt-3 mb-9 px-9 font-inter">
          20,000+ Listed Properties across 5 countries.
        </p>
      </div>
    </div>
  );
};

export default Cards;
