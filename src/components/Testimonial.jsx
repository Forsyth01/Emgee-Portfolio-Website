import React from "react";
import TestimonialCarousel from "./testimonial/TestimonialCarousel";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className=" text-white bg-[#1A1A19]  py-6 transition-colors duration-300"
    >
      <div className="">
        <h1 className="md:text-4xl text-2xl text-center font-regular leading-[1.1] tracking-tighter py-4">
          Read Feedbacks, <br />
          <span className="font-semibold tracking-tight">Hire with confidence</span>
        </h1>
      </div>

      <div className="py-6">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
