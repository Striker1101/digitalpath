import React from "react";
import Header from "../../Components/Header";

export default function WhyChooseUs({ reasons }) {
  return (
    <>
      <Header
        title="Why Choose Us"
        lineColor="green"
        description="Our commitment to quality, innovation, and client satisfaction sets us apart in delivering exceptional digital solutions."
      />

      <section className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="reason-card flex items-start bg-gray-50 p-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-100"
          >
            {/* Icon or numbered badge */}
            <div className="mr-4 flex-shrink-0">
              <span className="bg-blue-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
                {index + 1}
              </span>
            </div>

            {/* Reason description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {reason.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {/* Optional description for each reason */}
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
