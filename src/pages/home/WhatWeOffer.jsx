import React from 'react';

const WhatWeOffer = () => {
    return (
        <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
            <h1 className="text-5xl font-bold mb-10 flex flex-start ">What we offer</h1>
            <div className="lg:flex md:flex mt-12 lg:gap-x-8">
                <div className="bg-white  lg:p-9 md:p-6 p-4 lg:w-1/2 md:w-1/2 w-full ">
                    <h2 className="text-xl font-bold mb-2">Renewable Natural Gas</h2>
                    <p className="text-gray-700 mb-4">
                        It is the upgraded version of biogas, and has the same methane content and calorific value as CNG. Biogas is produced from a variety of renewable sources, including animal waste (cow dung), crop residues (paddy straw) and food waste. Biogas typically consists of methane and carbon dioxide, with traces of other elements. Biogas is cleaned and conditioned to remove or reduce non-methane elements in order to produce Renewable Natural Gas.
                    </p>
                    <button className="bg-green-700 text-white mt-6 w-40 px-6 py-3">
                        Explore
                    </button>
                </div>

                <div className="bg-white shadow-md lg:p-9 md:p-6 p-4 lg:w-1/2 lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-10">
                    <h2 className="text-xl font-bold mb-2">Organic Manure</h2>
                    <p className="text-gray-700">
                        We process the residue of the Anaerobic Digestion process or digestate to produce FCO compliant organic manures of different kinds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
