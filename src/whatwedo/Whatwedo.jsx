import React, { useEffect, useState } from 'react';
import Whatwedo1 from './components/Whatwedo1';
import Whatwedo2 from './components/Whatwedo2';
import Whatwedo3 from './components/Whatwedo3';
import Whatwedo4 from './components/Whatwedo4';


const Whatwedo = () => {

  const [data, setData]  = useState()

  useEffect(()=>{

  }, [])

  
  return (
    <>
      <Whatwedo1 />
      <Whatwedo2 />
      <Whatwedo3 />
      <Whatwedo4 />
    </>
  );
}

export default Whatwedo;
