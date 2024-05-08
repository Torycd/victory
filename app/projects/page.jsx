import React from "react";
import ProjectItem from "@/components/ProjectItem";
import project1 from "@/public/assets/project/project1.jpg"
import project2 from "@/public/assets/project/project2.jpg"
import project3 from "@/public/assets/project/project3.jpg"
import project4 from "@/public/assets/project/project4.jpg"

const Projects = () => {
  return (
    <div className="flex flex-col w-[1240px] 2xl:px-16  mx-auto justify-center pt-32 items-center px-2">
      <div className="mx-auto px-2 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={project1}
            projectUrl="/projects/property"
          />
           <ProjectItem
            title="Crypto App"
            backgroundImg={project2}
            projectUrl="/projects/Crypto"
          />
           <ProjectItem
            title="Netflix App"
            backgroundImg={project3}
            projectUrl="/projects/netflix"
          />
           <ProjectItem
            title="Twitch App"
            backgroundImg={project4}
            projectUrl="/projects/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
