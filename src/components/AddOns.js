import React from "react";
import ArrowSVG from "./ArrowSVG";
// import recruitmentSvg from "./recruitment-svg.svg";
// import managedSvg from "./managed-icon-svg.svg";
// import linkedinSvg from "./linked-in-icon-svg.svg";

const AddOns = () => {
  return (
    <>
      <div className="h-[100%] xl:h-[80vh] relative z-0 overflow-hidden grid place-items-center my-7 md:my-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-veryDarkBlue h-[99%] xl:h-[79vh] w-[2200px] rounded-[70%] shadow -z-10 grid place-items-center"></div>
        <div className="max-w-6xl w-11/12 mx-auto py-12">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center  text-white pb-5 md:pb-10">
              Paid Add-ons
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl w-11/12 mx-auto gap-12 z-10 ">
              <div className="text-center">
                <div className="flex justify-center">
                  {/* <img alt="" src={recruitmentSvg} /> */}
                </div>
                <h2 className="text-lg font-semibold pt-4">
                  <span className="xl:block">Recruitment Support</span>
                </h2>
                <p className="py-3">
                  Connect with our headhunting team and pay only based on
                  success
                </p>
                <div className="flex gap-2 items-center justify-center text-sm pt-5">
                  <span>
                    <a href="/talentseeker/pricing/">Find out more</a>
                  </span>
                  <span>
                    <ArrowSVG />
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  {/* <img alt="" src={managedSvg} /> */}
                </div>
                <h2 className="text-lg font-semibold pt-4">
                  <span className="xl:block">Managed Account Services</span>
                </h2>
                <p className="py-3">
                  Get a dedicated resource from our team to cater your bulk
                  hiring needs
                </p>
                <div className="flex gap-2 items-center justify-center text-sm pt-5">
                  <span>
                    <a href="/talentseeker/pricing/">Find out more</a>
                  </span>
                  <span>
                    <ArrowSVG />
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  {/* <img alt="" src={linkedinSvg} /> */}
                </div>
                <h2 className="text-lg font-semibold pt-4">
                  <span className="xl:block">LinkedIn Management</span>
                </h2>
                <p className="py-3">
                  Connect with our team to manage and drive awarness for your
                  Company Linkedin Page
                </p>
                <div className="flex gap-2 items-center justify-center text-sm pt-5">
                  <span>
                    <a href="/talentseeker/pricing/">Find out more</a>
                  </span>
                  <span>
                    <ArrowSVG />
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-12 flex justify-center items-center">
              <span className="underline text-lg">
                <a href="/talentseeker/pricing/">View all</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
