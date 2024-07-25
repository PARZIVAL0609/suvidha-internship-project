import React from "react";

const MarketPulse = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 md:py-16">
      <h1 className="text-2xl md:text-3xl font-extrabold text-center  text-newBlack pb-6 md:pb-12">
        The Market Pulse
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-extrabold text-brightRed pb-4">3/4</p>
          <p className=" font-medium text-xl text-newBlack">
            Indians calculate commute time before job switch
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-extrabold text-brightRed pb-4">25%</p>
          <p className=" font-medium text-xl text-newBlack">
            Indians willing to accept paycut for shorter commute
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-extrabold text-brightRed pb-4">61%</p>
          <p className=" font-medium text-xl text-newBlack">
            Office-Goers In India Want Commuting To Be Included In Working Hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPulse;
