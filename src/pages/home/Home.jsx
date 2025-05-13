import React from 'react';
import HomeBanner from './components/HomeBanner';  
import Aboutinfo from './components/Aboutinfo';
import Ourprocess from './components/Ourprocess';
import WhatWeOffer from './WhatWeOffer';
import Blog from './components/Blog';
import Loginform from './components/Loginform';
// import Blogdetails from './components/Blogdetails'

function Home() {
  return (
    <div>
      <HomeBanner />
      <Aboutinfo />
      <Ourprocess />
      <WhatWeOffer />
      <Blog   />
      <Loginform />
      {/* <Blogdetails /> */}
    </div>
  );
}

export default Home;
