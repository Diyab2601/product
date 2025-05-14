import React, { useRef, useState } from "react";
import { Toast } from 'primereact/toast';

const Contactform = () => {
  const toast = useRef(null);

   const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Submitted successfully' });
    };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");


    const isFormInvalid = !name || !email || !role || !password;

//   console.log(email, "formData");
  console.log(role, "formData");
  console.log(password, "formData");


  // const handleChange = (e) => {
  //   console.log(e, "index");
   
  //   const { name, value } = e;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = "https://api.freeapi.app/api/v1/users/register";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: role,
        username: name,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data, 'data');
      toast.current.show({ severity: 'info', summary: 'Info', detail: 'Submitted successfully' });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
       <Toast ref={toast} position="bottom-right"/>
      <div className="mx-auto w-1/2 bg-white  p-18">
        <h1 className="text-4xl font-bold text-center text-lime-700 mb-4">
          Register Form
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
            className={`mt-6 w-full bg-lime-600 text-white py-2 rounded-full ${isFormInvalid ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}     //Ternary Operator
            disabled={isFormInvalid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
