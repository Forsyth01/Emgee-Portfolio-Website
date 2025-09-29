import React from "react";
import MyApproach from "./MyApproach";
import SkillsAndTools from "./Skills&Tools";

const About = () => {
  return (
    <div
      id="about"
      className="md:dark:bg-[#1A1A19] dark:bg-[#2A2A28] transition-colors duration-700 "
    >
      <div className="md:flex items-center justify-center gap-10 w-[90%] m-auto md:py-20 py-10">
        <div className="xl:bg-[#F6F6F3] dark:bg-[#2A2A28] rounded-2xl md:p-6 transition-colors duration-700 2xl:w-[671px]">
          <h2 className="text-3xl font-semibold tracking-tighter ml-2 mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="flex lg:flex md:block items-center gap-4 items-cente ">
            <img src="/images/aboutme.png" alt="Profile" className="h-[148px] xl:h-[230px] lg:h-[180px]" />
            <div className=" text-gray-800 dark:text-white ">
              <p className="leading-[1.3] tracking-tight">
                I'm Erhokhon George, a UI/UX and graphic designer with over 4
                years of experience turning ideas into clean, functional, and
                visually engaging designs.
              </p>
                <p className=" mt-2 tracking-tight leading-[1.3] dark:text-white hidden xl:flex">
                Whether it's designing intuitive mobile apps, landing pages, or
                high-impact social content, I bring a strategic and user-focused
                mindset to every project.
              </p>
            </div>
          </div>
              <p className=" mt-2 tracking-tight leading-[1.3] dark:text-white xl:hidden">
                Whether it's designing intuitive mobile apps, landing pages, or
                high-impact social content, I bring a strategic and user-focused
                mindset to every project.
              </p>

          <p className="mt-8 italic text-gray-700 dark:text-white">
            Fun Fact: I design best when I’m listening to deep emotional music –
            it keeps my creativity alive.
          </p>
        </div>

        <div className="space-y-6 xl:space-y-4 text-gray-900 dark:text-white ">
          <div className="2xl:w-[600px]">
          <SkillsAndTools />
          </div>
          <div className="2xl:w-[600px]">
          <MyApproach />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
