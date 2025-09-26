import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <div className=" block lg:flex items-center dark:bg-[#232322]  bg-[#F5F8E9] py-12 transition-colors duration-700">
      <div className="lg:ml-20 lg:mr-10 flex text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
          What Our Clients say about us
          <img
            src="/images/line.png"
            alt=""
            className="py-10 cursor-pointer dark:invert m-auto lg:m-0 "
          />
        </h1>
      </div>
      <Marquee
        loop={2}
        autoFill={true}
        gradient={true}
        gradientWidth={200}
        gradientColor={[26, 26, 25]} // matches dark mode background (#1A1A19)
      >
        <TestimonialCard />
      </Marquee>
    </div>
  );
};

export default TestimonialCarousel;
