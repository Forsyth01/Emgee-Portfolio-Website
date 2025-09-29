import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#F5F8E9] dark:bg-[#1A1A19] transition-colors duration-700">
      <div className="hidden lg:flex">
        <img src="images/Vector.png" alt="" className="absolute right-0" />
      </div>
      <div className="hidden xl:flex">
        <img
          src="images/Vector2.png"
          alt=""
          className="absolute left-0 bottom-0"
        />
      </div>

      <div className="min-h-[95vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center">
        <div className="mt-18 pb-4">
          <div className="grid w-[95%] m-auto place-items-center text-center gap-y-2 ">
            {/* Profile Image */}
            <div className=" rounded-xl mt-6 xs:mt-8 sm:mt-10 inline-block">
              <img
                src="/images/profilepic.png"
                alt="Frimpong Elvis profile"
                className="hidden md:flex h-50 w-50 xs:h-60 sm:w-20 md:h-24 md:w-24 
               max-h-[20vw] max-w-[20vw] min-h-[60px] min-w-[60px] 
               object-cover rounded-xl
               transition-transform duration-300 ease-in-out 
               hover:scale-103 cursor-pointer"
              />
            </div>

            {/* Intro */}
            <div>
              <p className="font-medium  text-[24px] text-gray-900 dark:text-white tracking-tight">
                Hi, I’m George 👋
              </p>
            </div>

            {/* Heading + Paragraph */}
            <div className="space-y-4">
              <div>
                <h1 className="font-semibold text-[36px] xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[6xl] leading-[108%] tracking-tighter text-gray-900 dark:text-white">
                  Designing Digital <br />
                  Experiences That Convert &{" "}
                  <br className="hidden sm:flex 2xl:hidden" /> Communicate
                </h1>
              </div>
              <div>
                <p className="font-regular text-[16px] xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-md text-gray-700 dark:text-gray-300 max-w-[90%] sm:max-w-2xl mx-auto">
                  I’m George, a UI/UX and Graphic Designer helping brands stand
                  out through clean, user-focused visuals and strategy.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center mt-4">
              <button className="flex items-center gap-2 rounded-full bg-[#C2DE3A] px-8 py-2 tracking-tighter hover:scale-103 transition-transform duration-300 ease-in-out text-gray-900 dark:text-black">
                <span className="font-medium">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
