import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";

const Products = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const initialProducts = [
    {
      title: "Shoes1",
      img: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shoes2",
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shoes3",
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shoes4",
      img: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shoes5",
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Shoes6",
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredProducts = initialProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className="pt-6">
          <div className="">
            <label htmlFor="">Title</label>
            <InputText placeholder="Enter title " />
          </div>

          <div className="my-4">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              className="w-full p-2 border border-gray-300 rounded-md "
              rows={4}
            ></textarea>
          </div>

          <div className="my-4">
            <div className="p-6 border border-gray-300 rounded-md">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Image
              </label>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgAAGxyDQOsFk19AT9XrwsC9M--PlE0kcMA&s"
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md mb-3"
              />
              <p data-pr-classname="">Drag File to upload</p>
              <button
                type="button"
                className="px-4 py-2 text-sm text-white bg-stone-600 rounded my-6"
              >
                Select file to upload
              </button>

              <input type="file" />
            </div>

            <div className="flex justify-center mt-16">
              <button
                type="button"
                className="px-4 py-2 w-56 h-12 text-sm text-white bg-blue-500  rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl">Products</h1>
        <Button
          label="Add"
          className="text-sm"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="flex justify-center items-center w-full gap-4 mt-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          placeholder="Search"
        />

        <div className="card flex justify-content-center w-1/2">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full"
          />
        </div>

        <div className="card flex justify-content-center w-1/2">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
      </div>

      <div className="card grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        {filteredProducts.map((product, index) => (
          <Card key={index} className="md:w-25rem">
            <img
              alt="Card"
              src={product.img}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h2 className="text-xl font-bold mt-4">{product.title}</h2>
            <p className="my-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <Button
              label="Add to Cart"
              unstyled
              className="bg-white text-black border border-black px-2 py-1 rounded hover:bg-black hover:text-white transition"
            />
            <Button
              label="Buy Now"
              unstyled
              className="bg-black text-white px-2 py-1 rounded hover:bg-white hover:text-black border border-black ml-2 transition"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
