import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FloatingChatWidget from "./FloatingChatWidget";
import ServicesOverview from "./ServicesOverview";
import WhyChooseUs from "./WhyChooseUs";
import BlogHighlights from "./BlogHighlights";
import PortfolioHighlights from "./PortfolioHighlights";
import Testimonials from "../HomePage/Testimony";
import PartnerLogos from "./PartnerLogos";
import ContactFormSection from "../HomePage/ContactUs";

export default function WebDevelopment() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <FloatingChatWidget />
      <ServicesOverview />
      <WhyChooseUs />
      <BlogHighlights />
      <PortfolioHighlights />
      <Testimonials />
      <PartnerLogos />
      <ContactFormSection />
    </div>
  );
}
