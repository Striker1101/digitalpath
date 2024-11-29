import React from "react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "A history of successful projects with measurable results.",
    },
    {
      title: "Customized Solutions",
      description: "Tailored solutions to meet your unique business needs.",
    },
    {
      title: "Expert Team",
      description: "A highly skilled team with industry-leading expertise.",
    },
    {
      title: "Data-Driven Solutions",
      description: "Making decisions backed by data and analytics.",
    },
    {
      title: "Transparent Reporting",
      description: "Clear, accessible reports for tracking progress.",
    },
    {
      title: "Affordable Pricing Plans",
      description: "Flexible pricing to fit your budget.",
    },
  ];

  return (
    <div id="why-choose-us" className="mx-auto px-14 py-24 bg-background2">
      <h2 className="text-3xl text-black font-Nunito font-bold text-center mb-12">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border p-6 rounded-lg shadow-lg text-center"
          >
            <p className="text-xl text-black font-Raleway font-semibold mt-4">
              {reason.title}
            </p>
            <p className="mt-2 text-lg text-gray-900">{reason.description}</p>
            <a
              href="/#contact"
              className="w-1/2 mx-auto mt-6 py-2 text-sm text-gray-900 rounded border border-primary block hover:bg-primary hover:text-orange-300 transition duration-200 ease-in-out"
            >
              Contact us For {reason.title} Today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
