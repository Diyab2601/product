import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png'

const Footer = () => {

  if (window.location.pathname === "/loginform") {
    return null;
  }
  return (

    <div className="flex flex-wrap justify-between bg-neutral-800 text-white px-5 md:px-12 py-10">


      <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

      <div className="w-full  lg:w-1/4 mb-6 ">
        <h2 className="text-xl font-semibold mb-3">Navigation</h2>
        <nav className="flex flex-col space-y-2 font-light text-stone-300">
          <Link to="/home" className="">Home</Link>
          <Link to="/about-us" className="my-2">About Us</Link>
          <Link to="/what-we-do" className="my-2">What We Do</Link>
          <Link to="/climate-change-and-us" className="my-2">Climate Change And Us</Link>
        </nav>
      </div>


      <div className="w-full  lg:w-1/4 mb-6">
        <h2 className="text-xl font-semibold mb-3">Important Links</h2>
        <nav className="flex flex-col space-y-2 font-light text-stone-300">
          <Link to="/blog" className="">Blog</Link>
          <Link to="/terms-and-conditions" className="my-2">Terms & Conditions</Link>
        </nav>
      </div>


      <div className="w-full  lg:w-1/4 mb-6 ">
        <h2 className="text-lgfont-light text-stone-300 mb-3">Have a question? Write to us at</h2>
        <p className="text-xl font-semibold mb-3 my-2">contact@carboncircle.in</p>
      
      </div>

      <div className='flex justify-end w-full'>
        <p className=" text-lg font-light text-stone-300 mt-20 ">© 2000-2021, All Rights Reserved</p>
      </div>

    </div>



  );
};

export default Footer;
