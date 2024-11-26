import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { DataContext } from "../store";

export default function BlogPosts() {
  const { blogPosts } = useContext(DataContext);
  return (
    <div className="overflow-hidden py-8 md:py-20 bg-gray-100">
      <div className="mx-auto w-5/6 md:w-full py-8">
        <h2 className="text-3xl text-black font-bold text-center mb-10">
          Latest Blogs
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default to 1 slide on smaller screens
          autoplay
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide on screens >= 640px
            768: { slidesPerView: 2 }, // 2 slides on screens >= 768px
            1024: { slidesPerView: 3 }, // 3 slides on screens >= 1024px
          }}
          className="cursor-pointer"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index} className="px-4">
              <div className="mx-auto w-4/6 md:w-full py-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="mx-auto w-full md:w-[340px] h-44 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-md text-black font-Poppins font-semibold text-center">
                  {post.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
