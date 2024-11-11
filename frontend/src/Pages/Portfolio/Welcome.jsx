import React from "react";

export default function Welcome() {
  return (
    <div className="w-full h-[700px] md:h-screen bg-background2 bg-no-repeat flex flex-col items-center">
      <div className="mt-32 md:mt-48 m-auto w-full md:w-3/5 h-auto flex flex-col items-start">
        <h4
          className="mb-3 mx-auto w-10/12 md:w-auto md:mx-0 text-black text-xl md:text-lg font-Poppins"
          style={{ opacity: "1", transform: "none" }}
        >
          Hi, there
        </h4>
        <h1
          className="text-5xl md:text-[100px] mx-auto w-10/12 md:w-auto md:mx-0 md:text-6xl font-Roboto font-bold text-blue-950"
          style={{ opacity: "1", transform: "none" }}
        >
          Digital Experts.
        </h1>
        <h1
          className="py-3 mx-auto md:mx-0 w-10/12 md:w-auto text-4xl md:text-5xl font-Roboto font-bold text-blue-900"
          style={{ opacity: "1", transform: "none" }}
        >
          We Build Future Softwares
        </h1>
        <div
          className="mt-4 mx-auto md:mx-0 w-10/12 md:w-3/4 h-auto flex flex-col items-start"
          style={{ opacity: "1", transform: "none" }}
        >
          <p className="text-black text-xl md:text-lg font-Nunito">
            Hello! Thank you for your interest in our work. We're skilled
            website developers with a proven track record in creating
            responsive, user-friendly, and visually appealing websites tailored
            to meet the unique needs of various businesses.
          </p>
        </div>
        <a
          href="/contact"
          className="mt-10 ml-10 md:ml-0 text-lg text-black hover:text-white p-2 px-4 font-Raleway border border-black hover:bg-blue-950 rounded"
          style={{ opacity: "1", transform: "none" }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
