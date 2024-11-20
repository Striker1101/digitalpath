import React from "react";

export default function Welcome() {
  return (
    <div
      className="w-full h-screen bg-background2 bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-4xl px-4 md:px-8 lg:px-10 text-center md:text-left">
        <h4 className="text-lg md:text-xl text-black font-Poppins mb-3">
          Hi, there
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-Roboto font-bold text-blue-950 leading-tight">
          Digital Experts.
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Roboto font-bold text-blue-900 mt-3 leading-tight">
          We Build Future Softwares
        </h1>
        <p className="text-black text-base md:text-lg font-Nunito mt-6">
          Hello! Thank you for your interest in our work. We're skilled website
          developers with a proven track record in creating responsive,
          user-friendly, and visually appealing websites tailored to meet the
          unique needs of various businesses.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-6 py-3 text-lg text-black hover:text-white font-Raleway border border-black hover:bg-blue-950 rounded transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
