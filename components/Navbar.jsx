"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNavigation = () => {
    setNav(!nav);
  };
  const router = useRouter();

  const path = usePathname();
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20  sm:h-28 shadow-xl z-100"
          : "fixed w-full h-20 sm:h-28 z-100 "
      }
    >
      <motion.div
        className="flex justify-between items-center px-2 mx-auto h-full text-black font-bold 2xl:px-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Link href="/">
            <p className="font-bold text-2xl text-black">Victory.Dev</p>
          </Link>
        </div>
        <div className="hidden items-center justify-between gap-4 my-4">
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
        <ul className="hidden text-black md:flex items-center space-x-10 py-4 font-bold">
          <Link href="/">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:text-black ${
                path === "/" ? "border-b-2  border-black text-black/50" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.li>
          </Link>
          <Link href="/#about">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:border-black ${
                path === "/about" ? "border-b-2 border-black text-black/50" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.li>
          </Link>

          <Link href="/#projects">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:border-black  ${
                path === "/projects" ||
                path === "/projects/ipaddress" ||
                path === "/projects/shortly" ||
                path === "/projects/studio" ||
                path === "/projects/space"
                  ? "border-b-2 border-black text-black/50"
                  : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.li>
          </Link>
          <Link href="/#contact">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:border-black  ${
                path === "/contact" ? "border-b-2 border-black text-black/50" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Contacts
            </motion.li>
          </Link>
        </ul>
        <div onClick={handleNavigation} className="md:hidden">
          <AiOutlineMenu className="text-black" size={30} />
        </div>
      </motion.div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in h-screen  duration-500"
          }
        >
          {/* nav top */}
          <div className="flex w-full items-center justify-between">
            {/* logo */}
            <div className="w-16 h-12 relative">
              <Link href="/">
                <Image
                  src="/assets/Logo.png"
                  alt="Victory's Image"
                  layout="fill"
                />
              </Link>
            </div>
            {/* close home */}
            <div
              onClick={handleNavigation}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          {/* statement */}
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let&apos;s build something together
            </p>
          </div>
          {/* nav item */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-bold">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>

              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contacts">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contacts
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[20%]">
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
      </div>
    </div>
  );
};

export default Navbar;
