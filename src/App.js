import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Service";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Whatwedo from "./whatwedo/Whatwedo";
import Blogdetails from "./pages/home/components/Blogdetails";
import Contact from "./pages/contact/components/Contact";
import Login from "./pages/components/Login";
import Createaccount from "./pages/components/Createaccount";
import Forgetpassword from "./pages/components/Forgetpassword";
import LoginOne from "./login1/LoginOne";
import AdminPanel from "./pages/admin/AdminPanel";
import { fetchProducts } from "./redux/product/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
  const mount = async () => {
    await dispatch(fetchProducts()); // Dispatch your async thunk here
  };
  mount();
}, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen ">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/whatwedo" element={<Whatwedo />} />
            <Route path="/blogdetails" element={<Blogdetails />} />
            <Route path="/register" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<Createaccount />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
              <Route path="/login1" element={<LoginOne />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
