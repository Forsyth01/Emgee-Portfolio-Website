import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences = [
    {
      title: "Mintrix Trade Limited ",
      date: "March 2021 - Present",
      role: "UI/UX Designer | Graphic Designer (Remote)",
    },
    {
      title: "Posze",
      date: "July 2024 ",
      role: "UI/UX Designer",
    },
    {
      title: "Geniz Global (Geniz Tech)",
      date: "July 2024 ",
      role: "Graphic Designer",
    },
    {
      title: "EMB Telecoms",
      date: "August 2024 ",
      role: "Graphic Designer",
    },
    {
      title: "Textworld.co",
      date: "April 2025 ",
      role: "Graphic Designer",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div>
        {/* Header */}
        <div className="flex justify-between py-4">
          <h2 className="text-3xl font-semibold tracking-tighter text-gray-800 dark:text-white mb-4">
            <span className="font-normal tracking-tighter">Work </span>
            <br /> <span className="font-bold">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 flex flex-col justify-end">
            5 Years
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-4 relative">
          <div className="absolute">
            <img
              src="/images/Bullet.png"
              alt=""
              className="h-86 relative right-0 opacity-70 dark:opacity-50"
            />
          </div>

          {experiences.map((exp, index) => (
            <ul
              key={index}
              className="list-none"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <li className="flex items-center justify-between ml-4">
                <div className="flex items-center tracking-tight">
                  <h3 className="font-semibold tracking-tighter text-[18px] text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm flex flex-col text-right">
                  {exp.date}
                </p>
              </li>
              <li className="ml-4 text-gray-600 dark:text-gray-400">
                {exp.role}
              </li>
            </ul>
          ))}
        </div>

        {/* Resume Button */}
        <div className="flex items-center justify-between py-6 mt-4">
          <div>
            <a href="/Elvis_Frimpong_CV.pdf" download="Elvis_Frimpong_CV.pdf">
              <button className="xl:mt-4 bg-[#C2DE3A] hover:bg-[#cbda84] cursor-pointer font-medium px-6 py-2 rounded-full tracking-tighter flex items-center text-gray-900">
                <span className="mr-2">
                  <Download size={20} />
                </span>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
