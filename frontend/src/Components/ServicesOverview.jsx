import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesOverview({
  services,
  btn_text,
  desc,
  title,
  link_avail = true,
}) {
  return (
    <>
      <Header title={title} lineColor="blue" description={desc} />
      <section
        className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        id="services"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center"
          >
            {/* Icon with Title */}
            <div className="icon-container bg-blue-100 p-4 rounded-full mb-6 flex items-center justify-center shadow-md">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-3xl text-blue-500"
              />
            </div>

            {/* Service Title */}
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {service.name}
            </h3>

            {/* Service Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {service.desc}
            </p>

            {/* CTA Link */}
            {link_avail && service.link && (
              <a
                href={service.link}
                className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                {btn_text} &rarr;
              </a>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
