import React from "react";
import Dropdown from "../dropdown/Dropdown";

const RegistrationForm = () => {
  return (
    <div className="w-[635px] bg-white rounded-[53px] shadow mt-5 pt-10 box-border">
      <div className="flex justify-evenly items-center w-full">
        <div className="flex gap-2 items-center">
          <div>
            <img src="/icons/tick.svg" alt="tick" />
          </div>
          <div>
            <p className="text-black text-xl font-medium">Start</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-black bg-opacity-40 rounded-full border text-center">
            <p className="text-white text-sm font-medium">2</p>
          </div>
          <div>
            <p className="text-black text-opacity-40 text-xl font-medium">
              Fill Detail
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-black bg-opacity-40 rounded-full border text-center">
            <p className="text-white text-sm font-medium">3</p>
          </div>
          <div>
            <p className="text-black text-opacity-40 text-xl font-medium">
              Confirm
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-sky-950 text-4xl font-semibold ml-[68px] mt-10">
        Free IELTS Classes
      </h1>
      <input
        className="w-[492px] h-[57px] bg-white rounded-[10px] shadow mt-10 ml-[68px] box-border pl-5 placeholder-shown:text-black placeholder-shown:text-opacity-40 text-lg font-normal"
        type="text"
        placeholder="Enter Your Full Name"
      />
      <div className="ml-[68px] mt-9 flex gap-3">
        <Dropdown />
        <input
          className="w-80 h-14 pl-5 box-border placeholder-shown:text-black placeholder-shown:text-opacity-40 text-lg font-normal rounded-lg shadow"
          type="number"
          placeholder="Phone Number"
        />
      </div>
      <button className="w-96 h-12 mt-14 mx-auto block rounded-lg text-center bg-sky-950 text-white text-xl font-extrabold leading-none cursor-pointer">
        Continue
      </button>
      <p className="text-black text-xs font-normal mt-5 mb-10 flex justify-center items-center">
        By continuing, you agree to our Term of services & Privacy policy
      </p>
    </div>
  );
};

export default RegistrationForm;
