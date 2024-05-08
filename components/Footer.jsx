import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black">

        <div className="flex justify-between items-center max-w-[1440px] px-2 mx-auto h-full text-black 2xl:px-16">
          {/* logo */}
          <div className="w-16 h-12 md:w-32 md:h-16 relative">
            <Link href="/">
              <Image
                src="/assets/Logo.png"
                alt="Victory's Image"
                layout="fill"
              />
            </Link>
          </div>
          {/* Other content */}

          {/* icons ontop */}
          <div className="hidden md:flex items-center justify-between gap-4 my-4">
            <a
              href="https://www.linkedin.com/in/victory-idundun-388636247/"
              target="_blank"
              className="rounded-full bg-white hover:bg-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaLinkedinIn className="text-black" />
            </a>
            <a
              href="https://github.com/Torycd"
              target="_blank"
              className="rounded-full bg-white hover:bg-gray-200  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaGithub className="text-black" />
            </a>
            <a
              href="mailto:vicidundun@gmail.com"
              target="_blank"
              className="rounded-full bg-white hover:bg-gray-200  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <AiOutlineMail className="text-black" />
            </a>
            <div className="rounded-full bg-white hover:bg-gray-200  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill className="text-black" />
            </div>
          </div>
        </div>
 
    </div>
  );
};

export default Footer;
