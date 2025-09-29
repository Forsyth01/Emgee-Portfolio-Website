import React from "react";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="bg-[#F5F8E9] dark:bg-[#1e1e1e] transition-colors duration-700 ">
      <div className="w-[90%] m-auto xl:py-26 pt-26 ">
        <div className="absolute right-0 top-15 lg:block hidden">
          <img src="/images/penproject.png" alt="" className="h-50" />
        </div>
        <div className="py-10 text-center font-semibold xl:text-4xl text-2xl tracking-tight">
          <h1 className="dark:text-white">
            Check out some of my works <br />
            carefully crafted with Love and <br className="hidden md:flex"/> dedication.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6 space-y-6 md:space-y-0 place-items-center">
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
                <div className="">
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
      </div>
      <Experience />
      <Contact />
    </div>
  );
};

export default Projects;
