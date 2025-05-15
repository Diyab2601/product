import React, { useState } from "react";

import { useDispatch } from "react-redux";
// import { setUserData } from "../../../redux/user/userSlice";
import Swal from "sweetalert2";
import LoginOne from "./LoginOne";

const ContactForm2 = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const isFormInvalid = !name || !email || !role || !password;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: name,
      email: email,
      role: role,
      password: password,
    };

    const url = "https://api.freeapi.app/api/v1/users/register";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(setUserData(data));
      console.log(data, "data");
      if (data.statusCode === 200) {
        Swal.fire({
          title: "Congratulations!",
          text: data.message,
          icon: "success",
        });
        
      } else if (data.statusCode === 409) {
        Swal.fire({
          title: "Oops...",
          text: data.message,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Something went wrong",
          text: data.message,
          icon: "alert",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="mx-auto w-1/2 bg-white  p-18">
        <h1 className="text-4xl font-bold text-center text-lime-700 mb-4">
          Register Form 2
        </h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className=" text-sm font-medium text-gray-700 "
            >
              Name:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className=" text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className=" text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              id="role"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              placeholder="Enter Role"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className={`mt-6 w-full bg-lime-600 text-white py-2 rounded-full ${
              isFormInvalid ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }`}
            disabled={isFormInvalid}
          >
            Submit
          </button>
        </form>
      </div>

      <LoginOne userData={userData} />
    </div>
  );
};

export default ContactForm2;
