import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import PinterestLayoute from "./components/PinterestLayoute";
import Itemcard from "./components/Itemcard";




const App = () => {
  return (
    <div className="App">
       
       
      
      
      
      <Navbar />
      <PinterestLayoute/>
      
      
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
      <CartProvider>
        <Cart />
        
      </CartProvider>
      
      
    </div>
  );
};

export default App;
