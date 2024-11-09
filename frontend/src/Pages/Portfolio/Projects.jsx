import React from "react";

const projects = [
  {
    id: 1,
    name: "Tara Grill Groove",
    image: "/images/tara-grill-groove.png",
    description:
      "For the love of delicious food. Come with family & feel the joy of mouthwatering food",
    link: "https://tara-grill-groove.netlify.app/",
  },
  {
    id: 2,
    name: "Ninimi Restaurant",
    image: "/images/ninimi-restaurant.png",
    description:
      "Enjoy Our Delicious Meal, Savor the flavors of our exquisite dishes, crafted with passion and the freshest ingredients.",
    link: "https://ninimi-restaurant.netlify.app/",
  },
  {
    id: 3,
    name: "CAS Automobile Workshop",
    image: "/images/cas-automobile-workshop.png",
    description: "Cas Automobile Workshop: Qualified Car Repair Service Center",
    link: "https://cas-automobile-workshop.netlify.app/",
  },
  {
    id: 4,
    name: "Queen Catering Events",
    image: "/images/queen-catering-events.png",
    description:
      "Welcome to Queen Catering And Events, where culinary excellence meets outstanding service. We specialize in creating exceptional dining experiences for all events, from intimate gatherings to grand celebrations.",
    link: "https://queen-catering-events.netlify.app/",
  },
  {
    id: 5,
    name: "Mabella Cakes Catering",
    image: "/images/mabella-cakes-catering.png",
    description:
      "Super Crispy Mabella Cakes & Catering The Best Cake In Universe",
    link: "https://mabella-cakes-catering.netlify.app/",
  },
  {
    id: 6,
    name: "Cisco Autos",
    image: "/images/cisco-autos.png",
    description:
      "We are Cisco Autos, your premier destination for car dealership websites. Specializing in tailored online solutions for car dealerships.",
    link: "https://cisco-1.netlify.app/",
  },
  {
    id: 7,
    name: "Tuns Autotech",
    image: "/images/tuns-autotech.png",
    description:
      "Auto Maintenance & Repair Service. Maintaining your vehicle is essential for a smooth, reliable drive. Our Auto Maintenance & Repair Service offers comprehensive care to keep your car in peak condition for years.",
    link: "https://tuns-autotech.netlify.app/",
  },
  {
    id: 8,
    name: "Jericho Hospital",
    image: "/images/jericho-hospital.png",
    description:
      "Your most trusted health partner. At our health center, your well-being is our priority. With dedicated professionals and state-of-the-art facilities.",
    link: "https://jericho-hospital.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div className="w-full h-auto py-10">
      <h2 className="text-4xl md:text-5xl text-[#412001] font-Poppins text-center my-8">
        Previous Projects
      </h2>
      <div className="w-full h-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto w-10/12 md:w-[500px] h-[420px] bg-[#ffffff] border border-slate-200 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[260px] object-cover rounded-t"
            />
            <div className="px-4 w-full md:h-[170px]">
              <h4 className="text-lg text-[#412001] font-Raleway font-semibold my-2">
                {project.name}
              </h4>
              <p className="line-clamp-2 text-lg text-slate-700">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 mr-auto ml-3 p-2 px-3 text-sm text-blue-100 font-Poppins bg-black hover:bg-[#412001] rounded cursor-pointer"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
