import React from "react";
// import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center space-y-10 items-center px-16">
      <div className="w-full mx-auto flex flex-row gap-5">
        <div className="w-full">
          <img
            className="w-full opacity-80 rounded-lg h-[500px] object-cover"
            src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2019/04/032619_ec_quantum-engine_feat_free.jpg?fit=860%2C460&ssl=1"
            alt="alt"
          />
        </div>

        <div className="w-full space-y-5">
          <h2 className="text-black">Quantum Heat Engines</h2>
          <p>
            Quantum mechanics is a branch of physics that explores the
            properties and interactions of iparticles at very small scale, such
            as atoms and molecules. This has led to the development of new
            technologies that are more powerful and efficient compared to their
            conventional counterparts, causing breakthroughs in areas such as
            computing, communication, and energy.
            <a
              href="https://www.oist.jp/news-center/news/2023/9/28/powering-quantum-revolution-quantum-engines-horizon"
              target="_blank"
              className="py-1 px-2  font-bold bg-gray-300 rounded-md"
            >
              Reference
            </a>
          </p>
          <p>
            Quantum heat engines represent a frontier where the principles of
            quantum mechanics intersect with classical thermodynamics, offering
            novel insights and opportunities for energy conversion. These
            engines leverage quantum phenomena such as superposition and
            entanglement to extract work from quantum systems or convert quantum
            processes into useful work. While classical heat engines have long
            served as the cornerstone of energy conversion, quantum heat engines
            hold promise for revolutionizing various fields, including quantum
            computing and renewable energy technologies. However, realizing the
            full potential of quantum heat engines requires overcoming
            significant challenges, such as maintaining coherence in quantum
            systems and optimizing efficiency. As research progresses, quantum
            heat engines are poised to play a pivotal role in shaping the future
            of energy conversion and quantum technologies, offering
            unprecedented efficiency and capabilities beyond the reach of
            classical counterparts.
          </p>
        </div>
      </div>
      <div className="w-full">
        <h2>Publication</h2>
        <div className="bg-gray-100">
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
