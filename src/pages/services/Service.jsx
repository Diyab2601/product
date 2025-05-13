import React from 'react';

const Services = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            className="w-20 h-20 mx-auto mb-4" 
            src="" 
            alt="Service 1"
          />
          <h2 className="text-xl font-semibold mb-2">Service 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            className="w-20 h-20 mx-auto mb-4" 
            src="" 
            alt="Service 2"
          />
          <h2 className="text-xl font-semibold mb-2">Service 2</h2>
          <p className="text-gray-700">
            Impedit asperiores hic ipsum laborum deleniti perspiciatis minima incidunt.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            className="w-20 h-20 mx-auto mb-4" 
            src="" 
            alt="Service 3"
          />
          <h2 className="text-xl font-semibold mb-2">Service 3</h2>
          <p className="text-gray-700">
            Quod impedit enim repudiandae similique eius tenetur, dolorem ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
