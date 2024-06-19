import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { store } from "./store";
import SmoothScroll from "./constants/utils/SmoothScroll";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SmoothScroll>
      <Provider store={store}>
        <Toaster />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SmoothScroll>
    ,
  </React.StrictMode>
);

//
