import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { DataContext } from "../store";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Portfolio() {
  const { projects } = useContext(DataContext);

  return (
    <div id="portfolio" className="flex py-8 bg-gray-100">
      <div className="mx-auto w-full py-8 bg-gray-100">
        <h2 className="text-3xl text-black font-bold text-center mb-6">
          Our Projects
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="px-2 my-6 w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-lg text-black font-semibold text-center">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-500 transition text-center w-full block"
                >
                  See More
                </a>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
