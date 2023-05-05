import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import './index.css';
import App from "./app";

const root = document.getElementById("root");

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

