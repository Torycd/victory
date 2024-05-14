"use client";
import html from "../public/assets/skill/html.png";
import css from "../public/assets/skill/css.png";
import javascript from "../public/assets/skill/javascript.png";
import react from "../public/assets/skill/react.png";
import next from "../public/assets/skill/nextjs.png";
import tailwind from "../public/assets/skill/tailwind.png";
import firebase from "../public/assets/skill/firebase.png";
import github from "../public/assets/skill/github1.png";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import myPhoto from "../public/assets/myPhoto.jpg";

const Main = () => {
  return (
    <div className="w-full h-screen px-2">
      <div className="w-full h-full mx-auto p-2 flex items-center">
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex flex-col-reverse md:h-[500px] md:flex-row md:space-x-40">
            <div className="flex flex-col justify-center gap-0 md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="py-2 text-black text-center sm:text-left"
              >
                A FRONT-END REACT DEVELOPER
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-4 text-gray-400 text-center sm:text-left"
              >
                Hi, I&apos;m Victory Idundun. A passionate frontend developer
                based in Nigeria
              </motion.p>
              <div className="flex justify-center sm:justify-normal items-center gap-4 my-4">
                <a
                  href="https://www.linkedin.com/in/victory-idundun-388636247/"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn className="text-[#0077B5]" size={35} />
                </a>
                <a
                  href="https://github.com/Torycd"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub className="text-black" size={35} />
                </a>
                <a
                  href="https://twitter.com/VIdundun"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter className="text-[#1DA1F2]" size={35} />
                </a>
                <a
                  href="https://wa.me/+234702597846"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaWhatsapp className="text-[#25D366]" size={35} />
                </a>
              </div>
              <div className="mt-5 flex justify-center md:justify-normal">
                <a
                  href="/assets/Comprehensive%20CV.pdf"
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-purple-200 to-purple-500 text-white font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center ">
              <div className="p-2 shadow-xl">
                <Image
                  src={myPhoto}
                  height={430}
                  className=" rounded-lg object-cover"
                  alt="My photograph"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-normal py-5 gap-5">
            <div className="flex space-x-4 text-black font-bold  self-center">
              <p>Tech Stack</p>
              <span className="hidden md:block">|</span>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-5 md:gap-10">
              <Image width={35} height={35} src={html} alt="html logo" />
              <Image width={35} height={35} src={css} alt="css logo" />
              <Image width={35} height={35} src={tailwind} alt="tailwind logo" />
              <Image width={35} height={35} src={github} alt="github logo" />
              <Image width={35} height={35} src={javascript} alt="javascript logo" />
              <Image width={35} height={35} src={react} alt="react logo" />
              <Image width={35} height={35} src={next} alt="next logo" />
              <Image width={35} height={35} src={firebase} alt="firebase logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
