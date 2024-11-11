import React from "react";
import dm_banner from "../../Assets/images/DM_banner.png";
export default function Welcome() {
  return (
    <div
      className="w-full h-screen bg-cover"
      style={{
        backgroundImage: `url(${dm_banner})`,
      }}
    >
      <div
        className="pt-32 md:pt-44 m-auto md:mx-20 w-full md:w-3/5 h-auto flex flex-col items-start"
        style={{ opacity: "1" }}
      >
        <h4
          className="mb-3 mx-auto w-10/12 md:w-auto md:mx-0 text-black text-lg font-Poppins"
          style={{ opacity: "1", transform: "none" }}
        >
          We are
        </h4>
        <h1
          className="text-4xl md:text-5xl mx-auto w-10/12 md:w-auto md:mx-0 font-Roboto font-bold text-primary uppercase"
          style={{ opacity: "1", transform: "none" }}
        >
          Digital marketing experts
        </h1>
        <h1
          className="py-3 mx-auto md:mx-0 w-10/12 md:w-auto text-4xl md:text-5xl font-Roboto font-bold text-blue-950"
          style={{ opacity: "1", transform: "none" }}
        >
          We Grow Brands Online.
        </h1>
        <div
          className="mt-4 mx-auto md:mx-0 w-10/12 md:w-3/4 h-auto flex flex-col items-start"
          style={{ opacity: "1", transform: "none" }}
        >
          <p className="text-black text-lg font-Nunito">
            Maximizing Your Brand's Potential with Proven Digital
            Strategies—where innovation meets strategy for unmatched online
            growth, empowering brands to lead, influence, and thrive in the
            digital age.
          </p>
        </div>
        <a
          href="/contact"
          className="mt-10 ml-10 md:ml-0 text-xl text-black hover:text-white p-3 px-8 font-Raleway bg-primary hover:bg-[#d38117] rounded"
          style={{ opacity: "1", transform: "none" }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
