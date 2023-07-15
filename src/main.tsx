import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./routes";
import Header from "components/Header";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Footer from "components/Footer";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Header />
          <RoutesFile />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
