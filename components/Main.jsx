"use client";
import html from "../public/assets/skill/html.png"
import css from "../public/assets/skill/css.png"
import javascript from "../public/assets/skill/javascript.png"
import react from "../public/assets/skill/react.png"
import next from "../public/assets/skill/nextjs.png"
import tailwind from "../public/assets/skill/tailwind.png"
import firebase from "../public/assets/skill/firebase.png"
import github from "../public/assets/skill/github1.png"
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import myPhoto from "../public/assets/myPhoto.jpg";

const Main = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-gray-100 w-full h-full mx-auto p-2 flex items-center">
        <div className="max-w-[900px] mx-auto ">
          <div className="flex flex-col-reverse md:flex-row md:space-x-60">
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="py-2 text-black "
              >
                A FRONT-END REACT DEVELOPER
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-4 text-gray-400 text-left  max-w-[100%] m-auto"
              >
                I&apos;m a front-end web developer dedicated to crafting
                outstanding digital experiences. <br /> While I have a knack for
                design, my primary <br />
                focus lies in building responsive front-end web applications.
              </motion.p>
              <div className="flex items-center gap-4 my-4">
                <a
                  href="https://www.linkedin.com/in/victory-idundun-388636247/"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn className="text-black" size={35} />
                </a>
                <a
                  href="https://github.com/Torycd"
                  target="_blank"
                  className="cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub className="text-black" size={35} />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-2 shadow-xl"><Image
                src={myPhoto}
                className=" rounded-lg object-cover"
                alt="My photograph"
              /></div>
              
            </div>
          </div>
          <div className="flex py-5 gap-5">
            <p className="text-black font-bold flex self-center">Tech Stack: </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5">
              <Image width={35} height={35} src={html} alt="" />
              <Image width={35} height={35} src={css} alt="" />
              <Image width={35} height={35} src={tailwind} alt="" />
              <Image width={35} height={35} src={github} alt="" />
              <Image width={35} height={35} src={javascript} alt="" />
              <Image width={35} height={35} src={react} alt="" />
              <Image width={35} height={35} src={next} alt="" />
              <Image width={35} height={35} src={firebase} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
