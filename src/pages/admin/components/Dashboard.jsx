import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
// import { setDashboard } from "../../../redux/dashboard/dashboardSlice";
import { addDashboard, setDashboard } from "../../../redux/dashboard/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState("");
  const [url, setUrl] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [cards, setCards] = useState([]);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const actions = [{ name: "Action" }, { name: "Summary" }, { name: "URL" }];
const getAllDashboard = useSelector((state) => state.dashboard?.dashboards);

  console.log(getAllDashboard, "getAllDashboard");

  const handleSubmit = () => {
    if (!title || !selectedType) {
      alert("Please fill in title and select a type");
    } else {
      const newCard = {
               id: Date.now(),
        type: selectedType.name,
        title,
        description: selectedType.name === "Action" ? page : description,
        image: preview,
      };

      if (selectedType.name === "URL") {
        newCard.url = url;
      }

      if (selectedType.name === "Summary") {
        newCard.description = description;
      }

      dispatch(
        addDashboard(newCard)
      );

      // setCards((prev) => [...prev, newCard]);

      setTitle("");
      setDescription("");
      setPage("");
      setUrl(null);
      setSelectedType(null);
      setImage(null);
      setPreview(null);
      setVisible(false);
    }
  };

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
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-md font-medium text-gray-700 mb-2">
              Image
            </label>

            {preview ? (
              <div className="overflow-auto relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-72 object-contain border border-gray-300 p-2"
                />
                <button
                  onClick={() => {
                    setPreview(null);
                    setImage(null);
                  }}
                  className="absolute top-2 right-2 text-red-600 font-bold text-xl"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="p-6 border border-gray-300 rounded-md border-dashed w-full h-[250px] relative flex justify-center items-center">
                <div className="text-center">
                  <p>Drag File to upload</p>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm text-white bg-stone-600 rounded my-6"
                  >
                    Select file to upload
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImage(file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                />
              </div>
            )}
          </div>

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
        {getAllDashboard?.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No cards submitted yet.
          </p>
        ) : (
          getAllDashboard?.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 h-auto w-[22rem] flex flex-col justify-start"
            >
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>

              {card.image && (
                <img
                  src={card.image}
                  alt="Uploaded"
                  className="mb-4 w-full h-40 object-cover rounded"
                />
              )}

              {card.type === "Action" && (
                <Link to="">
                  <p className="text-gray-600 mb-4">Page: {card.description}</p>
                </Link>
              )}
              {card.type === "Summary" && (
                <p className="text-gray-600 mb-4">
                  Description: {card.description}
                </p>
              )}
              {card.type === "URL" && (
                <iframe
                  width="100%"
                  height="200"
                  src={card.url}
                  title="URL preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mb-4"
                ></iframe>
              )}

              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
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
