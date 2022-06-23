import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";
import { MintPage } from "./components/pages/mint";

import "./assets/reset.scss";
import "./assets/main.scss";
import "./assets/misc.css";

//fdgdfgdfgdfgdfg

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MintPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
