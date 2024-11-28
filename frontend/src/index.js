import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { DataProvider } from "./store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";

// Dynamically load non-critical CSS
const loadNonCriticalCSS = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./Assets/css/style.css";
  link.type = "text/css";
  link.onload = () => console.log("Non-critical CSS loaded");
  document.head.appendChild(link);
};

// Call the function to load non-critical CSS
loadNonCriticalCSS();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
