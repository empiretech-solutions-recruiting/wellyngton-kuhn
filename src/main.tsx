import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./routes";
import Header from "components/Header";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <RoutesFile />
    </BrowserRouter>
  </React.StrictMode>
);
