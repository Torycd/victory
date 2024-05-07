import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-gray-300 bg-gradient-to-b from-white via-gray-300 to-white">
      <div className="max-w-[1440px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 ">
            Hi, I&apos;m <span className="text-[#5651e5]">Victory</span>
          </h1>
          <h1 className="py-2 text-gray-700 ">A FRONTEND DEVELOPER</h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            I&apos;m a front-end web developer dedicated to crafting outstanding
            digital experiences. While I have a knack for design, my primary
            focus lies in building responsive front-end web applications.
            Currently, I&apos;m diving deep into Next.js, honing my skills in
            essential API integration for seamless user interactions. Alongside,
            I&apos;m also delving into the world of back-end technologies,
            enriching my toolkit with the power of shell scripting and Linux
            proficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
