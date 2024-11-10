import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import blog_thump from "../../Assets/images/blog_thumb.png";
import Header from "../../Components/Header";

export default function BlogHighlights() {
  const blogPosts = [
    {
      title: "Top 5 Trends in Web Development",
      thumbnail: blog_thump,
    },
    {
      title: "Improving SEO for Your Business Website",
      thumbnail: blog_thump,
    },
    {
      title: "Why UI/UX Matters in Modern Websites",
      thumbnail: blog_thump,
    },
    {
      title: "E-commerce Essentials for 2024",
      thumbnail: blog_thump,
    },
    {
      title: "Choosing the Right CMS for Your Needs",
      thumbnail: blog_thump,
    },
  ];

  return (
    <section className="p-8">
      <Header
        title="Blog Highlights"
        lineColor="purple"
        description="Stay informed with the latest insights and trends in technology, web development, and digital strategy."
      />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        autoplay
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        loop={true}
        className="flex space-x-6"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card mx-5 bg-white w-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 transform hover:scale-105">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-36 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">Read more...</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
