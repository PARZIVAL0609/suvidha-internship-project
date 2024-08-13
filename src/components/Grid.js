import React from "react";
import googlePlaySvg from "../img/google-play-svg.svg";
import appleStoreSvg from "../img/app-store-svg.svg";
import GridLogo from "./GridLogo";
import FacebookSvg from "./FacebookSvg";
import InstagramSvg from "./InstagramSvg";
import YoutubeSvg from "./YoutubeSvg";
import LinkedinSvg from "./LinkedinSvg";
import TwitterSvg from "./TwitterSvg";

function Grid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="col-span-1 md:col-span-2 bg-black py-6 md:py-12 text-white">
          <div className="max-w-lg xl:pl-28 px-8 md:px-12">
            <GridLogo />
            <p className="pt-4 text-sm md:text-base">
              India’s first geo-location based job search platform
            </p>
            <div className="py-4">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex items-center justify-start gap-4">
                  <a
                    href="https://www.facebook.com/inradius.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow InRadius on Facebook"
                  >
                    <FacebookSvg/>
                  </a>
                  <a
                    href="https://www.instagram.com/inradius.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow @inradius on Instagram"
                  >
                    <InstagramSvg/>
                  </a>
                  <a
                    href="https://www.youtube.com/@inradiustechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find InRadius Technologies on Youtube"
                  >
                    <YoutubeSvg/>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/inradius-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow InRadius Technologies on Linkedin"
                  >
                    <LinkedinSvg/>
                  </a>
                  <a
                    href="https://twitter.com/inradius"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow InRadius on Twitter"
                  >
                    <TwitterSvg/>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-sm md:text-base">
                <span>Address: </span>1014, Lodha Supremus - Tower B, Lodha
                Business District 2, Kolshet Rd, Thane, Maharashtra 400607.
              </p>
            </div>
            <div className="py-6">
              <div className="space-y-4">
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=in.inradius.inradius_app"
                  >
                    <img
                      alt="Google Play"
                      loading="lazy"
                      width="218"
                      height="65"
                      decoding="async"
                      data-nimg="1"
                      className="w-32 md:w-36 h-full"
                      src={googlePlaySvg}
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/us/app/inradius-in-job-search/id6476220207"
                  >
                    <img
                      alt="App Store"
                      loading="lazy"
                      width="218"
                      height="65"
                      decoding="async"
                      data-nimg="1"
                      className="w-32 md:w-36 h-full"
                      src={appleStoreSvg}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 bg-white py-6 md:py-12 ">
          <div className="max-w-4xl xl:pr-28 px-8 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="hidden md:block">
                <h2 className="font-semibold text-lg pb-3">Jobs By Location</h2>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  All Jobs
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Mumbai
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Pune
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Bangalore
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Hyderabad
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Delhi NCR
                </p>
              </div>
              <div className="hidden md:block">
                <h2 className="font-semibold text-lg  pb-3">Jobs By Domain</h2>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Sales
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Business Development
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Information Technology &amp; Software Development
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Marketing and Communications
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Customer Service
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Consulting
                </p>
              </div>
              <div className="hidden md:block">
                <h2 className="font-semibold text-lg  pb-3">Jobs By Skills</h2>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Sales
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  MS Excel
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Social Media Marketing
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Adobe Photoshop
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  React JS
                </p>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Python
                </p>
              </div>
              <div className="hidden md:block">
                <h2 className="font-semibold text-lg pb-3">Resources</h2>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Blogs
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-lg  pb-3">About Company</h2>
                <p className=" text-black font-normal cursor-pointer hover:text-primary pb-1">
                  About Us
                </p>
              </div>
              <div className="">
                <h2 className="font-semibold text-lg pb-3">Quick Links</h2>
                <p className="text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Job Seekers FAQ
                </p>
                <p className="text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Talent Seekers FAQ
                </p>
                <p className="text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Terms &amp; Conditions
                </p>
                <p className="text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Privacy Policy
                </p>
                <p className="text-black font-normal cursor-pointer hover:text-primary pb-1">
                  Referral Terms &amp; Policies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
