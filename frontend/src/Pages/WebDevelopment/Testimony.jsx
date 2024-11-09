import React from "react";

export default function Testimony() {
  return (
    <div class=" mx-auto w-11/12 md:w-full  py-12 md:py-20 bg-gray-50 text-center animate__animated animate__fadeInUp">
      <h3 class="text-3xl font-bold text-primary mb-8">What Our Clients Say</h3>
      <div class="flex flex-wrap justify-center gap-8">
        <div class="w-full md:w-1/3 p-6 bg-white rounded shadow-lg">
          <p class="text-gray-700">
            “Digital Experts built our website from scratch. Their work exceeded
            our expectations and helped us gain more visibility.”
          </p>
          <p class="text-primary mt-4 font-bold">Imoh Brahmi</p>
        </div>
        <div class="w-full md:w-1/3 p-6 bg-white rounded shadow-lg">
          <p class="text-gray-700">
            “From concept to launch, they handled everything professionally and
            provided excellent support post-launch.”
          </p>
          <p class="text-primary mt-4 font-bold">Folashade Peter </p>
        </div>
        <div class="w-full md:w-1/3 p-6 bg-white rounded shadow-lg">
          <p class="text-gray-700">
            “The team’s expertise and commitment made it easy to build a site
            that aligns with our business goals.”
          </p>
          <p class="text-primary mt-4 font-bold">Mercy Ike</p>
        </div>
      </div>
    </div>
  );
}
