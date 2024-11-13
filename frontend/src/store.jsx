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
      category: "e_commerce_website_improvement",
      images: [],
    },
    {
      id: 5,
      name: "Mabella Cakes Catering",
      image: mabella_cakes_catering,
      description:
        "Super Crispy Mabella Cakes & Catering The Best Cake In Universe",
      link: "https://mabella-cakes-catering.netlify.app/",
      category: "other_web_service",
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
      category: "e_commerce_website_improvement",
      images: [],
    },
  ];
  const [projects, setProjects] = useState(_projects);
  return (
    <DataContext.Provider value={{ projects, setProjects }}>
      {children}
    </DataContext.Provider>
  );
};
