import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/home";
import Product from "../Components/ProductPages/Product";
import Checkout from "../Components/Checkout/Checkout";
import ProductDetails from "../Components/ProductDetail/ProductDetails";
import GoToTop from "../Components/Home/GoToTop/GoToTop";
import Blog from "../Components/Blog/Blog";
import { useState } from "react";
import Login from "../Components/LoginSignup/Login";
import Footer from "../Components/Footer/Footer";

function AllRoutes() {
  const [checkProps, setCheckProps] = useState({
    name: "",
    date: "",
    month: "",
    time: "",
    guests: 0,
    mobile: null,
    hotelName: "",
    hotelAdd: "",
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookatable" element={<Product />} />

        <Route
          path="/checkout"
          element={<Checkout checkProps={checkProps} />}
        />
        <Route
          path="/bookatable/:id"
          element={<ProductDetails setCheckProps={setCheckProps} />}
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default AllRoutes;
