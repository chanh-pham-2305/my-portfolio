import { projects } from "@/constants";
import React from "react";
import { ProjectCard } from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h1 className="text-6xl flex items-center justify-center text-white">
        My projects
      </h1>
      <div className="flex flex-row justify-around items-center gap-5 pt-10">
        {projects.map((projects, idx) => (
          <ProjectCard
            key={idx}
            index={idx}
            name={projects.name}
            image={projects.image}
            description={projects.description}
            tags={projects.tags}
            detail_link={projects.detail_link}
            web_demo={projects.web_demo}
          />
        ))}
      </div>
    </div>
  );
};

export { Projects };
