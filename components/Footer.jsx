import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black px-2 py-10 mt-40">
      <div className="space-y-4 md:space-y-0 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="flex items-center mx-auto">
          <p className="font-bold msd:text-2xl text-white">Victory.Dev</p>
        </div>
        <ul className="flex flex-col items-center justify-center mx-auto font-bold md:flex-row gap-5 text-white">
          <li className="hover:text-white/80">Home</li>
          <li className="hover:text-white/80">About</li>
          <li className="hover:text-white/80">Portfolio</li>
        </ul>
        <div className="flex items-center justify-around gap-5">
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
          <a
            href="https://twitter.com/VIdundun"
            target="_blank"
            className="cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaTwitter className="text-white" size={35} />
          </a>
          <a
            href="https://wa.me/+234702597846"
            target="_blank"
            className="cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaWhatsapp className="text-white" size={35} />
          </a>
          <Link href="/Research" className="hidden md:block p-2 border-white border-2 font-bold text-white">
            Researcher
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link href="/">
            <div className="rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-black" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
