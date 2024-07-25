import React from "react";
import logo from "../img/logo.svg";

function Navbar() {
  return (
    <div className=" bg-white flex flex-row justify-between items-center gap-5 z-[110] w-full px-8 lg:px-20 shadow-lg h-20">
      <div className="relative mx-auto max-w-screen-xl w-11/12">
        <div className="flex items-center justify-between">
          <img src={logo} className="w-32 cursor-pointer" alt="Logo" />
          <div className="hidden lg:flex lg:items-center md:gap-8">
            <nav className="hidden lg:flex lg:items-center md:gap-4">
              <div className="cursor-pointer text-darkBlue hover:text-brightRed">
                About us
              </div>
              <div className="cursor-pointer text-darkBlue hover:text-brightRed">
                Pricing
              </div>
              <div className="cursor-pointer text-darkBlue hover:text-brightRed">
                Demo
              </div>
            </nav>
            <button
              type="button"
              className="w-max px-4  py-1.5 text-center rounded-full space-x-1 bg-brightRed flex justify-center items-center text-white hover:scale-105 transition-all ease-out"
            >
              <span className="text-white">For Jobseekers</span>
            </button>
            <button
              type="button"
              className="w-max px-4  py-1.5 text-center rounded-full space-x-1 bg-white flex border border-darkBlue justify-center items-center text-darkBlue hover:scale-105 transition-all ease-out"
            >
              Sign In
            </button>
          </div>
          <button className="text-4xl lg:hidden w-10">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
