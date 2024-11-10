import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CounterComponent from "../../Components/CounterComponent";

const testimonyData = [
  {
    quote: "This company transformed my online presence! Highly recommended!",
    name: "Chinedu Okeke",
    company: "Okeke Ventures",
  },
  {
    quote:
      "Outstanding service and fantastic results. They know what they're doing!",
    name: "Amina Ibrahim",
    company: "Ibrahim & Sons",
  },
  {
    quote: "Professional and reliable. My business has never been better.",
    name: "Funmi Adebayo",
    company: "Adebayo Enterprises",
  },
];

export default function Testimony() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          What Our Clients Say
        </h2>

        <div className="mx-auto w-full md:w-[600px] space-y-4 mb-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonyData.map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-gray-900 italic">{`"${testimony.quote}"`}</p>
                  <p className="mt-6 text-gray-800 font-semibold">
                    {testimony.name}
                  </p>
                  <p className="text-gray-500">{testimony.company}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col md:flex-row justify-center my-16 gap-y-9 text-black">
          <div className="mx-auto md:mx-4 w-3/5 md:w-auto p-4 text-center rounded-md border-2 border-primary">
            <h3 className="text-xl font-Nunito font-bold">
              Completed Projects
            </h3>
            <p className="text-3xl">
              {<CounterComponent defaultCount={381} />}
            </p>
          </div>

          <div className="mx-auto md:mx-4 w-3/5 md:w-auto p-4 text-center rounded-md border-2 border-primary">
            <h3 className="text-xl font-Nunito font-bold">Happy Customers</h3>
            <p className="text-3xl">
              {<CounterComponent defaultCount={244} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
