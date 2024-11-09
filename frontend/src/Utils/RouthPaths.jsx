import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
import Portfolio from "../Pages/Portfolio";
export default function RouthPaths() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/digital-marketing" element={<Homepage />} />
      <Route path="/web-development" element={<Homepage />} />
      <Route path="/why-choose-us" element={<Homepage />} />
      <Route path="/about" element={<Homepage />} />
      <Route path="/contact" element={<Homepage />} />
    </Routes>
  );
}
