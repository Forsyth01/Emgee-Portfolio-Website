import React from "react";
import { motion } from "framer-motion";
import MyApproach from "./MyApproach";
import SkillsAndTools from "./Skills&Tools";

const About = () => {
  // Variants for container & children
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // animate children one after another
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="about"
      className="md:dark:bg-[#1A1A19] dark:bg-[#2A2A28] transition-colors duration-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
      variants={container}
    >
      <div className="md:flex items-center justify-center gap-10 w-[90%] m-auto md:py-20 py-10">
        {/* About Box */}
        <motion.div
          className="xl:bg-[#F6F6F3] dark:bg-[#2A2A28] rounded-2xl md:p-6 transition-colors duration-700 2xl:w-[671px]"
          variants={item}
        >
          <motion.h2
            className="text-3xl font-semibold tracking-tighter ml-2 mb-6 text-gray-900 dark:text-white"
            variants={item}
          >
            About Me
          </motion.h2>

          <div className="flex lg:flex md:block items-center gap-4">
            <motion.img
              src="/images/aboutme.png"
              alt="Profile"
              className="h-[148px] xl:h-[230px] lg:h-[180px]"
              variants={item}
            />
            <motion.div className="text-gray-800 dark:text-white" variants={item}>
              <p className="leading-[1.3] tracking-tight">
                I'm Erhokhon George, a UI/UX and graphic designer with over 4
                years of experience turning ideas into clean, functional, and
                visually engaging designs.
              </p>
              <p className="mt-2 tracking-tight leading-[1.3] dark:text-white hidden xl:flex">
                Whether it's designing intuitive mobile apps, landing pages, or
                high-impact social content, I bring a strategic and user-focused
                mindset to every project.
              </p>
            </motion.div>
          </div>

          <motion.p className="mt-2 tracking-tight leading-[1.3] dark:text-white xl:hidden" variants={item}>
            Whether it's designing intuitive mobile apps, landing pages, or
            high-impact social content, I bring a strategic and user-focused
            mindset to every project.
          </motion.p>

          <motion.p className="mt-8 italic text-gray-700 dark:text-white" variants={item}>
            Fun Fact: I design best when I’m listening to deep emotional music –
            it keeps my creativity alive.
          </motion.p>
        </motion.div>

        {/* Skills & MyApproach */}
        <motion.div className="space-y-6 xl:space-y-4 text-gray-900 dark:text-white" variants={container}>
          <motion.div className="2xl:w-[600px]" variants={item}>
            <SkillsAndTools />
          </motion.div>
          <motion.div className="2xl:w-[600px]" variants={item}>
            <MyApproach />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
