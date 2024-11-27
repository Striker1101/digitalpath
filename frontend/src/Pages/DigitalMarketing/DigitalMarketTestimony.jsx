import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../Components/Header";

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

export default function DigitalMarketingTestimony({ clients_lists }) {
  return (
    <div className="py-8 bg-white">
      <Header
        title="Client Testimonials"
        lineColor="teal"
        description="Hear from our satisfied clients and learn how our services have made a difference in their business journeys."
      />
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

        <div className="mt-8 flex justify-center items-center w-100 ">
          <div className="w-fit  bg-gray-50 p-6 rounded-lg shadow-lg ">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Client Achievements
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              {clients_lists.map((client, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-200"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
