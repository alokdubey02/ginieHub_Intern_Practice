import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// step1
// must download this file after creating vite-react app
// it helps to detect errors
// npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

// step2
// change in vite.config.js file
// add this
// import eslint from "vite-plugin-eslint";
// plugins: [react(), eslint()],
