import React from "react";
import TopRightArrSVG from "./TopRightArrSVG";
import penToGraph from "../img/pentograph.avif";
import handshake from "../img/handshake.jpg";
import interview from "../img/interview.webp";

const Blogs = () => {
  return (
    <div className="">
      <div className="h-[100%] xl:h-[80vh] relative z-0 overflow-hidden grid place-items-center my-7 md:my-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[99%] xl:h-[79vh] w-[2200px] rounded-[70%] shadow -z-10 grid place-items-center"></div>
        <div className="max-w-6xl w-11/12 mx-auto py-12">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center  text-purpleDark pb-6">
            Blogs
          </h1>
          <div className="text-center mx-auto w-full relative">
            <div className="grid grid-cols-1 gap-8 place-content-center md:grid-cols-3 ">
              <div className="cursor-pointer">
                <a href="/">
                  <article className="cursor-pointer">
                    <div className="md:hidden block rounded-lg overflow-hidden">
                      <span>
                        <img
                          alt="Salary Range by Experience and Industries in India 2024 "
                          src={penToGraph}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <div className="hidden md:block overflow-hidden rounded-lg">
                      <span>
                        <img
                          alt="Salary Range by Experience and Industries in India 2024 "
                          src={penToGraph}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110 "
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <header className="py-4">
                      <div>
                        <div className="flex bg-lightPink w-fit py-2 px-1 rounded-full text-xs">
                          <span className="md:px-2 px-1">3 min read</span>
                        </div>
                        <div className="flex justify-between group/item py-3 gap-2">
                          <h2 className="transition-transform duration-500 group-hover/item:underline text-left">
                            <span className="text-base font-semibold line-clamp-2">
                              Salary Range by Experience and Industries in India
                              2024{" "}
                            </span>
                          </h2>
                          <div className="flex justify-center items-start pl-2">
                            <TopRightArrSVG />
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 max-w-3xl text-left">
                          Salary ranges in India vary significantly across
                          different industries and levels of experience....
                        </p>
                      </div>
                    </header>
                  </article>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="/">
                  <article className="cursor-pointer">
                    <div className="md:hidden block rounded-lg overflow-hidden">
                      <span>
                        <img
                          alt="How to negotiate for a better salary"
                          src={handshake}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110 "
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <div className="hidden md:block overflow-hidden h-52 rounded-lg">
                      <span>
                        <img
                          alt="How to negotiate for a better salary"
                          src={handshake}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <header className="py-4">
                      <div>
                        <div className="flex bg-lightPink w-fit py-2 px-1 rounded-full text-xs">
                          <span className="md:px-2 px-1">4 min read</span>
                        </div>
                        <div className="flex justify-between group/item py-3 gap-2">
                          <h2 className="transition-transform duration-500 group-hover/item:underline text-left">
                            <span className="text-base font-semibold line-clamp-2">
                              How to negotiate for a better salary
                            </span>
                          </h2>
                          <div className="flex justify-center items-start pl-2">
                            <TopRightArrSVG />
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 max-w-3xl text-left">
                          Negotiating for a better salary is a critical skill in
                          your career development, essential not o...
                        </p>
                      </div>
                    </header>
                  </article>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="/">
                  <article className="cursor-pointer">
                    <div className="md:hidden block rounded-lg overflow-hidden">
                      <span>
                        <img
                          alt="How to prepare for Performance Appraisal discussion"
                          src={interview}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110 "
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <div className="hidden md:block overflow-hidden rounded-lg">
                      <span>
                        <img
                          alt="How to prepare for Performance Appraisal discussion"
                          src={interview}
                          decoding="async"
                          data-nimg="responsive"
                          className="overflow-hidden transition duration-500 hover:scale-110 rounded-lg hover:rounded-lg"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                        />
                      </span>
                    </div>
                    <header className="py-4">
                      <div>
                        <div className="flex bg-lightPink w-fit py-2 px-1 rounded-full text-xs">
                          <span className="md:px-2 px-1">3 min read</span>
                        </div>
                        <div className="flex justify-between group/item py-3 gap-2">
                          <h2 className="transition-transform duration-500 group-hover/item:underline text-left">
                            <span className="text-base font-semibold line-clamp-2">
                              How to prepare for Performance Appraisal
                              discussion
                            </span>
                          </h2>
                          <div className="flex justify-center items-start pl-2">
                            <TopRightArrSVG />
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 max-w-3xl text-left">
                          Preparing for a performance appraisal discussion is
                          crucial for any professional looking to adv...
                        </p>
                      </div>
                    </header>
                  </article>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 flex justify-center items-center">
            <span className="underline">
              <a href="/">View all</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
