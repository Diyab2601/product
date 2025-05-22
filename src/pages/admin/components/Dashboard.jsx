import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState("");
    const [url, setUrl] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [cards, setCards] = useState([]);

  const actions = [{ name: "Action" }, { name: "Summary" }, { name: "URL" }];

  const handleSubmit = () => {
    if (!title || !selectedType) {
      alert("Please fill in title and select a type");
    } else {
      const newCard = {
        type: selectedType.name,
        title,
        description: selectedType.name === "Action" ? page : description,
        url: selectedType.name === 'URL' ? page : url
      };

      setCards([...cards, newCard]);

      setTitle("");
      setDescription("");
      setPage("");
      setUrl("")
      setSelectedType(null);
      setVisible(false);
    }
  };

  console.log(cards, "card");

  return (
    <div className="p-4">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div>
          <label className="block text-md font-medium text-gray-700 mt-2 mb-1">
            Title
          </label>
          <InputText
            className="text-sm w-full"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="mt-4">
            <label className="block text-md font-medium text-gray-700 mb-1">
              Type
            </label>
            <Dropdown
              value={selectedType}
              onChange={(e) => setSelectedType(e.value)}
              options={actions}
              optionLabel="name"
              placeholder="Select a Type"
              className="w-full md:w-14rem text-sm"
            />
          </div>

          {selectedType?.name === "Action" && (
            <div className="mt-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Page
              </label>
              <InputText
                className="text-sm w-full"
                placeholder="Enter Page"
                value={page}
                onChange={(e) => setPage(e.target.value)}
              />
            </div>
          )}

          {selectedType?.name === "Summary" && (
            <div className="mt-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter description"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          )}

          {selectedType?.name === "URL" && (
            <div className="mt-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                URL
              </label>
              <InputText
                className="text-sm w-full"
                placeholder="Enter Page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          )}

          <div className="flex justify-center mt-10">
            <Button
              label="Submit"
              className="w-46 h-12"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Sidebar>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Dashboard</h1>
        <Button label="Add" onClick={() => setVisible(true)} />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No cards submitted yet.
          </p>
        ) : (
          cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 h-64 w-[22rem] flex flex-col justify-center"
            >
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              {card.type === "Action" && (
                <Link to="">
                  <p className="text-gray-600 mb-4">Page</p>
                </Link>
              )}
              {card.type === "Summary" && (
                <p className="text-gray-600 mb-4">Description</p>
              )}
              {card.type === "URL" && (
                <input
                  placeholder="URL here"
                  className="text-sm border p-2 w-full rounded "
                />
              )}

          
                <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Submit
                </button>
            
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
