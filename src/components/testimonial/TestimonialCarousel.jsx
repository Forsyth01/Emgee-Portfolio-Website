import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <div className=" block lg:flex items-center py-2 transition-colors duration-700">
      <div className="lg:relative lg:left-[5%] flex text-center md:text-left lg:w-[50%] ">
        <h1 className="text-[38px] leading-[1.1] font-semibold tracking-tighter text-white">
          What Our <br /> Clients <br />say about us
          <img
            src="/images/line.png"
            alt=""
            className="py-10 cursor-pointer  m-auto lg:m-0 "
          />
        </h1>
      </div>
      <Marquee
        loop={2}
        // play={false}
        autoFill={true}
        gradient={true}
        gradientWidth={200}
        gradientColor={[26, 26, 25]} // matches dark mode background (#1A1A19)
      >
        {/* <TestimonialCard /> */}
        <div className="flex">
        <img src="/images/Testimonial card 1.png" alt="" className="mx-2 cursor-text" />
        <img src="/images/Testimonial card 2.png" alt="" className="mx-2 cursor-text" />
        <img src="/images/Testimonial card 3.png" alt="" className="mx-2 cursor-text" />
        </div>
      </Marquee>
    </div>
  );
};

export default TestimonialCarousel;
