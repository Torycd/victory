import React from "react";
import ProjectItem from "./ProjectItem";


const Projects = () => {
  return (
    <div className="w-full mt-40">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <h2 className="text-blue-700">Porfolio</h2>
        <h2>Each project is a unique piece of developmentt</h2>
        <ProjectItem/>
      </div>
    </div>
  );
};

export default Projects;


