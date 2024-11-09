import React from "react";

export default function Services() {
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Tailored solutions designed from the ground up to meet your unique business needs and brand identity.",
    },
    {
      title: "Responsive & Mobile-Friendly Design",
      description:
        "Optimized for all devices, ensuring a seamless experience across desktops, tablets, and mobile phones.",
    },
    {
      title: "E-commerce Development",
      description:
        "Comprehensive online stores that provide an exceptional shopping experience, from product displays to checkout.",
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "We ensure your website is fast, efficient, and ranks high on search engines for improved visibility and engagement.",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "Flexible and user-friendly CMS options like WordPress and custom solutions that put you in control.",
    },
  ];

  return (
    <div className="mx-auto w-11/12 md:w-full py-12 md:py-20 bg-gray-50 animate__animated animate__fadeInLeft">
      <h3 className="text-3xl font-bold text-center text-primary mb-8">
        Our Web Development Services
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-white p-6 rounded shadow-lg animate__animated animate__zoomIn"
          >
            <h4 className="text-xl font-bold text-primary">{service.title}</h4>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
