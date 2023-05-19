import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import img from "../src/images/flight.jpg"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className={"container-fluid"}
      style={{
        alignItems: "center",
        height: "1000vh",
        backgroundPosition: "center",
        overflow: "auto",
      }}
    >
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
