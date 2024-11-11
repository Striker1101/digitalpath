import React from "react";

export default function Highlight() {
  return (
    <div className="w-full py-16   bg-[#f3d8411f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Crafting beautiful, responsive websites that convert visitors into
              customers.
            </h2>
            <p className="text-gray-600 mb-6">
              We specialize in creating user-friendly websites that enhance
              customer engagement and drive conversions.
            </p>
            <a
              href="/web-development"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="flex flex-col justify-center items-start bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Powering growth with targeted marketing strategies.
            </h2>
            <p className="text-gray-600 mb-6">
              Our digital marketing services help your business reach the right
              audience and maximize its potential.
            </p>
            <a
              href="/digital-marketing"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
