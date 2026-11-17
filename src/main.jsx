import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Profile.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
