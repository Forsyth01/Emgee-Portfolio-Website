import React from "react";
import figmaIcon from "/assets/icons/figma.png";
import photoshopIcon from "/assets/icons/photoshop.png";
import coreldrawIcon from "/assets/icons/coreldraw.png";

const skills = [
  { name: "Figma", icon: figmaIcon },
  { name: "Photoshop", icon: photoshopIcon },
  { name: "CorelDRAW", icon: coreldrawIcon },
  { name: "UI/UX" },
  { name: "Wireframing" },
  { name: "Visual Storytelling" },
  { name: "Prototyping" },
  { name: "Brand Identity" },
];

const SkillsAndTools = () => {
  return (
    <div className="p-4 shadow-md rounded-2xl bg-white dark:bg-[#2A2A28] transition-colors duration-700 my-8 sm:my-0">
      <h2 className="text-2xl tracking-tight font-semibold mb-4 text-gray-900 dark:text-white">
        Skills & Tools
      </h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-[#F5F8E9] dark:bg-[#3A3A38] rounded-full px-4 md:py-2 py-1 font-medium tracking-tight md:text-md text-sm text-gray-900 dark:text-gray-200 transition-colors duration-700"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 object-contain"
              />
            )}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsAndTools;
