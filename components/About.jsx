import React from "react";
import image from "../public/assets/myPhoto.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1440px] flex flex-col mx-auto justify-center  md:h-screen items-center px-2 pt-16 pb-0"
    >
      <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
      <h2 className="py-4">Who I Am</h2>
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 gap-8">
        <div className="col-span-1 md:text-right">
          <h2 className="py-4">Frontend</h2>
          <p className="py-2  text-gray-600">
            I specialize in building mobile-responsive front-end UI applications
            that seamlessly connect with APIs and diverse backend technologies.
            Passionate about continuous learning, I thrive on mastering new
            technologies, recognizing the versatility in problem-solving
            approaches. Proficient in HTML, CSS, JavaScript, and React, I adapt
            swiftly to new tech stacks, prioritizing effectiveness over language
            preference. With a background starting in 2013 managing e-commerce
            sites on CMS platforms like WordPress, BigCommerce, and Shopify, I
            excel in client collaboration, transforming mock wireframes into
            deployed applications. In my spare time, I share my expertise
            through Code Commerce, a YouTube channel dedicated to teaching web
            development and various front-end technologies.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <Image src={image} className="rounded-xl" alt="/" />
        </div>
        <div className="col-span-1 text-left">
          <h2 className="py-4">Data Analytics</h2>
          <p className="py-2  text-gray-600">
            I possess a strong proficiency in data analysis, leveraging my
            expertise in Excel alongside advanced Python libraries such as
            pandas for data manipulation, matplotlib for data visualization, and
            scikit-learn for machine learning tasks. With a keen eye for
            patterns and trends, I excel in transforming raw data into
            actionable insights, driving informed decision-making processes.
            Whether it&apos;s cleaning and organizing datasets or building
            predictive models, I thrive in extracting meaningful information
            from complex data sets, ensuring accuracy and efficiency in every
            analysis.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
