import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

 if (window.location.pathname === "/loginform") {
    return null;
  }

  return (

    <header className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src="https://carboncircle.in/img/logo.7dc3030d.png"
            alt="Carbon Circle Logo"
            className="h-18 w-auto"
          />
        </div>


        <nav className="flex  justify-between space-x-20 text-gray-700 text-lg font-bold lg:block md:block hidden">
          <Link to="/home" className="hover:text-green-600 transition">
            Home </Link>
            <Link to="/about us" className="hover:text-green-600 transition">
            About Us </Link>
            <Link to="/whatwedo" className="hover:text-green-600 transition">
            What We Do </Link>
            <Link to="/climate change and us" className="hover:text-green-600 transition">
            Climate Change And Us </Link>
            <Link to="/blog" className="hover:text-green-600 transition">
            Blog </Link>
            <Link to="/contact" className="hover:text-green-600 transition">
            Contact </Link>
        </nav>


      </div>
    </header>


  );
};

export default Header;
