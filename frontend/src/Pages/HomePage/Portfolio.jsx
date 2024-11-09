import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import jericho_hospital from "../../Assets/images/jericho-hospital.png";
import tara_grill_groove from "../../Assets/images/tara-grill-groove.png";
import ninimi_restaurant from "../../Assets/images/ninimi-restaurant.png";
import cas_automobile_workshop from "../../Assets/images/cas-automobile-workshop.png";
import queen_catering_events from "../../Assets/images/queen-catering-events.png";
import cisco_autos from "../../Assets/images/cisco-autos.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Jericho Hospital",
      link: "https://jericho-hospital.netlify.app/",
      image: jericho_hospital,
    },
    {
      title: "Tara Grill Groove",
      link: "https://tara-grill-groove.netlify.app/",
      image: tara_grill_groove,
    },
    {
      title: "Ninimi Restaurant",
      link: "https://ninimi-restaurant.netlify.app/",
      image: ninimi_restaurant,
    },
    {
      title: "CAS Automobile Workshop",
      link: "https://cas-automobile-workshop.netlify.app/",
      image: cas_automobile_workshop,
    },
    {
      title: "Queen Catering Events",
      link: "https://queen-catering-events.netlify.app/",
      image: queen_catering_events,
    },
    {
      title: "Cisco Autos",
      link: "https://cisco-1.netlify.app/",
      image: cisco_autos,
    },
  ];

  return (
    <div id="portfolio" className="flex py-8 bg-gray-100">
      <div className="mx-auto w-full py-8 bg-gray-100">
        <h2 className="text-3xl text-black font-bold text-center mb-6">
          Our Projects
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="px-2 my-6 w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-lg text-black font-semibold text-center">
                  {project.title}
                </h3>
                <a
                  href="/portfolio"
                  className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-500 transition text-center w-full block"
                >
                  More
                </a>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
