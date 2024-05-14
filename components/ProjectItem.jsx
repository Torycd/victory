import React from "react";
import Image from "next/image";
import Link from "next/link";
import netflix from "../public/assets/project/project0.JPG";
import ipaddress from "../public/assets/project/project1.JPG";
import shortly from "../public/assets/project/project2.JPG";
import dashBoard from "../public/assets/project/project5.JPG";
import space from "../public/assets/project/project4.JPG";
import { FaCode } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const ProjectItem = () => {
  return (
    <>
      {/* project1 netflix*/}
      <div className="grid md:grid-cols-2 gap-5">
        {/* image */}
        <div className="relative col-span-1 group hover:bg-gradient-to-r from-red-100 to-red-300">
          <Image
            src={netflix}
            className="rounded-lg group-hover:opacity-10 "
            alt="Netflix project"
          />
          <div className="hidden group-hover:block rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              netflix
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href="/netflix">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
        {/* Details of Projects */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-red-500">Netflix</h2>
          <p>
            This Netflix replica project incorporates user authentication
            features. It leverages Firestore to securely store user data and the
            movies selected by users, while Firebase handles the authentication
            process.
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
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://netflix-rho-gold.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* shortly */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1 space-y-6 order-2 md:order-1">
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
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://shortlyapi-smoky.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
        <div className="relative col-span-1 order-1 md:order-2 group hover:bg-gradient-to-r from-cyan-200 to-cyan-400">
          <Image
            src={shortly}
            className="rounded-lg group-hover:opacity-10"
            alt="Shortly"
          />
          <div className="hidden group-hover:block absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              shortly
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href="/shortly">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ip address */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* image */}
        <div className="relative col-span-1 group hover:bg-gradient-to-r from-blue-100 to-blue-300">
          <Image
            src={ipaddress}
            className="rounded-lg group-hover:opacity-10"
            alt="Ip Address finderss"
          />
          <div className="hidden group-hover:block absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Ip Address
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href="/ipaddress">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
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
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://ipaddress-eta.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Space Tourism APP */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1 space-y-6 order-2 md:order-1">
          <h2>Space Tourism App</h2>
          <p>
            The Space Tourism App serves as a practical demonstration of routing
            within a React application, featuring numerous paths a multi-page
            website showcasing various space views and planetary bodies.
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
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://spacetravel-six.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <MdOpenInNew size={35} />
              <span>Demo</span>
            </a>
          </div>
        </div>
        <div className="relative col-span-1 order-1 md:order-2 group hover:bg-gradient-to-r from-black/10 to-black/40">
          <Image
            src={space}
            className="rounded-lg group-hover:opacity-10"
            alt="Ip Address finderss"
          />
          <div className="hidden group-hover:block absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Space Tourism
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href="/space">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* image */}
        <div className="relative rounded-lg col-span-1 group hover:bg-gradient-to-r from-orange-200 to-orange-500">
          <Image
            src={dashBoard}
            className="rounded-lg group-hover:opacity-10"
            alt="dashBoard App"
          />
          <div className="hidden group-hover:block absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Space Tourism
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href="/dashboard">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
        {/* Details of Projects */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-orange-500">DashBoard App</h2>
          <p>
            This App is a dsadhboard with good UI to show the spending, budget
            and savings of the user.
          </p>
          <div className="flex justify-around">
            <p>ReactJs</p>
            <p>Vite</p>
          </div>
          <div className="font-bold flex justify-around">
            <a
              href="https://github.com/Torycd/dashhh"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
            >
              <FaCode size={35} />
              <span>Code</span>
            </a>
            <a
              href="https://dashhh-eosin.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 border-2 p-2 rounded-lg border-black"
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
