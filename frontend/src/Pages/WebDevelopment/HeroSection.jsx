import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import jericho_hospital from "../../Assets/images/jericho-hospital.png";
import tara_grill_groove from "../../Assets/images/tara-grill-groove.png";
import ninimi_restaurant from "../../Assets/images/ninimi-restaurant.png";
import cas_automobile_workshop from "../../Assets/images/cas-automobile-workshop.png";
import queen_catering_events from "../../Assets/images/queen-catering-events.png";
import cisco_autos from "../../Assets/images/cisco-autos.png";
export default function HeroSection() {
  // Array of image URLs for the background slider
  const backgroundImages = [
    jericho_hospital, // Replace with actual image paths
    tara_grill_groove,
    ninimi_restaurant,
    cas_automobile_workshop,
    queen_catering_events,
    cisco_autos,
  ];

  return (
    <section className="hero-section h-screen text-center text-white relative">
      {/* Swiper for background image slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 seconds delay
        loop
        className="absolute inset-0 h-full w-full"
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                opacity: "0.3",
                visibility: "0.5",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay for darkening the background */}
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        <h1 className="text-5xl font-bold">Elevate Your Online Presence</h1>
        <p className="text-xl">Transforming Your Ideas into Digital Reality</p>
        <div className="space-x-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 my-3 rounded">
            Explore Our Services
          </button>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded">
            <Link to={"/web-development/#contact"}>Contact Us on WhatsApp</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
