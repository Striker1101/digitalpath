import React from "react";

export default function ContactUs() {
  return (
    <div class=" px-4 w-full   text-center py-12 md:py-20 bg-primary text-white animate__animated animate__fadeInUp">
      <h3 class="text-3xl font-bold">Ready to Start Your Project?</h3>
      <p class="text-lg mt-4">
        Contact us today to discuss how we can bring your vision to life with a
        powerful web presence.
      </p>
      <a href="/contact">
        <button class="mt-6 px-8 py-3 bg-blue-950 text-white rounded hover:bg-white hover:text-primary transition duration-300">
          Contact Us
        </button>
      </a>
    </div>
  );
}
