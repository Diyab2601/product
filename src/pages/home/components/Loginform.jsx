import React from "react";

const Loginform = () => {
  return (
    <div className="w-full flex justify-evenly ">
      <div className="w-2/3 flex  justify-center my-40">
        <img
          className="w-100 h-full object-contain  "
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          alt="Login Image"
        />
      </div>

      <div className="w-1/3 bg-white   ">
        <div className=" flex flex-col">
          <h1 className="mt-40 text-2xl px-10 font-semibold">
            Welcome to Vuexy! 👋
          </h1>
          <p className=" mt-2 px-10">
            Please sign-in to your account and start the adventure
          </p>
          <form className="px-10 mt-8">
            <div>
              <label
                htmlFor="Username "
                className=" text-sm font-medium text-gray-700 "
              >
                Email or Username:
              </label>

              <input
                type="email"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 font-normal mt-1"
                placeholder="Enter your email or username"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className=" text-sm font-medium text-gray-700 mt-10"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2  mt-1"
                placeholder="......."
              />
            </div>

            <div className="flex justify-between mt-8">
              <div className="flex gap-1 items-center ">
                <input
                  type="checkbox"
                  id="Remember me"
                  placeholder="Remember me"
                  className=""
                />
                <label
                  htmlFor="Remember me"
                  className=" text-md font-medium text-gray-700 px-1"
                >
                  Remember me
                </label>
              </div>

              <p className="text-violet-500 text-md font-medium">
                Forget Password?
              </p>
            </div>

            <button
              type="submit"
              className=" w-full bg-violet-500 text-white py-2 rounded-2xl mt-12"
            >
              Sign in
            </button>
            <div>
              <span className="">New on our platform?</span>
              <span className="text-violet-500 ">Create an account</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;

// flex items-center
