import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSelectedProduct } from "../../../redux/product/productSlice";


const Blog = () => {
  const [users, setUsers] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.productss);
  console.log(product, "product");

useEffect(() => {
  const mount = async () => {
    await dispatch(fetchProducts()); // Dispatch your async thunk here
  };
  mount();
}, [dispatch]);

  console.log(users, "users");

  const navigate = useNavigate();

  const handleClick = (user) => {
    dispatch(setSelectedProduct(user));
    navigate("/blogdetails");
  };

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <h1 className="text-4xl font-bold mb-10 flex flex-start">Blog</h1>

      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },

          // when window width is >= 640px
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
      >
        {product.map((user) => (
          <SwiperSlide key={user.id}>
            <div
              className="bg-white shadow-md"
              onClick={() => handleClick(user)}
            >
              <img
                src={user.thumbnail}
                alt="Blog"
                className="w-full h-48 object-contain"
              />

              <div className="flex justify-between px-4 pt-4 text-gray-600 text-sm">
                <p>{user.price}</p>
                <p>{user.rating}</p>
              </div>

              <div className="px-4 pb-4 pt-2">
                <h2 className="text-lg font-semibold mb-2">{user.title}</h2>
                <p className="text-gray-700 text-sm">{user.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedBlog && <Blogdetails selectedBlog={selectedBlog} />}
    </div>
  );
};

export default Blog;
