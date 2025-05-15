import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

const Sellorder = () => {
   const [selectedCity, setSelectedCity] = useState(null);
      
        const product = useSelector((state) => state.product?.productss);
        console.log(product, "product3");
      
        const cities = [
          { name: "New York", code: "NY" },
          { name: "Rome", code: "RM" },
          { name: "London", code: "LDN" },
          { name: "Istanbul", code: "IST" },
          { name: "Paris", code: "PRS" },
        ];
      
        return (
          <div className="p-4">
            <h1 className="text-2xl">Sellorder</h1>
            <div className="flex justify-center items-center w-full items-center gap-4 mt-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
                placeholder="Search"
              />
              <div className="card flex justify-content-center  w-1/2 ">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full"
                />
              </div>
      
              <div className="card flex justify-content-center  w-1/2">
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
      
            <DataTable
              value={product}
              tableStyle={{ minWidth: "50rem" }}
              className="mt-6"
            >
              <Column field="title" header="Title"></Column>
              <Column field="brand" header="Brand"></Column>
      
              <Column field="category" header="Category"></Column>
              <Column field="description" header="Description"></Column>
              <Column field="price" header="Price"></Column>
              <Column field="rating" header="Rating"></Column>
              <Column field="stock" header="Stock"></Column>
            </DataTable>
          </div>
        );
      };

export default Sellorder
