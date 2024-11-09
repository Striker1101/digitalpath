import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
export default function RouthPaths() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
