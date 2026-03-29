import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // use default export in App.jsx
import "./tailwind.css";
import "./tailwind.css"; // make sure this file exists

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
