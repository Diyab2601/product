import React from "react";

const Whatwedo1 = () => {
  return (
    <div className="">
      <div className="relative w-full h-[600px] ">
        <img
          src="https://carboncircle.in/img/aboutbanner.4b23674a.png"
          alt="image"
          className="object-cover w-full h-[600px]"
        />

        <div className="absolute inset-0  flex items-center justify-center p-4">
          <div className="lg:px-20 md:px-20 px-5 mt-0">
            <h2 className="text-white text-5xl font-semibold">
            We Recycle Carbon Converting
            </h2>
            <h2 className="text-white text-5xl font-semibold">
            agricultural waste into energy and fertiliser
            </h2>
            <p className="text-white mt-5">
            We are a green startup on a mission to minimize carbon emission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo1;
