import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Tìm phần tử #root trong index.html và render App.jsx vào
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
