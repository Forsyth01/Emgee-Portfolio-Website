import React from "react";
import MyApproach from "./MyApproach";
import SkillsAndTools from "./Skills&Tools";

const About = () => {
  return (
    <div
      id="about"
      className="dark:bg-[#1A1A19] transition-colors duration-700 "
    >
      <div className="md:flex gap-12 w-[90%] m-auto py-20">
        <div className="bg-[#F6F6F3] dark:bg-[#2A2A28] rounded-2xl p-6 transition-colors duration-700">
          <h2 className="text-3xl font-semibold tracking-tighter ml-2 mb-10 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="xl:flex gap-4 items-center ">
            <img src="/images/aboutme.png" alt="Profile" className="rounded-xl" />
            <div className="tracking-tighter text-gray-800 dark:text-gray-300 md:pt-4">
              <p>
                I'm Erhokhon George, a UI/UX and graphic designer with over 4
                years of experience turning ideas into clean, functional, and
                visually engaging designs.
              </p>
              <p className="mt-4 tracking-tighter">
                Whether it's designing intuitive mobile apps, landing pages, or
                high-impact social content, I bring a strategic and user-focused
                mindset to every project.
              </p>
            </div>
          </div>

          <p className="mt-8 italic text-gray-700 dark:text-gray-400">
            Fun Fact: I design best when I’m listening to deep emotional music –
            it keeps my creativity alive.
          </p>
        </div>

        <div className="space-y-6  text-gray-900 dark:text-white">
          <SkillsAndTools />
          <MyApproach />
        </div>
      </div>
    </div>
  );
};

export default About;
