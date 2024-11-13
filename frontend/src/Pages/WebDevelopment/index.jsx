import React from "react";
import Header from "./Header";
import HeroSection from "../../Components/HeroSection";
import ServicesOverview from "../../Components/ServicesOverview";
import WhyChooseUs from "./WhyChooseUs";
import BlogHighlights from "./BlogHighlights";
import PortfolioHighlights from "./PortfolioHighlights";
import Testimonials from "../../Components/Testimony";
import PartnerLogos from "./PartnerLogos";
import ContactFormSection from "../../Components/ContactUs";
import Stacks from "../HomePage/Stacks";
import bg1 from "../../Assets/images/Web/bg/bg1.jpeg";
import bg2 from "../../Assets/images/Web/bg/bg2.jpeg";
import bg3 from "../../Assets/images/Web/bg/bg3.jpeg";
import bg4 from "../../Assets/images/Web/bg/bg4.jpg";
import bg5 from "../../Assets/images/Web/bg/bg5.jpeg";
import FloatingChatWidget from "../../Components/FloatingChatWidget";

//service
import {
  faPlug,
  faCode,
  faMobileAlt,
  faBriefcase,
  faPencilRuler,
  faSearch,
  faTools,
  faServer,
  faShoppingCart,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: "API Development and Integration",
    link: "/portfolio/api_development_integration",
    icon: faPlug,
  },
  {
    name: "Software Development",
    link: "/portfolio/software_development",
    icon: faCode,
  },
  {
    name: "Web & Mobile App Development",
    link: "/portfolio/web_mobile_app_development",
    icon: faMobileAlt,
  },
  {
    name: "Business Website Development",
    link: "/portfolio/business_website_improvement",
    icon: faBriefcase,
  },
  {
    name: "Website UI/UX Design & Development",
    link: "/portfolio/website_ui_ux_design",
    icon: faPencilRuler,
  },
  {
    name: "SEO Improvement",
    link: "/portfolio/seo_improvement",
    icon: faSearch,
  },
  {
    name: "Maintenance and Support",
    link: "/portfolio/maintenance_support",
    icon: faTools,
  },
  {
    name: "CMS Website Development",
    link: "/portfolio/cms_website_development",
    icon: faServer,
  },
  {
    name: "E-commerce Website Development",
    link: "/portfolio/e-commerce_website_development",
    icon: faShoppingCart,
  },
  {
    name: "Blogging Website Development",
    link: "/portfolio/blogging_website_development",
    icon: faBlog,
  },
];

export default function WebDevelopment() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection
        backgroundImages={[bg1, bg2, bg3, bg4, bg5]}
        big_title={"Elevate Your Online Presence"}
        small_title={"Transforming Your Ideas into Digital Reality"}
        first_button_text={"Explore Our Services"}
        first_button_link={"/web-development/#contact"}
        second_button_text={"Contact Us on WhatsApp"}
        second_button_link={"https://wa.me/2347068546898"}
      />
      <FloatingChatWidget />
      <ServicesOverview
        services={services}
        title={"Our Services"}
        desc={
          "Discover a variety of professional services designed to elevate your digital presence and streamline your business operations."
        }
        btn_text={"See More"}
      />
      <WhyChooseUs />
      <BlogHighlights />
      <PortfolioHighlights />
      <Testimonials />
      {/* <PartnerLogos /> */}
      <Stacks />
      <ContactFormSection />
    </div>
  );
}
