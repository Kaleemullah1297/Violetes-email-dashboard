import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
