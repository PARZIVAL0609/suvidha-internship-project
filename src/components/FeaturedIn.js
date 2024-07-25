import React from "react";
import LinkSvg from "./LinkSvg";
import businessStandard from "../img/business-standard-logo-2.webp";
import financialExpress from "../img/financial-express-logo.png";
import timesofIndia from "../img/timesofindia-logo.png";

const FeaturedIn = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center  text-newBlack pb-6">
        Featured in
      </h1>
      <div className="max-w-7xl mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 gap-9">
        <div className="p-6 rounded-xl shadow flex flex-col justify-between gap-y-6 bg-white">
          <div>
            <img
              alt="Business Standard"
              className=" w-full  object-contain h-14"
              src={businessStandard}
            />
            <hr className="my-4 h-0.5 bg-gray-200" />
            <p>
              Achieving work-life Balance Seems a Reality with InRadius -
              India's First Location Based Job Search Platform.
            </p>
          </div>
          <a
            className="text-brightRed text-right w-fit ml-auto"
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <span className="flex gap-2">
              View Article
              <LinkSvg />
            </span>
          </a>
        </div>
        <div className="p-6 rounded-xl shadow flex flex-col justify-between gap-y-6 bg-white">
          <div>
            <img
              alt="Financial Express"
              loading="lazy"
              width="331"
              height="39"
              decoding="async"
              data-nimg="1"
              className=" w-full  object-contain h-14"
              src={financialExpress}
            />
            <hr className="my-4 h-0.5 bg-gray-200" />
            <p>
              Our well-being and emotional health: Can a demanding commute
              affect them?
            </p>
          </div>
          <a
            className="text-brightRed text-right w-fit ml-auto"
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <span className="flex gap-2">
              View Article
              <LinkSvg />
            </span>
          </a>
        </div>
        <div className="p-6 rounded-xl shadow flex flex-col justify-between gap-y-6 bg-white">
          <div>
            <img
              alt="Times of India"
              loading="lazy"
              width="791"
              height="114"
              decoding="async"
              data-nimg="1"
              className=" w-full  object-contain h-14"
              src={timesofIndia}
            />
            <hr className="my-4 h-0.5 bg-gray-200" />
            <p>
              The Future of Recruitment: How Technology Can Revolutionize the
              Hiring Process.
            </p>
          </div>
          <a
            className="text-brightRed text-right w-fit ml-auto"
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <span className="flex gap-2">
              View Article
              <LinkSvg />
            </span>
          </a>
        </div>
      </div>
      <div className="pt-12 flex justify-center items-center">
        <span className="underline">
          <a href="/featured-in/">View all</a>
        </span>
      </div>
    </div>
  );
};

export default FeaturedIn;
