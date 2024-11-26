import React, { createContext, useEffect, useState } from "react";

//project images
import tara_grill_groove from "./Assets/images/tara-grill-groove.png";
import ninimi_restaurant from "./Assets/images/ninimi-restaurant.png";
import cas_automobile_workshop from "./Assets/images/cas-automobile-workshop.png";
import queen_catering_events from "./Assets/images/queen-catering-events.png";
import mabella_cakes_catering from "./Assets/images/mabella-cakes-catering.png";
import cisco_autos from "./Assets/images/cisco-autos.png";
import tuns_autotech from "./Assets/images/tuns-autotech.png";
import jericho_hospital from "./Assets/images/jericho-hospital.png";
import tara1 from "./Assets/images/Web/tara1.png";
import tara2 from "./Assets/images/Web/tara2.png";
import tara3 from "./Assets/images/Web/tara3.png";
import tara4 from "./Assets/images/Web/tara4.png";
import blog_thump from "./Assets/images/blog_thumb.png";
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

// 1. Create the context
export const DataContext = createContext();

// 2. Create the provider component
export const DataProvider = ({ children }) => {
  const _projects = [
    {
      id: 1,
      name: "Tara Grill Groove",
      image: tara_grill_groove,
      description:
        "For the love of delicious food. Come with family & feel the joy of mouthwatering food",
      link: "https://tara-grill-groove.netlify.app/",
      category: "maintenance_and_seo_improvement",
      images: [tara1, tara2, tara3, tara4],
    },
    {
      id: 2,
      name: "Ninimi Restaurant",
      image: ninimi_restaurant,
      description:
        "Enjoy Our Delicious Meal, Savor the flavors of our exquisite dishes, crafted with passion and the freshest ingredients.",
      link: "https://ninimi-restaurant.netlify.app/",
      category: "business_website_improvement",
      images: [],
    },
    {
      id: 3,
      name: "CAS Automobile Workshop",
      image: cas_automobile_workshop,
      description:
        "Cas Automobile Workshop: Qualified Car Repair Service Center",
      link: "https://cas-automobile-workshop.netlify.app/",
      category: "cms_website_improvement",
      images: [],
    },
    {
      id: 4,
      name: "Queen Catering Events",
      image: queen_catering_events,
      description:
        "Welcome to Queen Catering And Events, where culinary excellence meets outstanding service. We specialize in creating exceptional dining experiences for all events, from intimate gatherings to grand celebrations.",
      link: "https://queen-catering-events.netlify.app/",
      category: "e-commerce_website_development",
      images: [],
    },
    {
      id: 5,
      name: "Mabella Cakes Catering",
      image: mabella_cakes_catering,
      description:
        "Super Crispy Mabella Cakes & Catering The Best Cake In Universe",
      link: "https://mabella-cakes-catering.netlify.app/",
      category: "software_development",
      images: [],
    },
    {
      id: 6,
      name: "Cisco Autos",
      image: cisco_autos,
      description:
        "We are Cisco Autos, your premier destination for car dealership websites. Specializing in tailored online solutions for car dealerships.",
      link: "https://cisco-1.netlify.app/",
      category: "cms_website_improvement",
      images: [],
    },
    {
      id: 7,
      name: "Tuns Autotech",
      image: tuns_autotech,
      description:
        "Auto Maintenance & Repair Service. Maintaining your vehicle is essential for a smooth, reliable drive. Our Auto Maintenance & Repair Service offers comprehensive care to keep your car in peak condition for years.",
      link: "https://tuns-autotech.netlify.app/",
      category: "business_website_improvement",
      images: [],
    },
    {
      id: 8,
      name: "Jericho Hospital",
      image: jericho_hospital,
      description:
        "Your most trusted health partner. At our health center, your well-being is our priority. With dedicated professionals and state-of-the-art facilities.",
      link: "https://jericho-hospital.netlify.app/",
      category: "e-commerce_website_development",
      images: [],
    },
  ];

  const webServices = [
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

  const digitalServices = [
    {
      name: "Email Marketing",
      link: "/digital-marketing/email_marketing",
      icon: faPlug,
    },
    {
      name: "Social Media Management",
      link: "/digital-marketing/social_media_management",
      icon: faCode,
    },
    {
      name: "Content Marketing",
      link: "/digital-marketing/content_marketing",
      icon: faMobileAlt,
    },
    {
      name: "Pay Per Click Advertising",
      link: "/digital-marketing/pay_per_click_advertising",
      icon: faBriefcase,
    },
    {
      name: "Brand Management And Positioning",
      link: "/digital-marketing/brand_management_and_positioning",
      icon: faPencilRuler,
    },
    {
      name: "Digital marketing consultation",
      link: "/digital-marketing/digital_marketing_consultation",
      icon: faSearch,
    },
  ];

  const blogPosts = [
    {
      title: "Tips for Building a Successful E-commerce Site",
      image: blog_thump,
    },
    {
      title: "Understanding Fullstack Development",
      image: blog_thump,
    },
    {
      title: "Top 10 Digital Marketing Strategies",
      image: blog_thump,
    },
    {
      title: "How to Boost Your Website Traffic",
      image: blog_thump,
    },
    { title: "SEO Basics for Beginners", image: blog_thump },
    {
      title: "The Importance of Responsive Design",
      image: blog_thump,
    },
    { title: "Email Marketing Best Practices", image: blog_thump },
    {
      title: "Content Marketing Trends in 2024",
      image: blog_thump,
    },
    { title: "Understanding Google Analytics", image: blog_thump },
    {
      title: "Creating Engaging Social Media Content",
      image: blog_thump,
    },
  ];

  const [projects, setProjects] = useState(_projects);
  return (
    <DataContext.Provider
      value={{ projects, setProjects, webServices, digitalServices, blogPosts }}
    >
      {children}
    </DataContext.Provider>
  );
};

/**
 * blogging_website_development
 * e-commerce_website_development
 * cms_website_development
 * maintenance_support
 * seo_improvement
 * website_ui_ux_design
 * business_website_improvement
 * web_mobile_app_development
 * software_development
 * api_development_integration
 */
