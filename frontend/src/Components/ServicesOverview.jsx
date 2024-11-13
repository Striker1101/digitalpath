import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ServicesOverview({ services, btn_text, desc, title }) {
  return (
    <>
      <Header title={title} lineColor="blue" description={desc} />
      <section className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 hover:bg-blue-50 border border-gray-200 flex flex-col items-start space-y-3"
          >
            {/* FontAwesomeIcon for each service */}
            <div className="icon bg-blue-100 p-3 rounded-full mb-4 flex items-center justify-center">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-2xl text-blue-500"
              />
            </div>

            {/* Service title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h3>

            {/* CTA link */}
            <a
              href={service.link}
              className="text-blue-600 mt-2 font-medium hover:underline"
            >
              {btn_text}
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
