import React from "react";
import HeroSection from "../../Components/HeroSection";
import ServicesOverview from "../../Components/ServicesOverview";
import WhyChooseUs from "./WhyChooseUs";
import BlogHighlights from "./BlogHighlights";
import PortfolioHighlights from "./PortfolioHighlights";
import Testimonials from "../../Components/Testimony";
import PartnerLogos from "./PartnerLogos";
import ContactFormSection from "../../Components/ContactUs";
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
import Stacks from "../../Components/Stacks";

import nextjs from "../../Assets/images/nextjs.png";
import firebase from "../../Assets/images/firebase.png";
import mysql from "../../Assets/images/mysql.png";
import download from "../../Assets/images/download.jpeg";
import nestjs from "../../Assets/images/nestjs.png";

const stackItems = [
  { src: nextjs, alt: "Partner Logo 1" },
  { src: firebase, alt: "Partner Logo 2" },
  { src: mysql, alt: "Partner Logo 3" },
  { src: download, alt: "Partner Logo 4" },
  { src: nestjs, alt: "Partner Logo 5" },
];

const services = [
  {
    name: "API Development and Integration",
    link: "/web-development/api_development_integration",
    icon: faPlug,
  },
  {
    name: "Software Development",
    link: "/web-development/software_development",
    icon: faCode,
  },
  {
    name: "Web & Mobile App Development",
    link: "/web-development/web_mobile_app_development",
    icon: faMobileAlt,
  },
  {
    name: "Business Website Development",
    link: "/web-development/business_website_improvement",
    icon: faBriefcase,
  },
  {
    name: "Website UI/UX Design & Development",
    link: "/web-development/website_ui_ux_design",
    icon: faPencilRuler,
  },
  {
    name: "SEO Improvement",
    link: "/web-development/seo_improvement",
    icon: faSearch,
  },
  {
    name: "Maintenance and Support",
    link: "/web-development/maintenance_support",
    icon: faTools,
  },
  {
    name: "CMS Website Development",
    link: "/web-development/cms_website_development",
    icon: faServer,
  },
  {
    name: "E-commerce Website Development",
    link: "/web-development/e-commerce_website_development",
    icon: faShoppingCart,
  },
  {
    name: "Blogging Website Development",
    link: "/web-development/blogging_website_development",
    icon: faBlog,
  },
];

const reasons = [
  {
    name: "Credibility and Trust",
    desc: "Our team’s proven track record and consistent delivery build a foundation of trust for every client.",
  },
  {
    name: "Efficiency in Our Work",
    desc: "We optimize processes to ensure projects are completed on time without compromising on quality.",
  },
  {
    name: "Enhanced Security",
    desc: "Implementing the latest security standards to safeguard your data and protect your digital assets.",
  },
  {
    name: "Unique Customizations",
    desc: "We tailor every solution to fit your specific needs, providing a truly unique experience.",
  },
  {
    name: "Best User Experience",
    desc: "We prioritize ease of use and seamless navigation to engage and satisfy your audience.",
  },
  {
    name: "Best SEO Services",
    desc: "Utilizing proven SEO techniques to boost your visibility and drive more traffic to your site.",
  },
  {
    name: "Comprehensive Expertise",
    desc: "Our team of skilled professionals brings a wealth of knowledge across various industries.",
  },
  {
    name: "Latest Technologies",
    desc: "Leveraging cutting-edge technologies to keep you ahead in the ever-evolving digital landscape.",
  },
  {
    name: "Affordable Pricing & Flexible Payment Plans",
    desc: "Our solutions are competitively priced with flexible payment options to suit your budget.",
  },
  {
    name: "Communication & Support",
    desc: "Clear, open communication and ongoing support at every step of your project journey.",
  },
];

const purposes = [" Website Development", "Consultation", "General Inquiry"];

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
      <WhyChooseUs reasons={reasons} />
      <BlogHighlights />
      <PortfolioHighlights />
      <Testimonials />
      {/* <PartnerLogos /> */}
      <Stacks stackItems={stackItems} />
      <ContactFormSection purposes={purposes} />
    </div>
  );
}
