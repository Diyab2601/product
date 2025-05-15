import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

const About2 = () => {
  const product = useSelector((state) => state.product?.productss);
  console.log(product, "product2");
   
  const imageBodyTemplate = (prod) =>{
    return <img src={prod.thumbnail} alt={prod.thumbnail}  />
  }

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="lg:flex md:flex  justify-center items-center gap-12">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <img
            className="w-full h-420px sm-h-300px object-cover lg:mt-0 md:mt-0 mt-10"
            src="https://carboncircle.in/img/About%20Us%20Page.65774956.jpg"
            alt="About Image"
          />
        </div>

        <div className="text-lg text-gray- lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 lg:mt-0 md:mt-0 mt-10">
            We are Carbon Circle
          </h2>
          <p className="">
            The carbon cycle is nature's way of reusing carbon atoms, which
            travel from the atmosphere into organisms in the Earth and then back
            into the atmosphere over time and space. Carbon Circle’s vision is
            to build businesses around the carbon cycle.
          </p>

          <p className="mt-8">
            Carbon Circle is led by a team of seasoned professionals from the
            energy, infrastructure, waste and agribusiness sectors. We build,
            own and operate Anaerobic Digestion based plants that convert
            agricultural waste into Renewable Natural Gas and Organic
            Fertiliser.
          </p>

          <button className="mt-6 w-40 px-6 py-3 bg-lime-600 text-white">
            Explore
          </button>
        </div>
      </div>

      <DataTable value={product} tableStyle={{ minWidth: "50rem" }} className="mt-16">
        <Column field="title" header="Title"></Column>
        <Column field="brand" header="Brand"></Column>
         <Column body={imageBodyTemplate} header="Brand"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="rating" header="Rating"></Column>
        <Column field="stock" header="Stock"></Column>
      </DataTable>
    </div>
  );
};

export default About2;
