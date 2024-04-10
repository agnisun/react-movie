import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import "modern-normalize";
import "./index.css";
import { AuthProvider } from "./shared/providers/auth";
import { MoviesProvider } from "./shared/providers/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </AuthProvider>
  </React.StrictMode>
);
