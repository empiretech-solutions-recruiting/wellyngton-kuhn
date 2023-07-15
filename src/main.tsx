import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./routes";
import Header from "components/Header";
import { Provider } from "react-redux";
import { store } from "redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RoutesFile />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
