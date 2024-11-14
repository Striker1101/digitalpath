import React from "react";

export default function KeyFeatures({ keyFeature }) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {keyFeature.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-blue-500 text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>
              {/* Feature Name */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {item.feature}
              </h3>
              {/* Optional Link */}
              {item.link && (
                <a
                  href={item.link}
                  className="text-blue-600 font-medium hover:underline text-center block"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
