import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Shop from "./page/Shop";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound";
import Loading from "./components/Loading/Loading";
import ScrollUp from "./components/scroll-up/ScrollUp";
import Cart from "./page/Cart";
import Login from "./page/Login";

const App = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <NavBar />

          <ScrollUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
