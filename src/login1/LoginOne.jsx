import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/user/userSlice";

const LoginOne = () => {


  const getRegister = useSelector((state)=> state.user.register)

  





  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
        <div className="mx-auto w-1/2 bg-white p-18">
          <h1 className="text-4xl font-bold text-center text-lime-700 mb-4">
            Login Form
          </h1>
          <form className="space-y-4 mt-15">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 "
              >
                Usename:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-3 py-2"
                placeholder="Username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-xl px-3 py-2"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-lime-600 text-white py-2 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginOne;
