import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import bg1 from "../../Assets/images/Web/bg/bg1.jpeg";
import bg2 from "../../Assets/images/Web/bg/bg2.jpeg";
import bg3 from "../../Assets/images/Web/bg/bg3.jpeg";
import bg4 from "../../Assets/images/Web/bg/bg4.jpg";
import bg5 from "../../Assets/images/Web/bg/bg5.jpeg";

export default function HeroSection() {
  // Array of image URLs for the background slider
  const backgroundImages = [bg1, bg2, bg3, bg4, bg5];

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
        <div className="space-x-4 mt-4 flex flex-wrap align-middle justify-center">
          <Link
            to={"/web-development/#contact"}
            className="px-4 my-2 py-4 bg-primary hover:bg-opacity-90 transition-all font-bold text-[#f1f1f1] rounded mr-4"
          >
            Explore Our Services
          </Link>
          <Link
            href=""
            className="px-6 py-4 border border-white hover:bg-white hover:text-black transition-all rounded-md"
          >
            Contact Us on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
