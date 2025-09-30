import React from "react";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackAndToggleButton from "../components/Back&ToggleButton";

const Projects = () => {
  return (
    <div className="bg-[#F5F8E9]  dark:bg-[#1e1e1e] transition-colors duration-700">
      <BackAndToggleButton />
        {/* Decorative image */}
        <div className="absolute right-0 top-15 lg:block hidden pt-4">
          <img src="/images/penproject.png" alt="" className="h-55" />
        </div>
      <div className="w-[90%] min-h-screen m-auto py-10 relative">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:py-14 py-10 text-center font-semibold md:text-4xl text-2xl tracking-tight"
        >
          <h1 className="dark:text-white">
            Check out some of my works <br />
            carefully crafted with Love and <br className="hidden md:flex" />{" "}
            dedication.
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6 space-y-6 md:space-y-0 place-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className={`cursor-pointer hover:-translate-y-1 transition-transform duration-700 ${
                index > 3 ? "2xl:hidden" : ""
              }`}
            >
              <Link to={`/projects/${project.id}`}>
                {/* Card Container */}
                <div className="flex flex-col rounded-2xl shadow bg-white dark:bg-[#F5F8E9]">
                  {/* Image */}
                  <div>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="object-cover rounded-t-2xl"
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
                    <div className="flex-grow" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional sections */}
      <Experience />
      <Contact />
    </div>
  );
};

export default Projects;
