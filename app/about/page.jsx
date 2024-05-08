"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="flex flex-col 2xl:px-16  mx-auto justify-center pt-32 items-center px-2">
      <div className="m-auto ">
        <div className="grid md:grid-cols-3 text-wrap">
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Initial position and opacity (coming in from the left)
            animate={{ x: 0, opacity: 1 }} // Final position and opacity (center of the screen)
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white py-4">Frontend Developer</h2>
            <p className="py-2  text-gray-400">
              I specialize in mobile UI development, proficient in HTML, CSS,
              JavaScript, and React. With e-commerce management experience since
              2013, I excel in client collaboration, transforming wireframes
              into deployed apps. In my spare time, I share expertise through
              Code Commerce, a YouTube channel on web development.
            </p>
            <p className="py-2 text-gray-100 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }} // Initial position and opacity (coming in from the left)
            animate={{ x: 0, opacity: 1 }} // Final position and opacity (center of the screen)
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white py-4">Data Analytics</h2>
            <p className="py-2  text-gray-400">
              I possess strong data analysis skills, utilizing Excel and Python
              libraries like pandas, matplotlib, and scikit-learn. With a knack
              for spotting patterns, I excel in turning raw data into actionable
              insights, driving informed decisions. Whether cleaning datasets or
              building models, I ensure accuracy and efficiency in every
              analysis.
            </p>
            <p className="py-2 text-gray-100 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }} // Initial position and opacity (coming in from the left)
            animate={{ x: 0, opacity: 1 }} // Final position and opacity (center of the screen)
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white py-4">Researcher</h2>
            <p className="py-2  text-gray-400">
              I specialize in mobile UI development, proficient in HTML, CSS,
              JavaScript, and React. With e-commerce management experience since
              2013, I excel in client collaboration, transforming wireframes
              into deployed apps. In my spare time, I share expertise through
              Code Commerce, a YouTube channel on web development.
            </p>
            <p className="py-2 text-gray-100 underline cursor-pointer">
              Check out some of my latest Journal.
            </p>
          </motion.div>
        </div>

        <div className="mt-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl tracking-widest uppercase text-white"
          >
            What I Can Do
          </motion.p>
          <h2 className="py-4"></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2  gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/html.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/css.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/javascript.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/react.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TailWind</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/tailwind.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/github1.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/firebase.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale:1.05}}
              className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skill/shopify.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Shopify</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
