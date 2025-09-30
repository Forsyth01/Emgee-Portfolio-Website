import React from "react";
import { motion } from "framer-motion";
import { Briefcase, BriefcaseBusiness, Download, Shirt } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between items
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="bg-[#F5F8E9] dark:bg-[#1A1A19] transition-colors duration-700 relative overflow-hidden">
      {/* Background graphics */}
      <motion.div
        className="hidden lg:flex absolute right-0 top-0 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        whileHover={{ rotate: 5 }} // rotate 5 degrees on hover
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <img src="images/Vector.png" alt="" />
      </motion.div>

      <motion.div
        className="hidden xl:flex absolute left-0 bottom-0 cursor-pointer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ rotate: -5 }} // rotate -5 degrees on hover
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <img src="images/Vector2.png" alt="" />
      </motion.div>

      <div className="min-h-[95vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center">
        <motion.div
          className="mt-18 pb-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid w-[95%] m-auto place-items-center text-center gap-y-2">
            {/* Profile Image */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl mt-6 xs:mt-8 sm:mt-10 inline-block"
            >
              <img
                src="/images/profilepic.png"
                alt="Frimpong Elvis profile"
                className="hidden md:flex h-50 w-50 xs:h-60 sm:w-20 md:h-24 md:w-24 
               max-h-[20vw] max-w-[20vw] min-h-[60px] min-w-[60px] 
               object-cover rounded-xl
               transition-transform duration-300 ease-in-out 
               hover:scale-103 cursor-pointer"
              />
            </motion.div>

            {/* Intro */}
            <motion.div variants={fadeUp}>
              <p className="font-medium text-lg md:text-[24px] text-gray-900 dark:text-white tracking-tight">
                Hi, I’m George 👋
              </p>
            </motion.div>

            {/* Heading + Paragraph */}
            <div className="space-y-4">
              <motion.div variants={fadeUp}>
                <h1 className="font-semibold text-[30px] xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[6xl] leading-[108%] tracking-tighter text-gray-900 dark:text-white">
                  Designing Digital <br />
                  Experiences That Convert &{" "}
                  <br className="hidden sm:flex 2xl:hidden" /> Communicate
                </h1>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="font-regular text-[12px] xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-md text-gray-700 dark:text-gray-300 max-w-[90%] sm:max-w-2xl mx-auto">
                  I’m George, a UI/UX and Graphic Designer helping brands stand
                  out through clean, user-focused visuals and strategy.
                </p>
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 justify-center mt-4"
            >
              <button className="group flex items-center gap-2 rounded-full bg-[#C2DE3A] hover:bg-[#d0e75e] px-8 py-2 tracking-tighter transition-all duration-300 ease-in-out text-gray-900 dark:text-black">
                <a
                  href="mailto:georgekyrian@gmail.com"
                  className="flex items-center gap-2"
                >
                  <span className="font-medium">Hire Me</span>
                  <BriefcaseBusiness
                    size={18}
                    className="transform transition-transform duration-300 group-hover:rotate-12"
                  />
                </a>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
