import React from "react";

const Dropdown = () => {
  return (
    <div className="w-32 h-14 bg-white rounded-lg shadow flex justify-evenly items-center">
      <div className="w-9 h-9">
        <img
          className="w-full h-full"
          src="/icons/twemoji_flag-india.svg"
          alt="indian-flag"
        />
      </div>
      <div>
        <p>+91</p>
      </div>
      <div>
        <img
          className="cursor-pointer"
          onClick={() => {}}
          src="/icons/downArrow.svg"
          alt="down-arrow"
        />
      </div>
    </div>
  );
};

export default Dropdown;
