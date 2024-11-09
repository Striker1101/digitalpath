import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import blog_thump from "../../Assets/images/blog_thumb.png";
const blogPosts = [
  {
    title: "Tips for Building a Successful E-commerce Site",
    image: blog_thump,
  },
  {
    title: "Understanding Fullstack Development",
    image: blog_thump,
  },
  {
    title: "Top 10 Digital Marketing Strategies",
    image: blog_thump,
  },
  {
    title: "How to Boost Your Website Traffic",
    image: blog_thump,
  },
  { title: "SEO Basics for Beginners", image: blog_thump },
  {
    title: "The Importance of Responsive Design",
    image: blog_thump,
  },
  { title: "Email Marketing Best Practices", image: blog_thump },
  {
    title: "Content Marketing Trends in 2024",
    image: blog_thump,
  },
  { title: "Understanding Google Analytics", image: blog_thump },
  {
    title: "Creating Engaging Social Media Content",
    image: blog_thump,
  },
];

export default function BlogPosts() {
  return (
    <div className="overflow-hidden py-8 md:py-20 bg-gray-100">
      <div className="mx-auto w-5/6 md:w-full py-8">
        <h2 className="text-3xl text-black font-bold text-center mb-10">
          Latest Blogs
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
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
