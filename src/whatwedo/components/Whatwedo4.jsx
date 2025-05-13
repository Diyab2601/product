import React from 'react'

const Whatwedo4 = () => {
  return (
    <div className='container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5'>
       <div className="lg:flex md:flex justify-center items-center gap-12 ">
        <div className=" container mx-auto lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Organic fertiliser</h2>
          <p className=" text-gray-800 mb-4">
          Organic manure increases soil fertility, reduces inputs (fertiliser/sprays) and improves water holding capacity. All of these save money for the farmer. The liquid fermented organic manure (LFOM) produced at our plants is offered free of cost to the farmers who supply feedstock to our plants.
          </p>
          
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-8">
          <img
            className="height w-full "
            src="https://carboncircle.in/img/Organic%20Fertilizer.ec667cd1.png"
            alt="Organic fertiliser"
          />
        </div>
      </div>
    </div>
  )
}

export default Whatwedo4
