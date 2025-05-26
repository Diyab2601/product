import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useSelector, useDispatch} from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { addProduct } from "../../../redux/product/productSlice";
import { X } from "react-feather"; 

const Products = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);



  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const products = useSelector((state) => state.product.addproducts);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const handleSubmit = (e) => {  //.....
    e.preventDefault();
    if (!title || !description || !preview) {
      return alert("Please fill all fields and select an image");
    }

    dispatch(
      addProduct({
        id: Date.now(),
        title,
        description,
        image: preview, 
      })
    );
   
    setTitle("");
    setDescription("");
    setImage(null);
    setPreview(null);
    setVisible(false);
  };

  const handleImageUpload = (val) => {
    const file = val.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleClear = () => {
    setPreview(null);
  };

  return (
    <div className="p-4">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className="pt-0">
          <div className="">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Title
            </label>
            <InputText
              className="text-sm w-full"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows={4}
            ></textarea>
          </div>

          <div className="my-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Image
            </label>

            {preview ? (
              <div className="overflow-auto relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-72 object-contain border border-gray-300 p-2"
                />
                <X
                  className="absolute top-2 right-2 cursor-pointer text-red-600"
                  onClick={handleClear}
                />
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
                  onChange={handleImageUpload}
                  className="opacity-0 absolute top-0 left-0 w-full h-full"
                />
              </div>
            )}

            <div className="flex justify-center mt-12">
              <button
                type="button"
                className="px-4 py-2 w-56 h-12 text-sm text-white bg-blue-500 rounded-xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Sidebar>

      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl">Products</h1>
        <Button label="Add" className="text-sm" onClick={() => setVisible(true)} />
      </div>

      <div className="flex justify-center items-center w-full gap-4 mt-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          placeholder="Search"
        />

        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-1/2"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products added yet.
          </p>
        ) : (
          products.map((product, index) => (
            <Card key={index} className="md:w-25rem">
              {product.image && (
                <img
                  alt="Product"
                  src={product.image}
                  className="w-full h-64 object-cover rounded-xl"
                />
              )}
              <h2 className="text-xl font-bold mt-4">{product.title}</h2>
              <p className="my-4 text-sm">{product.description}</p>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
