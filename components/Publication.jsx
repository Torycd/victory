import React from "react";

const Publication = () => {
  return (
    <div className="w-full">
      <div className="md:mx-16 space-y-5">
        <h2 className="text-red-500">Publication</h2>
        <div className=" bg-gray-100 p-4">
          <h2>
            The Performance Analysis of a Quantum-Mechanical Carnot-like Engine
            using Diatomic Molecules
          </h2>
          <p>
            <span className="font-bold">Abstract</span>
            This study presents an analysis of a quantum mechanical formulation
            of the Carnot like cycle using diatomic molecules, i.e., the Morse
            oscillator, as the working substance. The generalized model with an
            arbitrary one dimensional potential is used to obtain the important
            performance parameters such as the efficiency, the power output, and
            the optimal region of the engine by considering well width L moving
            with a finite speed. The optimal efficiency, the maximum power
            output, and dimensionless power ranges of the working substance was
            also determined. The results obtained in this work are found to
            agree with those obtained for similar engine but with different
            working substance.
          </p>
          <a href="https://inspirehep.net/literature/2657365" >Reference</a>
        </div>

      </div>
    </div>
  );
};

export default Publication;
