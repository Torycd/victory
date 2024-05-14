import Image from "next/image";
import React from "react";
import image1 from "../../public/assets/project/project4.JPG";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={image1}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white">
          <h2 className="py-2">Space Tourism App</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <h2>Overview </h2>
          <p>
            The Space Tourism App serves as a practical demonstration of routing
            within a React application, featuring numerous paths a multi-page
            website showcasing various space views and planetary bodies.
          </p>
          <div>
            <a
              href="https://github.com/Torycd/shortlyapi"
              target="_blank"
              className="px-8 py-2 mt-4 mr-8 bg-cyan-500 rounded-lg"
            >
              DEMO
            </a>
            <a
              href="https://shortlyapi-smoky.vercel.app/"
              target="_blank"
              className="px-8 py-2 mt-4 bg-cyan-500 rounded-lg"
            >
              CODE
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tinyurl
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> localstorage
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects ">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
