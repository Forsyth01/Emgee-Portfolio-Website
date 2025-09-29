import React from "react";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="dark:bg-[#1A1A19] bg-[#F5F8E9] py-8 transition-colors duration-700 "
    >
      <div className="lg:bg-white lg:dark:bg-[#222222] rounded-2xl w-[90%] m-auto lg:p-8 transition-colors duration-700">
        <h1 className="md:text-center text-left text-2xl md:text-3xl font-medium md:font-semibold tracking-tighter text-gray-900 dark:text-white pb-2 pt-4">
          Portfolio / Case Studies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 space-y-6 md:space-y-0 mt-6 place-items-center">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`cursor-pointer hover:-translate-y-1 transition-transform duration-700 ${
                index > 3 ? "2xl:hidden" : ""
              }`}
            >
              {/* Card Container */}
              <div className=" flex flex-col rounded-2xl shadow bg-white dark:bg-[#F5F8E9]">
                {/* Image */}
                <div className=" w-full">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className=" object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-4 pb-4 pt-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-black dark:text-black">
                      {project.title}
                    </h2>
                    <p className="text-[12px] text-gray-500 dark:text-gray-500">
                      {project.date}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-black text-sm mt-2 line-clamp-3">
                    {project.description}
                  </p>
                  {/* Spacer pushes description + keeps equal height */}
                  <div className="flex-grow" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="font-medium dark:text-white tracking-tighter">
            See more projects?
          </p>
          <Link to="/projects">
            <button className="flex items-center font-medium gap-2 bg-[#C2DE3A] rounded-full px-4 py-2">
              View All
              <ArrowUpRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
