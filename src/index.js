import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";




/*function AppTwo() {
  return <button className="sign up">Sign up</button>;
}*/

ReactDOM.render(
  <>
    
  <BrowserRouter>
  <App />
    </BrowserRouter>

    
      
  </>,
  document.getElementById("root")
);
