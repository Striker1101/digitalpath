import React, { useEffect, useState } from "react";
import bg1 from "../../Assets/images/bg1.jpg";
import bg6 from "../../Assets/images/bg6.jpg";
import bg2 from "../../Assets/images/bg2.jpg";
export default function Welcome() {
  const images = [bg1, bg6, bg2]; // Array of image sources
  const [currentImage, setCurrentImage] = useState(images[0]); // Initial image

  useEffect(() => {
    // Function to select a random image from the array
    const changeImage = () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
    };

    // Set an interval to change the image every 2 seconds
    const interval = setInterval(changeImage, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="w-full bg-white pt-20">
      <div className="relative h-[100vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out back opacity-100"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundPosition: " center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out back opacity-0"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out back opacity-0"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#1f1d1da6] flex flex-col items-center text-white">
          <div
            className="mx-auto mt-44 w-11/12 md:w-[900px] h-auto flex flex-col items-center"
            style={{ opacity: "1", transform: "none" }}
          >
            <h1
              className="text-3xl md:text-6xl text-center font-Roboto font-bold"
              style={{ opacity: "1", transform: "none" }}
            >
              Elevate Your Online Presence
            </h1>
            <p
              className="text-lg md:text-2xl text-center mt-4"
              style={{ opacity: "1", transform: "none" }}
            >
              We specialize in Fullstack Development &amp; Digital Marketing
              Strategies for your business.
            </p>
            <div
              className="mt-12 md:mt-6"
              style={{ opacity: "1", transform: "none" }}
            >
              <a
                href="#services"
                className="px-4 py-4 bg-primary hover:bg-opacity-90 transition-all font-bold text-[#f1f1f1] rounded mr-4"
              >
                Explore Our Services
              </a>
              <a
                href="#contact-us"
                className="px-6 py-4 border border-white hover:bg-white hover:text-black transition-all rounded-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/+2347068546898"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 z-20"
        aria-label="Chat on WhatsApp"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>
    </div>
  );
}
