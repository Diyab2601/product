import React from 'react';

const Ourprocess = () => {
    return (
        <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
            <div className="lg:flex md:flex justify-center items-center gap-12 ">


                <div className=" container mx-auto lg:w-1/2 md:w-1/2 w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h2>
                    <p className=" text-gray-800 mb-4">
                        Carbon Circle develops, owns and operates renewable natural gas and organic fertilizer projects across India. We are a team of seasoned professionals from the energy, infrastructure, waste and agribusiness sectors.
                    </p>
                    <p className=" text-gray-800 mb-4">
                        Anaerobic digestion takes place when biodegradable material is broken down by micro-organisms in the absence of oxygen. Our plants convert a wide range of feedstocks into biogas and organic fertiliser through the process of anaerobic digestion.
                    </p>
                    <button className="mt-6 w-40 px-6 py-3 bg-lime-600 text-white ">
                        Explore
                    </button>
                </div>


                <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-8">
                    <img
                        className="height w-full "
                        src="https://carboncircle.in/img/ourprocess.e87feb3f.png"
                        alt="Our Process"
                    />
                </div>
            </div>
        </div>
    );
};

export default Ourprocess;
