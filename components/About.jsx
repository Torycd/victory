import Image from "next/image";
import React from "react";
import contact from "../public/assets/contact.jpg";

const About = () => {
  return (
    <div id="about" className="w-full px-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative col-span-1 group hover:bg-gradient-to-r from-orange-200 to-orange-500">
            <Image
              src={contact}
              className="rounded-lg group-hover:opacity-10"
              alt="Laptop Image"
            />
            <div className="hidden group-hover:block absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Lets Work together
            </h3>
            <a href="../public/assets/Comprehensive CV.pdf" className="underline" download>My Resume</a>
            <a href="mailto:vicidundun@gmail.com" target="_blank">
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                Email Me now
              </p>
            </a>
          </div>
          </div>
          <div className="col-span-1 space-y-2">
            <h2 className="text-blue-600">ABOUT ME</h2>
            <h3>A dedidcated Frontend developer based in Nigeria</h3>
            <p>
              As a frontend developer, I don&apos;t just write code; I craft
              digital experiences that captivate and inspire. With a keen eye
              for design and a passion for pixel-perfect precision, I bring
              websites and applications to life with elegance and efficiency.
              But my skills don&apos;t stop at the surface level – I dive deep
              into data analysis, unraveling complex problems and turning
              insights into actionable solutions. A curious researcher at heart,
              I thrive on exploring new technologies and pushing the boundaries
              of what&apos;s possible. Behind the screen, you&apos;ll find a
              dedicated hard worker, fueled by curiosity and driven by a
              relentless pursuit of excellence. Let&apos;s collaborate to build
              something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
