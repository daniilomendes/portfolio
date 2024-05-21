"use client";

import { projectsData } from "@/constants";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const ProjectSection = () => {
  const [tag, setTag] = useState("Todos");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>

      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="Todos"
          onClick={handleTagChange}
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        /> */}
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
