import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import jericho_hospital from "../../Assets/images/jericho-hospital.png";
import tara_grill_groove from "../../Assets/images/tara-grill-groove.png";
import ninimi_restaurant from "../../Assets/images/ninimi-restaurant.png";
import cas_automobile_workshop from "../../Assets/images/cas-automobile-workshop.png";
import queen_catering_events from "../../Assets/images/queen-catering-events.png";
import cisco_autos from "../../Assets/images/cisco-autos.png";
import Header from "../../Components/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PortfolioHighlights() {
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
    <section className="p-8">
      <Header
        title="Our Portfolio"
        lineColor="orange"
        description="Take a look at our recent projects and see how we've helped businesses grow and succeed online."
      />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-lg text-orange-600 font-semibold">
                  {project.title}
                </h3>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
