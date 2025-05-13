import React from "react";

const Whatwed03 = () => {
  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="lg:flex md:flex  justify-center items-center gap-12">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <img
            className="w-full h-420px sm-h-300px object-cover lg:mt-0 md:mt-0 mt-10"
            src="https://carboncircle.in/img/What%20we%20do%20Page%20-%20Bio-Gas.95b6db49.png"
            alt="Biogas Image"
          />
        </div>

        <div className="text-lg text-gray- lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 lg:mt-0 md:mt-0 mt-10">
          Biogas
          </h2>
          <p className="">
          Our plants can process a variety of feedstocks such as press mud from the sugar manufacturing process, Napier grass, paddy straw, poultry litter, cow dung etc. Our expert farming team prides itself on building and nurturing good relationships with farmers, sugar mills, dairies, poultry farms, founded on trust and best practice, so that feedstocks of optimum quality are consistently available for our plants.
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default Whatwed03;
