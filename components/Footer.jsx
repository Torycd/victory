import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black px-16 py-20 mt-40">
      <div className="max-w-[1200px] grid grid-cols-3">
        <div>
          <p className="font-bold text-2xl text-white">Victory.Dev</p>
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/victory-idundun-388636247/"
            target="_blank"
            className="cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaLinkedinIn className="text-white" size={35} />
          </a>
          <a
            href="https://github.com/Torycd"
            target="_blank"
            className="cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaGithub className="text-white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
