// import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

export default function App() {
  // const x = 20;
  return (
    <div>
      {/* this h1 is always with the below component path. so, if we want to make something component sticky or use in all path then usually we add a component here */}
      <h1>hello router</h1>
      <BrowserRouter>
        <Routes>
          {/* using element we easily pass the props into the component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* here * asterisk catch all the path url other than mentioned one  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
