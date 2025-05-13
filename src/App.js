import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Service';
import Header from './header/Header';
import Footer from './footer/Footer';
import Whatwedo from './whatwedo/Whatwedo';
import Blogdetails from './pages/home/components/Blogdetails';
import Contact from './pages/contact/components/Contact';
import Loginform from './pages/home/components/Loginform';




function App() {
  return (
    <div className="bg-gray-100 min-h-screen ">

 

    <Router>
      <div>
      <Header/>
        <Routes>
   
          <Route path="/home" element={<Home />} />
          <Route path="/about us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whatwedo" element={<Whatwedo />} />
          <Route path="/blogdetails" element={<Blogdetails />} />
     
          <Route path="/register" element={<Contact />} />
            <Route path="/loginform" element={<Loginform />} />

        </Routes>
     <Footer/>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
