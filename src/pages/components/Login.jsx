import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className=" lg:justify-evenly md:flex-row w-full flex flex-col  ">
        <div className=" lg:w-3/5 md:w-2/3 w-full flex justify-center lg:my-40 md:my-20 my-10">
          <img
            className="lg:w-[500px] md:w-80 w-64 h-auto object-contain"
            alt="Login Image"
            src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          />
        </div>

        <div className=" lg:w-2/5 md:w-1/3 w-full bg-white">
          <div className="flex flex-col">
            <h1 className="lg:mt-40 md:mt-20 mt-8 lg:px-10 md:px-8 px-4 text-2xl font-semibold">
              Welcome to Vuexy! 👋
            </h1>
            <p className="lg:px-10 md:px-8 px-4 mt-2">
              Please sign-in to your account and start the adventure
            </p>
            <form className="lg:px-10 md:px-8 px-4 lg:mt-8 md:mt-6 mt-4">
              <div>
                <label
                  for="Username"
                  class="text-sm font-medium text-gray-700"
                >
                  Email or Username:
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 font-normal mt-1"
                  placeholder="Enter your email or username"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <label
                  for="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between lg:mt-8 md:mt-6 mt-4">
                <div className="flex gap-1 items-center">
                  <input type="checkbox" />
                  <label
                    for="Remember me"
                    className="text-md font-medium text-gray-700 px-1"
                  >
                    Remember me
                  </label>
                </div>
                <Link to="/forgetpassword">
                  <span className="text-violet-500 lg:mt-0 md:mt-0 mt-2 mx-2">
                    Forget Password?
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-500 text-white py-2 rounded-2xl lg:mt-12 md:mt-10 mt-8"
              >
                Sign in
              </button>

              <div className="flex md:flex-row  flex-col justify-center lg:mt-6 md:mt-4 mt-4 items-center lg:gap-2">
                <span>New on our platform?</span>
                <Link to="/createaccount">
                  <span className="text-violet-500 mx-2">
                    Create an account
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
