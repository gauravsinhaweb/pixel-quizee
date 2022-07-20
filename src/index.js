import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context";
import { AuthProvider } from "./context/auth-context";
import "./index.css";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
