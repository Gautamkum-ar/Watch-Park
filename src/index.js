import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { APIConetextProvider } from "./contexts/APIContext/APIContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIConetextProvider>
        <App />
      </APIConetextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
