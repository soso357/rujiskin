import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import { Header, Lavish, Glamorous, Skin } from "./components";





function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </>
      <Header name="" />
      <Lavish adjective="And self care" />
      <Glamorous adjective="and Cosmetics." />
      <Skin></Skin>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-info">aa</h1>"
    </div>
  );
}

export default App;
