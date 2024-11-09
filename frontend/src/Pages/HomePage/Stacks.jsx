import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import nextjs from "../../Assets/images/nextjs.png";
import firebase from "../../Assets/images/firebase.png";
import mysql from "../../Assets/images/mysql.png";
import download from "../../Assets/images/download.jpeg";
import nestjs from "../../Assets/images/nestjs.png";
import { Autoplay } from "swiper/modules";

const stackItems = [
  { src: nextjs, alt: "Partner Logo 1" },
  { src: firebase, alt: "Partner Logo 2" },
  { src: mysql, alt: "Partner Logo 3" },
  { src: download, alt: "Partner Logo 4" },
  { src: nestjs, alt: "Partner Logo 5" },
];

export default function Stacks() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {stackItems.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.src}
            alt={item.alt}
            className="w-44 h-24 object-contain mb-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
