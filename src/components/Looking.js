import React from "react";
import TickSVG from "./TickSVG";
import jobseeker from "../img/jobseeker.webp";

const Looking = () => {
  return (
    <div>
      <div className="h-[100%] xl:h-[80vh] relative z-0 overflow-hidden grid place-items-center my-7 md:my-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkBlue h-[99%] xl:h-[79vh] w-[2200px] rounded-[70%] shadow -z-10 grid place-items-center"></div>
        <div className="max-w-6xl w-11/12 mx-auto py-12">
          <div className="py-8 md:py-16  text-white grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto relative">
            <div className="grid place-items-center order-2 md:order-none">
              <div className="max-w-7xl mx-auto w-11/12">
                <h1 className="text-2xl md:text-3xl font-extrabold text-left pb-6 text-white">
                  Looking for a Job Change?
                </h1>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TickSVG />
                    <span className="text-sm md:text-base">
                      Find jobs closer to home
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TickSVG />
                    <span className="text-sm md:text-base">
                      Get structured interview feedbacks
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TickSVG />
                    <span className="text-sm md:text-base">Refer and earn</span>
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    type="button"
                    className="w-max px-5  py-2 text-center rounded-full space-x-1  bg-brightRed flex justify-center items-center hover:scale-105 transition-all ease-out"
                    tabIndex="0"
                  >
                    <span className="text-xs md:text-sm text-white">
                      Create Account
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid place-items-center order-1 md:order-none">
              <img alt="Jobseeker" src={jobseeker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Looking;
