import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";

const Blogdetails = ({ selectedBlog }) => {
  console.log(selectedBlog, "userData");
  let getSelectedProduct = useSelector(
    (state) => state.product.selectedProduct
  );
  console.log(getSelectedProduct, "getSelectedProduct");

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  //   useEffect(() => {
  //     // Fetch product data using productId
  //     fetchSingleUsertData(blogID);
  //   }, [blogID]);

  //   const fetchSingleUsertData = async (id) => {
  //     // Example fetch request (replace with actual API)
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await response.json();
  //     setUserData(data);
  //   };

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="lg:flex md:flex  justify-center items-center gap-12">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <ImageGallery
            items={getSelectedProduct.images.map((img) => ({
              original: img,
              thumbnail: img,
            }))}

            

            // items={images}
          />
        </div>

        <div className="text-lg text-gray- lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 lg:mt-0 md:mt-0 mt-10">
            {getSelectedProduct?.title}
          </h2>
          <p className="text-3xl font-bold text-red-600 mb-4 lg:mt-0 md:mt-0 mt-10">
            {" "}
            {getSelectedProduct?.price}
          </p>

          <p className="mt-8">{getSelectedProduct?.description}</p>

          <button className="mt-6 w-40 px-6 py-3 bg-lime-600 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
