import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";

import "./assets/reset.scss";
import "./assets/main.scss";
import "./assets/misc.css";
import "./components/mainPage/Main.css";

//fdgdfgdfgdfgdfg

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
