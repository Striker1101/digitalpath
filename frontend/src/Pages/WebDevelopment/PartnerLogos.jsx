import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../../Components/Header";
import partner from "../../Assets/images/logo.png";

export default function PartnerLogos() {
  // Define the logos data directly within the component
  const logos = [partner, partner, partner, partner];

  return (
    <>
      <Header
        title="Our Partners"
        lineColor="red"
        description="We are proud to collaborate with industry leaders and innovative companies in various fields."
      />

      <section className="p-8 flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3} // Adjust the number of logos per view based on design preference
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-play with 3-second delay
          loop
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-24 h-24 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
