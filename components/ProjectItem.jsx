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
          <h2 className="text-red-500">Netflix</h2>
          <p>
            This Netflix replica project incorporates user authentication
            features, including login and signup functionality via email and
            password. It leverages Firestore to securely store user data and the
            movies selected by users, while Firebase handles the authentication
            process. The project&apos;s user interface is styled comprehensively
            using Tailwind CSS.
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>The MovieDB API</p>
            <p>firebase</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/netflix"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://netflix-rho-gold.vercel.app/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* shortly */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1 space-y-6">
          <h2 className="text-cyan-400">Shorten Link App</h2>
          <p>
            This is an App that helps shorten any long link, with the use os
            tinyUrl API also where the new link i stsored in locat storage so as
            not to lose that new link generated. the use of tailwind for the UI
            of this project
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>API</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/shortlyapi"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://shortlyapi-smoky.vercel.app/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MdOpenInNew size={35} />
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
        <div className="col-span-1 space-y-6">
          <h2 className="text-blue-500">Ip Address App</h2>
          <p>
            The IP Address App utilizes geolocation API and mapping technology
            to seamlessly position users at their current location on the map.
            Additionally, the application accepts input IP addresses and
            displays their corresponding locations on the map interface.
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>API</p>
            <p>Map</p>
            <p>geolocation</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/ipaddress"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://ipaddress-eta.vercel.app/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Space Tourism APP */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1 space-y-6">
          <h2>Space Tourism App</h2>
          <p>
            The Space Tourism App serves as a practical demonstration of routing
            within a React application, featuring numerous paths. The primary
            objective of this project is to develop a multi-page website
            showcasing various space views and planetary bodies.
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>Tailwind</p>
            <p>JSON</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/spacetravel"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://spacetravel-six.vercel.app/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MdOpenInNew size={35} />
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
        <div className="col-span-1 space-y-6">
          <h2 className="text-purple-700">Loop studio</h2>
          <p>
            This App Aims at the use of flex and grid, it is a site for difrrent
            activity
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>The MovieDB API</p>
            <p>firebase</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/loopstudio"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://loopstudio-nine-plum.vercel.app/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
