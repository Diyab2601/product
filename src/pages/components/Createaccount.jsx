import React from 'react'
import { Link } from "react-router-dom";

const Createaccount = () => {
  return (
     <div class="">
      <div>
        <div class="lg:justify-evenly md:flex-row w-full flex flex-col  ">
          <div class="lg:w-3/5 md:w-2/3 w-full flex justify-center lg:my-40 md:my-20 my-10">
            <img
              class="lg:w-[500px] md:w-80 w-64 h-auto object-contain"
              alt="Create account Image"
              src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-register-illustration-light.png"
            />
          </div>
          <div class="lg:w-2/5 md:w-1/3 w-full bg-white  ">
            <div class=" flex flex-col">
              <h1 class="lg:mt-40 md:mt-20 mt-8 lg:px-10 md:px-8 px-4 text-2xl font-semibold">
                Adventure starts here 🚀
              </h1>
              <p class=" lg:px-10 md:px-8 px-4 mt-2">
               Make your app management easy and fun!
              </p>
              <form class="lg:px-10 md:px-8 px-4 lg:mt-8 md:mt-6 mt-4">
                <div>
                  <label
                    for="Username "
                    class=" text-sm font-medium text-gray-700"
                  >
                 Username:
                  </label>
                  <input
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 font-normal mt-1"
                    placeholder="Enter your username"
                    type="text"
                  />
                </div>



                 <div className='mt-4'>  
                  <label
                    for="Email"
                    className=" text-sm font-medium text-gray-700 mt-10"
                  >
                 Email:
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-normal mt-1 "
                    placeholder="Enter your Email"
                    type="email"
                  />
                </div>


                <div className="mt-4">
                  <label
                    for="password"
                    className=" text-sm font-medium text-gray-700 mt-10"
                  >
                    Password:
                  </label>
                  <input
                   
                    className="w-full border border-gray-300 rounded-lg px-4 py-2  mt-1"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <div class="flex justify-between mt-8flex flex-col md:flex-row justify-between lg:mt-8 md:mt-6 mt-4">
                  <div class="flex gap-1 items-center ">
                    <input
                     
                      placeholder="I agree to"
                      className=""
                      type="checkbox"
                    />
                    <label
                      for="Remember me"
                      className=" text-md font-medium text-gray-700 px-1"
                    >
                     I agree to
                    </label>
                  </div>
                  <p className="text-violet-500 text-md font-medium">
                    privacy policy & terms
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-violet-500 text-white py-2 rounded-2xl lg:mt-12 md:mt-10 mt-8"
                >
                  Sign up
                </button>
                <div className=" flex md:flex-row  flex-col justify-center lg:mt-6 md:mt-4 mt-4 items-center lg:gap-2">
                  <span className="">Already have an account?</span>
                 
                   <Link to="/login"><span className="text-violet-500 lg:mt-0 md:mt-0 mt-2 mx-2">Sign in instead</span></Link>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Createaccount
