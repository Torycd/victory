import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-gray-300 bg-gradient-to-b from-white via-gray-300 to-white">
      <div className="max-w-[1440px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 ">
            Hi, I&apos;m <span className="text-[#5651e5]">Victory</span>
          </h1>
          <h1 className="py-2 text-gray-700 ">A FRONTEND DEVELOPER</h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            I&apos;m a front-end web developer dedicated to crafting outstanding
            digital experiences. While I have a knack for design, my primary
            focus lies in building responsive front-end web applications.
            Currently, I&apos;m diving deep into Next.js, honing my skills in
            essential API integration for seamless user interactions. Alongside,
            I&apos;m also delving into the world of back-end technologies,
            enriching my toolkit with the power of shell scripting and Linux
            proficiency.
          </p>
          <div className="flex items-center justify-between max-w-[320px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/victory-idundun-388636247/"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Torycd"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:vicidundun@gmail.com"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <AiOutlineMail />
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
