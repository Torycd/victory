"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navChange, setNavChange] = useState(false);
  const handleNavigation = () => {
    setNav(!nav);
  };

  const pathname = usePathname();
  useEffect(() => {
    if (
      pathname === "/netflix" ||
      pathname === "/ipaddress" ||
      pathname === "/shortly" ||
      pathname === "/space" ||
      pathname === "/dashboard"
    ) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  }, [pathname]);

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
          ? "fixed w-full h-20 sm:h-28 shadow-xl z-[100]"
          : "fixed w-full h-20  sm:h-28 z-[100] "
      }
    >
      <motion.div
        className={`flex justify-between   4 ${
          navChange
            ? "text-white"
            : "bg-gradient-to-r from-purple-200 to-purple-500"
        }  items-center px-2 mx-auto h-full text-black font-bold 2xl:px-16`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Link href="/">
            <p className="font-bold text-2xl">Victory.Dev</p>
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
        <ul
          className={`hidden ${
            navChange ? "text-white" : "text-black/50"
          }   md:flex items-center space-x-10 py-4 font-bold`}
        >
          <Link href="/">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:text-black ${
                pathname === "/" ? "border-b-2  border-black text-black" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.li>
          </Link>
          <Link href="/#about">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:border-black ${
                pathname === "/#about"
                  ? "border-b-2 border-black text-black"
                  : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.li>
          </Link>

          <Link href="/#projects">
            <motion.li
              className={`text-sm uppercase hover:border-b-2 hover:border-black  ${
                pathname === "/#projects"
                  ? "border-b-2 border-black text-black"
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
                pathname === "/#contact"
                  ? "border-b-2 border-black text-black"
                  : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Contacts
            </motion.li>
          </Link>
        </ul>
        <div onClick={handleNavigation} className="md:hidden">
          <HiOutlineMenuAlt3
            className={navChange ? "text-white" : "text-black"}
            size={30}
          />
        </div>
      </motion.div>
      {/* mobile Navigation */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white/95 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in h-screen  duration-500"
          }
        >
          {/* nav top */}
          <div className="flex w-full items-center justify-between">
            {/* logo */}
            <div>
              <p className="font-bold text-2xl text-black">Victory.Dev</p>
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
              Let&apos;s create together
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
              <p className="uppercase tracking-widest text-purple-500">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[20%]">
                <a
                  href="https://www.linkedin.com/in/victory-idundun-388636247/"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn className="text-[#0077B5]" />
                </a>
                <a
                  href="https://github.com/Torycd"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/VIdundun"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter className="text-[#1DA1F2]" />
                </a>
                <a
                  href="https://wa.me/+234702597846"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaWhatsapp className="text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
