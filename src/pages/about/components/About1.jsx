import React from "react";

const About1 = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] ">
        <img
          src="https://carboncircle.in/img/banner2.5442724a.png"
          alt="Banner"
          className="object-cover w-full h-[600px]"
        />

        <div className="absolute inset-0  flex items-center justify-center p-4">
          <div className="lg:px-20 md:px-20 px-5 mt-0">
            <h2 className="text-white text-5xl font-semibold">
              Creating a Greener Tomorrow
            </h2>
            <p className="text-white mt-5">
              Carbon Circle’s vision is to build businesses around the carbon
              cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
