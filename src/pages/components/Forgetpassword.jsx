import { ChevronLeft } from 'react-feather';
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <div className="">
      <div>
        <div className="lg:justify-evenly md:flex-row w-full flex flex-col ">
          <div className="lg:w-3/5 md:w-2/3 w-full flex justify-center lg:my-40 md:my-20 my-10">
            <img
              className="lg:w-[280px] md:w-80 w-64 h-auto object-contain"
              alt="Login Image"
              src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-forgot-password-illustration-light.png"
            />
          </div>

          <div className="lg:w-2/5 md:w-1/3 w-full bg-white">
            <div className="flex flex-col justify-center h-full">
              <h1 className="lg:mt-40 md:mt-20 mt-8 lg:px-10 md:px-8 px-4 text-2xl font-semibold">
                Forgot Password? 🔒
              </h1>
              <p className="mt-2 lg:px-10 md:px-8 px-4">
                Enter your email and we'll send you instructions to reset your password
              </p>

              <form className="lg:px-10 md:px-8 px-4 lg:mt-8 md:mt-6 mt-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-normal mt-1"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-violet-500 text-white py-2 rounded-2xl lg:mt-12 md:mt-10 mt-8"
                >
                  Send Reset Link
                </button>
              </form>

              <Link to="/login" className="flex justify-center items-center lg:mt-6 md:mt-4 mt-4">
                <ChevronLeft />
                <p className="text-violet-500 ml-2">Back to login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
