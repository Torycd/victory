import Image from "next/image";
import React from "react";
import contact from "../public/assets/contact.jpg"

const About = () => {
  return (
    <div id="about" className="w-full px-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="col-span-1">
            <Image src={contact} className="rounded-lg" alt="Laptop Image" />
            <div>Overlay</div>
          </div>
          <div className="col-span-1 space-y-2">
            <h2 className="text-blue-600">ABOUT ME</h2>
            <h2>A dedidcated Frontend developer based in Nigeria</h2>
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
