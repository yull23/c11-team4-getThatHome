import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { global, reset } from "./assets/global";
import { Global } from "@emotion/react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
