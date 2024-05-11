import Image from "next/image";
import React from "react";
import netflix from "../public/assets/project/project0.JPG";
import ipaddress from "../public/assets/project/project1.JPG";
import shortly from "../public/assets/project/project2.JPG";
import loopstudio from "../public/assets/project/project3.JPG";
import space from "../public/assets/project/project4.JPG";

const Projects = () => {
  return (
    <div className="w-full mt-40">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <h2 className="text-blue-700">Porfolio</h2>
        <h2>Each project is a unique piece of developmentt</h2>
        {/* project1 */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* image */}
          <div className="col-span-1">
            <Image src={netflix} className="rounded-lg" alt="Netflix project" />
          </div>
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2>Netflix</h2>
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
        <div className="grid md:grid-cols-2 gap-5">
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2>Shorten Link App</h2>
            <p>
              This is an App that helps shorten any long link
            </p>
            <div>
              <p>ReactJs</p>
              <p>API</p>
            </div>
            {/* image */}
          </div>
          <div className="col-span-1">
            <Image src={shortly} className="rounded-lg" alt="Shortly" />
          </div>
        </div>
        {/* project 2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* image */}
          <div className="col-span-1">
            <Image
              src={ipaddress}
              className="rounded-lg"
              alt="Ip Address finderss"
            />
          </div>
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2></h2>
            <p>
              This is a netflix replica project using user authentiation with
              login and signup using email and passowrd
            </p>
            <div>
              <p>ReactJs</p>
              <p>API</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2>Space App</h2>
            <p>
              This is a netflix replica project using user authentiation with
              login and signup using email and passowrd
            </p>
            <div>
              <p>ReactJs</p>
              <p>API</p>
            </div>
          </div>
          {/* image */}
          <div className="col-span-1">
            <Image
              src={space}
              className="rounded-lg"
              alt="Ip Address finderss"
            />
          </div>
        </div>
        {/* project  */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* image */}
          <div className="col-span-1">
            <Image
              src={loopstudio}
              className="rounded-lg"
              alt="Ip Address finderss"
            />
          </div>
          {/* Details of Projects */}
          <div className="col-span-1">
            <h2>Loop studio</h2>
            <p>
              This is a netflix replica project using user authentiation with
              login and signup using email and passowrd
            </p>
            <div>
              <p>ReactJs</p>
              <p>API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;