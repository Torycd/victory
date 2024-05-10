import Image from "next/image";
import React from "react";
import netflix from "../public/assets/project/project0.JPG";

const Projects = () => {
  return (
    <div className="w-full mt-40">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-blue-700">Porfolio</h2>
        <h2>Each project is a unique piece of developmentt</h2>
        <div className="grid md:grid-cols-2">
          {/* image */}
          <div className="col-span-1">
            <Image src={netflix} alt="Netflix project" />
          </div>
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2>Netflix App</h2>
            <p>
              This is a netflix replica project using user authentiation with
              login and signup using email and passowrd
            </p>
            <div>
              <p>ReactJs</p>
              <p>The MovieDB API</p>
              <p>firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
