import React from "react";
import ProjectItem from "@/components/ProjectItem";
import project1 from "@/public/assets/project/project1.jpg"
import project2 from "@/public/assets/project/project2.jpg"
import project3 from "@/public/assets/project/project3.jpg"
import project4 from "@/public/assets/project/project4.jpg"

const Projects = () => {
  return (
    <div className="w-full 2xl:px-16 pt-32 px-2">
      <div className="mx-auto px-2 mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ip Address Finder"
            backgroundImg={project1}
            projectUrl="/projects/ipaddress"
          />
           <ProjectItem
            title="Shortly"
            backgroundImg={project2}
            projectUrl="/projects/shortly"
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
