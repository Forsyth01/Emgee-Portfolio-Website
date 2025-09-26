import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Set initial styles explicitly
    gsap.set([imageRef.current, textRef.current], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        toggleActions: "play none none none", // play once, no reverse
        // markers: true, // uncomment to debug trigger position
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.7"
    );
  }, []);

  return (
    <div className="bg-[#F6F6F3] dark:bg-[#1e1e1e] transition-colors duration-700 ">
    <div className="overflow-hidden w-[80%] mx-auto md:p-6 sm:flex items-center justify-center  py-12">
      <img
        ref={imageRef}
        src="/images/contact.png"
        alt="Profile"
        className="md:h-full h-50 m-auto sm:m-none " 
      />
      <div ref={textRef} className="sm:ml-8 pt-4 ">
        <h1 className="xl:text-4xl text-3xl tracking-tighter leading-[1.1] font-semibold text-gray-900 mb-4 dark:text-gray-50 text-center sm:text-left">
          Let’s bring your next <br className="sm:flex hidden" />  project to life with a  <br className="sm:flex hidden" /> creative edge.
        </h1>
        <p className="text-center sm:text-left text-gray-600 mb-6 font-regular tracking-tight dark:text-gray-50">
          Whether you're building a brand, an app, or a full product experience, <br className="hidden md:flex"/>purpose and clarity.
          <br className="hidden md:flex"/>
         <span className="hidden md:flex">I’m here to help you design it with </span>
        </p>
        <div className="m-auto sm:m-none flex justify-center md:block">
        <button className="bg-[#C2DE3A] font-medium cursor-pointer px-6 py-3 rounded-full hover:bg-[#d7e786] transition-colors tracking-tighter ">
          <a href="mailto:georgekyrian@gmail.com " className="tracking-wider">Let's Discuss It</a>
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
