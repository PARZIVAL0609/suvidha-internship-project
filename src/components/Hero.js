import React from "react";
import laptop from "../img/laptop-hero-svg.svg";

const Hero = () => {
  return (
    <>
      <div className="mt-1">
        <div className="h-[100%] lg:h-[85vh] relative z-0 overflow-hidden grid place-items-center ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[99%] lg:h-[84vh] w-[2200px] rounded-b-[70%] shadow -z-10 grid place-items-center"></div>
          <div className="max-w-7xl w-11/12 mx-auto">
            <div className="grid md:grid-cols-2 max-w-full mx-auto md:place-items-center mb-10 undefined">
              <div className="order-2 md:order-none">
                <h2 className="text-3xl md:text-5xl font-extrabold text-newBlack">
                  Hire Talent that <br/>
                  <span className="text-brightRed">
                    is Relevant &amp; Lives closer
                  </span>
                </h2>
                <p className="text-base md:text-xl font-semibold pt-4 text-newBlack/90 ">
                  We are India's first Geo-location based hiring platform.
                </p>
                <div className="pt-6 flex gap-6">
                  <button
                    type="button"
                    className="w-max px-4  py-3 text-center rounded-full space-x-1 bg-darkBlue flex justify-center items-center text-white hover:scale-105 transition-all ease-out"
                  >
                    <span className="text-xs md:text-sm text-white">
                      Start Free Trial
                    </span>
                  </button>
                  <button
                    type="button"
                    className="w-max px-4  py-3 text-center rounded-full space-x-1 bg-brightRed flex justify-center items-center text-white hover:scale-105 transition-all ease-out"
                  >
                    <span className="text-xs md:text-sm text-white">
                      Book a Demo
                    </span>
                  </button>
                </div>
                <p className="text-gray-400 pt-4 text-sm md:text-base">
                  * No credit card needed
                </p>
              </div>
              <div className="order-1 md:order-none grid place-items-center py-6 md:py-0 w-full h-full md:w-[90%] md:h-[90%]">
                <img src={laptop} alt="laptop-image" width="780" height="724" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
