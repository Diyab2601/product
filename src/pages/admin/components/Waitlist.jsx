import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

const Waitlist = () => {
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

  const [data] = useState([
    {
      expanded: true,
      type: "person",
      className: "bg-indigo-500 text-white",
      style: { borderRadius: "12px" },
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Amy Elsner",
        title: "CEO",
      },
      children: [
        {
          expanded: true,
          type: "person",
          className: "bg-purple-500 text-white",
          style: { borderRadius: "12px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            title: "CMO",
          },
          children: [
            {
              label: "Sales",
              className: "bg-purple-500 text-white",
              style: { borderRadius: "12px" },
            },
            {
              label: "Marketing",
              className: "bg-purple-500 text-white",
              style: { borderRadius: "12px" },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          className: "bg-teal-500 text-white",
          style: { borderRadius: "12px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
          children: [
            {
              label: "Development",
              className: "bg-teal-500 text-white",
              style: { borderRadius: "12px" },
            },
            {
              label: "UI/UX Design",
              className: "bg-teal-500 text-white",
              style: { borderRadius: "12px" },
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-column">
          <div className="flex flex-column align-items-center">
            <img
              alt={node.data.name}
              src={node.data.image}
              className="mb-3 w-3rem h-3rem"
            />
            <span className="font-bold mb-2">{node.data.name}</span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Waitlist</h1>
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

      <div className="card overflow-x-auto mt-6">
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      </div>
    </div>
  );
};

export default Waitlist;
