import React from "react";
import Image from "next/image";
import project1 from "../../public/assets/project/project1.jpg";
import project2 from "../../public/assets/project/project2.jpg";
import project3 from "../../public/assets/project/project3.jpg";
import project4 from "../../public/assets/project/project4.jpg";

import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full 2xl:px-16 pt-32 px-2">
      <div className="mx-auto px-2 mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <Image className="rounded-lg" src={project1} alt="ip address" />
            <div className="hidden group-hover:flex justify-between items-center absolute rounded-lg top-0 left-0 w-full h-full bg-blue-200 opacity-75">
              <Link href="/projects/ipaddress" className="mx-auto bg-black text-white p-4 rounded-lg">
                <p>more Info</p>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Image className="rounded-lg" src={project2} alt="shortly" />
            <div className="hidden group-hover:flex justify-between items-center absolute rounded-lg top-0 left-0 w-full h-full bg-blue-200 opacity-75">
              <Link
                href="/projects/shortly"
                className="mx-auto bg-black text-white p-4 rounded-lg"
              >
                <p>more Info</p>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Image className="rounded-lg" src={project3} alt="studio" />
            <div className="hidden group-hover:flex justify-between items-center absolute rounded-lg top-0 left-0 w-full h-full bg-blue-200 opacity-75">
              <Link
                href="/projects/studio"
                className="mx-auto bg-black text-white p-4 rounded-lg"
              >
                <p>more Info</p>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Image className="rounded-lg" src={project4} alt="studio" />
            <div className="hidden group-hover:flex justify-between items-center absolute rounded-lg top-0 left-0 w-full h-full bg-blue-200 opacity-75">
              <Link
                href="/projects/space"
                className="mx-auto bg-black text-white p-4 rounded-lg"
              >
                <p>more Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
