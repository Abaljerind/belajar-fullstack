import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating color="#fcc419" size={32} />
    <StarRating max={10} color="teal" size={56} />
    <StarRating max={7} color={"skyblue"} size={40} />
  </StrictMode>
);
