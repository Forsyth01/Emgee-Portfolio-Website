import React from "react";
import { projects } from "../data/projects";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="dark:bg-[#1A1A19] bg-[#F5F8E9] py-8 transition-colors duration-700 "
    >
      <div className="bg-white dark:bg-[#222222] rounded-2xl w-[90%] m-auto p-8 transition-colors duration-700">
        <h1 className="text-center text-3xl font-semibold tracking-tighter text-gray-900 dark:text-white pb-2 pt-4">
          Portfolio / Case Studies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="bg-[#F5F8E9] dark:bg-[#1e1e1e]  rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mt-3">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.date}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-2 bg-[#C2DE3A] rounded-full px-4 py-2">
            View All
            <span className="">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
