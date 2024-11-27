import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load pages
const Homepage = lazy(() => import("../Pages/HomePage"));
const Portfolio = lazy(() => import("../Pages/Portfolio"));
const DigitalMarketing = lazy(() => import("../Pages/DigitalMarketing"));
const WebDevelopment = lazy(() => import("../Pages/WebDevelopment"));
const AboutUs = lazy(() => import("../Pages/About"));
const ContactUs = lazy(() => import("../Pages/Contact"));
const Terms = lazy(() => import("../Pages/TermsAndPrivacy/Terms"));
const Privacy = lazy(() => import("../Pages/TermsAndPrivacy/Privacy"));
const WebDevelopmentCategory = lazy(() =>
  import("../Pages/WebDevelopment/WebDevelopmentCategory")
);
const FAQ = lazy(() => import("../Pages/QuesAndAns"));
const DigitalMarketingCategory = lazy(() =>
  import("../Pages/DigitalMarketing/DigitalMarketingCategory")
);
const NotFound = lazy(() => import("../Pages/NotFound"));

export default function RouthPaths() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
