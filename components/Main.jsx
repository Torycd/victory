"use client";

import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="bg-black w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-4 text-gray-700 "
          >
            Hi, I&apos;m{" "}
            <motion.span
              whileHover={{ scale: 1.2, color: "#FFD700", rotate: 360 }} // Scale up, change color, and rotate on hover
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              Victory
            </motion.span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-2 text-gray-700 "
          >
            A FRONTEND DEVELOPER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-4 text-gray-400 max-w-[70%] m-auto"
          >
            I&apos;m a front-end web developer dedicated to crafting outstanding
            digital experiences. While I have a knack for design, my primary
            focus lies in building responsive front-end web applications.
            Currently, I&apos;m diving deep into Next.js, honing my skills in
            essential API integration for seamless user interactions. Alongside,
            I&apos;m also delving into the world of back-end technologies,
            enriching my toolkit with the power of shell scripting and Linux
            proficiency.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Main;
