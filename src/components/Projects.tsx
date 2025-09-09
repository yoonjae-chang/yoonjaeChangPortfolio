"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const Projects = () => {

  return (
    <section id="projects" className="pb-30 pt-20  px-4 sm:px-6 lg:px-8 bg-black/82 mt-20">
        <div className="flex flex-col items-center justify-center mx-auto md:px-0 px-8 max-w-[1370px]"> 
        <div className="text-left mb-16 text-card w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-[55px] mb-4  font-inter font-bold">
            Ongoing and Completed Work
          </h2>
          <p className="text-[27px] text-gray-200 font-lato font-bold">
            Check out some of my favorite projects and things I have worked on. This varies from personal projects, research, and things I have worked on for fun. 
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        </div>
    </section>
  );
};

export default Projects;
