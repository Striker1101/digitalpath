import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
import Portfolio from "../Pages/Portfolio";
import DigitalMarketing from "../Pages/DigitalMarketing";
import WebDevelopment from "../Pages/WebDevelopment";
import AboutUs from "../Pages/About";
import ContactUs from "../Pages/Contact";
import Terms from "../Pages/TermsAndPrivacy/Terms";
import Privacy from "../Pages/TermsAndPrivacy/Privacy";
import WebDevelopmentCategory from "../Pages/WebDevelopment/WebDevelopmentCategory";
import FAQ from "../Pages/QuesAndAns";
import DigitalMarketingCategory from "../Pages/DigitalMarketing/DigitalMarketingCategory";

export default function RouthPaths() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route
        path="/digital-marketing/:category"
        element={<DigitalMarketingCategory />}
      />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route
        path="/web-development/:category"
        element={<WebDevelopmentCategory />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
