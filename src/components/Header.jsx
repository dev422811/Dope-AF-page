import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <header className="bg-transparent text-[#a0522d] py-8">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-center">
        <img
          src={logo}
          alt="Dope AF Logo"
          className="h-48 md:h-72 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Dope AF Jewelry
        </h1>
      </div>
    </header>
  );
};

export default Header;
