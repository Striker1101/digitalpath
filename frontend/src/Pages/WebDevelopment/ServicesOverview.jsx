import React from "react";
import Header from "../../Components/Header";

// Updated services array with `name` and `link` properties
const services = [
  {
    name: "API Development and Integration",
    link: "api_development_integration",
  },
  { name: "Software Development", link: "software_development" },
  { name: "Web & Mobile App Development", link: "web_mobile_app_development" },
  {
    name: "Business Website Development",
    link: "business_website_improvement",
  },
  { name: "Website UI/UX Design & Development", link: "website_ui_ux_design" },
  { name: "SEO Improvement", link: "seo_improvement" },
  { name: "Maintenance and Support", link: "maintenance_support" },
  { name: "CMS Website Development", link: "cms_website_development" },
  {
    name: "E-commerce Website Development",
    link: "e-commerce_website_development",
  },
  {
    name: "Blogging Website Development",
    link: "blogging_website_development",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <Header
        title="Our Services"
        lineColor="blue"
        description="Discover a variety of professional services designed to elevate your digital presence and streamline your business operations."
      />
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 hover:bg-blue-50 border border-gray-200 flex flex-col items-start space-y-3"
          >
            {/* Service icon (optional, e.g., FontAwesome icon) */}
            <div className="icon bg-blue-100 p-3 rounded-full text-blue-500 mb-4">
              <i className="fas fa-cogs text-2xl"></i>
            </div>

            {/* Service title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h3>

            {/* CTA link */}
            <a
              href={`/portfolio/${service.link}`}
              className="text-blue-600 mt-2 font-medium hover:underline"
            >
              See More
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
