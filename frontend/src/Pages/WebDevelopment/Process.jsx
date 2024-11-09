import React from "react";

export default function Process() {
  return (
    <>
      <div class="mx-auto w-11/12 md:w-full py-12 md:py-20 bg-white px-4 md:px-20 lg:px-40 text-center animate__animated animate__fadeInRight">
        <h3 class="  text-3xl font-bold text-primary mb-8">
          Our Development Process
        </h3>
        <p class="text-lg text-gray-800">
          We follow a streamlined process to ensure your project is executed
          seamlessly and delivered on time.
        </p>
        <div class="flex flex-col md:flex-row justify-between mt-10">
          <div class="mb-8 md:mb-0 md:w-1/3 px-4 py-6 bg-gray-50 rounded shadow-lg animate__animated animate__fadeInLeft">
            <h4 class=" text-blue-950 text-xl font-bold">1. Discovery</h4>
            <p class="text-gray-800 mt-2">
              We learn about your goals, audience, and vision to lay the
              foundation for a successful project.
            </p>
          </div>
          <div class="mb-8 md:mb-0 md:w-1/3 px-4 py-6 bg-gray-50 rounded shadow-lg animate__animated animate__fadeInUp">
            <h4 class=" text-blue-950 text-xl  font-bold">
              2. Design &amp; Development
            </h4>
            <p class="text-gray-800 mt-2">
              Our team crafts a visually appealing, user-friendly design, then
              codes the functionality with attention to detail.
            </p>
          </div>
          <div class="md:w-1/3 px-4 py-6 bg-gray-50 rounded shadow-lg animate__animated animate__fadeInRight">
            <h4 class=" text-blue-950 text-xl font-bold">
              3. Launch &amp; Support
            </h4>
            <p class="text-gray-800 mt-2">
              We ensure everything is perfect, then launch the site and provide
              ongoing support to help you grow.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full h-auto flex">
        <a
          href="/contact"
          class="mx-auto text-white text-2xl font-Poppins bg-blue-950 hover:bg-blue-900 rounded-lg px-16 py-4"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
