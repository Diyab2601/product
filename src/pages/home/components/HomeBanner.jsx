import React from 'react';

const HomeBanner = () => {
    return (
        <div className="relative w-full h-[600px]">

            <img
                src="https://carboncircle.in/img/banner4.e6e56c04.png"
                alt="Banner"
                className="object-cover w-full h-[600px]"
            />


            <div className="absolute inset-0  flex items-center justify-start p-4">
                <div className='lg:px-20 md:px-20 px-5    lg:w-1/2 md:w-1/2 w-full mt-0'  >
                    <h2 className="text-white text-5xl font-semibold">
                        Carbon Circle</h2>
                    <h2 className="text-white text-4xl font-semibold mt-3">the clean fuel & fertiliser company</h2>
                    <p className='text-white mt-5'>We build, own and operate Anaerobic Digestion plants which recycle carbon in biomass to produce Renewable Natural Gas and Organic Fertiliser.</p>
                </div>

            </div>
        </div>
    );
}

export default HomeBanner;
