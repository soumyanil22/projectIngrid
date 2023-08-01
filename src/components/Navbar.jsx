import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen">
      <div className="bg-sky-950 box-border py-3 pl-36">
        <div className="w-24 h-20">
          <img
            className="w-full h-full"
            src="/images/InGelt-white.png"
            alt="logo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
