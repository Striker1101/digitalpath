import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Stacks({ stackItems }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={4}
      pagination
      autoplay={{
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {stackItems.map((item, index) => (
        <SwiperSlide key={index}>
          <LazyLoadImage
            src={item.src}
            alt={item.alt}
            className="w-44 h-24 object-contain mb-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
