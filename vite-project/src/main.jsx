import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BetProvider } from "./context/BetContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BetProvider>
      <App />
    </BetProvider>
  </React.StrictMode>
);
