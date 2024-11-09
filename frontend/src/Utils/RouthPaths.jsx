import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
import Portfolio from "../Pages/Portfolio";
import DigitalMarketing from "../Pages/DigitalMarketing";
import WebDevelopment from "../Pages/WebDevelopment";
import AboutUs from "../Pages/About";
import ContactUs from "../Pages/Contact";
export default function RouthPaths() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
