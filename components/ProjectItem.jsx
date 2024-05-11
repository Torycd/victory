import React from "react";
import Image from "next/image";
import netflix from "../public/assets/project/project0.JPG";
import ipaddress from "../public/assets/project/project1.JPG";
import shortly from "../public/assets/project/project2.JPG";
import loopstudio from "../public/assets/project/project3.JPG";
import space from "../public/assets/project/project4.JPG";
import { FaCode } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const ProjectItem = () => {
  return (
    <>
      {/* project1 netflix*/}
      <div className="grid md:grid-cols-2 gap-5">
        {/* image */}
        <div className="col-span-1">
          <Image src={netflix} className="rounded-lg" alt="Netflix project" />
        </div>
        {/* Details of Projects */}
        <div className="col-span-1 space-y-6">
          <h2>Netflix</h2>
          <p>
            This is a netflix replica project using user authentiation with
            login and signup using email and passowrd, using firestore to store
            users data and movie selected by the user and firebase for the login
            authentication. using tailwind for all styling
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>The MovieDB API</p>
            <p>firebase</p>
          </div>
          <div className="font-bold flex justify-around">
            <a href="https://github.com/Torycd/netflix" target="_blank" className="flex items-center gap-2">
              <FaCode />
              <span>Code</span>
            </a>
            <a href="https://netflix-rho-gold.vercel.app/" target="_blank" className="flex items-center gap-2">
              <MdOpenInNew />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* shortly */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <h2>Shorten Link App</h2>
          <p>This is an App that helps shorten any long link</p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>API</p>
          </div>
          <div className="font-bold flex justify-around">
            <a href="https://github.com/Torycd/shortlyapi" target="_blank" className="flex items-center gap-2">
              <FaCode />
              <span>Code</span>
            </a>
            <a href="https://shortlyapi-smoky.vercel.app/" target="_blank" className="flex items-center gap-2">
              <MdOpenInNew />
              <span>Demo</span>
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={shortly} className="rounded-lg" alt="Shortly" />
        </div>
      </div>

      {/* ip address */}
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
          <h2>Ip Address App</h2>
          <p>
            This is a netflix replica project using user authentiation with
            login and signup using email and passowrd
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>The MovieDB API</p>
            <p>firebase</p>
          </div>
          <div className="font-bold flex justify-around">
            <a href="https://github.com/Torycd/ipaddress" target="_blank" className="flex items-center gap-2">
              <FaCode />
              <span>Code</span>
            </a>
            <a href="https://ipaddress-eta.vercel.app/" target="_blank" className="flex items-center gap-2">
              <MdOpenInNew />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Space Tourism APP */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <h2>Space Tourism App</h2>
          <p>
            space tourism
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>Tailwind</p>
            <p>JSON</p>
          </div>
          <div className="font-bold flex justify-around">
            <a href="https://github.com/Torycd/spacetravel" target="_blank" className="flex items-center gap-2">
              <FaCode />
              <span>Code</span>
            </a>
            <a href="https://spacetravel-six.vercel.app/" target="_blank" className="flex items-center gap-2">
              <MdOpenInNew />
              <span>Demo</span>
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={space} className="rounded-lg" alt="Ip Address finderss" />
        </div>
      </div>

      {/* Loop studio */}
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
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>The MovieDB API</p>
            <p>firebase</p>
          </div>
          <div className="font-bold flex justify-around">
            <a href="https://github.com/Torycd/loopstudio" target="" className="flex items-center gap-2">
              <FaCode />
              <span>Code</span>
            </a>
            <a href="https://loopstudio-nine-plum.vercel.app/" target="" className="flex items-center gap-2">
              <MdOpenInNew />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
