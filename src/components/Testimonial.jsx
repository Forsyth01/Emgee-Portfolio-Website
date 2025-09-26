import React from "react";
import TestimonialCarousel from "./testimonial/TestimonialCarousel";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="bg-white text-gray-900 dark:bg-[#1A1A19] dark:text-white  py-6 transition-colors duration-300"
    >
      <div>
        <h1 className="text-3xl text-center font-normal leading-[1] tracking-tighter py-4">
          Read Feedbacks, <br />
          <span className="font-bold tracking-tight">Hire with confidence</span>
        </h1>
      </div>

      <div className="py-6">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
