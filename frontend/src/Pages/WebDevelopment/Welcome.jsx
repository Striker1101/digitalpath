import React from "react";

export default function Welcome() {
  return (
    <div class="relative w-full h-screen bg-background2 bg-center  flex items-center justify-center">
      <div class="text-center text-blue-950 px-6 animate__animated animate__fadeInDown">
        <h1 class="text-4xl md:text-7xl font-bold">
          Professional Web Development
        </h1>
        <p class="text-lg md:text-3xl mt-4">
          Crafting responsive, efficient, and visually stunning websites.
        </p>
        <a href="/contact">
          <button class="mt-20 px-6 py-3 text-2xl bg-blue-900 hover:bg-amber-400 text-white rounded   transition duration-300">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}
