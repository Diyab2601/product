import React from "react";

const Whatwedo2 = () => {
  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="lg:flex md:flex justify-center items-center gap-12 ">
        <div className=" container mx-auto lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Agribusiness Waste</h2>
          <p className=" text-gray-800 mb-4">
          Various kinds of waste materials are generated during harvest, post-harvest and processing of agricultural goods. Managing these wastes consumes resources and if not managed properly, causes damage to the environment, eg. stubble burning, or decay of unattended organic waste which leads to production of methane and carbon dioxide, both potent green house gases. We collect this waste at our cost, and even pay for this waste.
          </p>
          
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-8">
          <img
            className="height w-full "
            src="https://carboncircle.in/img/waste%20agri.244e965b.jpg"
            alt="Agribusiness Waste"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo2;
