import React from "react";
import { useParams } from "react-router-dom";
import tara_grill_groove from "../../Assets/images/tara-grill-groove.png";
import ninimi_restaurant from "../../Assets/images/ninimi-restaurant.png";
import cas_automobile_workshop from "../../Assets/images/cas-automobile-workshop.png";
import queen_catering_events from "../../Assets/images/queen-catering-events.png";
import mabella_cakes_catering from "../../Assets/images/mabella-cakes-catering.png";
import cisco_autos from "../../Assets/images/cisco-autos.png";
import tuns_autotech from "../../Assets/images/tuns-autotech.png";
import jericho_hospital from "../../Assets/images/jericho-hospital.png";

const projects = [
  {
    id: 1,
    name: "Tara Grill Groove",
    image: tara_grill_groove,
    description:
      "For the love of delicious food. Come with family & feel the joy of mouthwatering food",
    link: "https://tara-grill-groove.netlify.app/",
    category: "maintenance_and_seo_improvement",
  },
  {
    id: 2,
    name: "Ninimi Restaurant",
    image: ninimi_restaurant,
    description:
      "Enjoy Our Delicious Meal, Savor the flavors of our exquisite dishes, crafted with passion and the freshest ingredients.",
    link: "https://ninimi-restaurant.netlify.app/",
    category: "business_website_improvement",
  },
  {
    id: 3,
    name: "CAS Automobile Workshop",
    image: cas_automobile_workshop,
    description: "Cas Automobile Workshop: Qualified Car Repair Service Center",
    link: "https://cas-automobile-workshop.netlify.app/",
    category: "cms_website_improvement",
  },
  {
    id: 4,
    name: "Queen Catering Events",
    image: queen_catering_events,
    description:
      "Welcome to Queen Catering And Events, where culinary excellence meets outstanding service. We specialize in creating exceptional dining experiences for all events, from intimate gatherings to grand celebrations.",
    link: "https://queen-catering-events.netlify.app/",
    category: "e_commerce_website_improvement",
  },
  {
    id: 5,
    name: "Mabella Cakes Catering",
    image: mabella_cakes_catering,
    description:
      "Super Crispy Mabella Cakes & Catering The Best Cake In Universe",
    link: "https://mabella-cakes-catering.netlify.app/",
    category: "other_web_service",
  },
  {
    id: 6,
    name: "Cisco Autos",
    image: cisco_autos,
    description:
      "We are Cisco Autos, your premier destination for car dealership websites. Specializing in tailored online solutions for car dealerships.",
    link: "https://cisco-1.netlify.app/",
    category: "cms_website_improvement",
  },
  {
    id: 7,
    name: "Tuns Autotech",
    image: tuns_autotech,
    description:
      "Auto Maintenance & Repair Service. Maintaining your vehicle is essential for a smooth, reliable drive. Our Auto Maintenance & Repair Service offers comprehensive care to keep your car in peak condition for years.",
    link: "https://tuns-autotech.netlify.app/",
    category: "business_website_improvement",
  },
  {
    id: 8,
    name: "Jericho Hospital",
    image: jericho_hospital,
    description:
      "Your most trusted health partner. At our health center, your well-being is our priority. With dedicated professionals and state-of-the-art facilities.",
    link: "https://jericho-hospital.netlify.app/",
    category: "e_commerce_website_improvement",
  },
];

function PortfolioCategory() {
  // Get the category parameter from the URL
  const { category } = useParams();

  // Filter projects based on the category
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );
  console.log(filteredProjects, category);
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-6">{`Projects in Category: ${category.replace(
        /_/g,
        " "
      )}`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="border p-4 rounded shadow">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                Visit Site
              </a>
            </div>
          ))
        ) : (
          <p>No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default PortfolioCategory;
