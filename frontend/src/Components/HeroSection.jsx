import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HeroSection({
  backgroundImages,
  big_title,
  small_title,
  first_button_text,
  first_button_link,
  second_button_text,
  second_button_link,
}) {
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
        <h1 className="text-5xl font-bold">{big_title}</h1>
        <p className="text-xl">{small_title}</p>
        <div className="space-x-4 mt-4 flex flex-wrap align-middle justify-center">
          <Link
            to={first_button_link}
            className="px-4 my-2 py-4 bg-primary hover:bg-opacity-90 transition-all font-bold text-[#f1f1f1] rounded mr-4"
          >
            {first_button_text}
          </Link>
          <Link
            to={second_button_link}
            className="px-6 py-4 border border-white hover:bg-white hover:text-black transition-all rounded-md"
          >
            {second_button_text}
          </Link>
        </div>
      </div>
    </section>
  );
}
