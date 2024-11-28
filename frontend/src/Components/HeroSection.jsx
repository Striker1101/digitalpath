import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <section className=" hero-section h-screen text-center text-white relative">
      {/* Swiper for background image slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 seconds delay
        loop
        className="absolute top-0 inset-0 h-full w-full"
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

      {/* Content centered in the middle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 space-y-6 px-4">
        <h1 className="text-4xl lg:text-6xl md:text-5xl font-extrabold leading-tight">
          {big_title}
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl">
          {small_title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={first_button_link}
            className="px-6 py-3 text-lg font-bold bg-primary text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
          >
            {first_button_text}
          </Link>
          <Link
            to={second_button_link}
            className="px-6 py-3 text-lg font-bold border border-white text-white hover:bg-white hover:text-black rounded-lg shadow-lg transition-all"
          >
            {second_button_text}
          </Link>
        </div>
      </div>
    </section>
  );
}
