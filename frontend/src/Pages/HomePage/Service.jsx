import React, { useEffect, useState } from "react";
import bg1 from "../../Assets/images/bg1.jpg";
import bg2 from "../../Assets/images/bg_a.png";
import bg3 from "../../Assets/images/liquid-cheese.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  faCode,
  faWrench,
  faShoppingCart,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ServiceCard({ title, icon, link }) {
  return (
    <div className="mx-auto w-[400px] bg-[#adadab3a] border p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <span aria-label={title} className="text-4xl text-primary">
        {icon}
      </span>
      <h4 className="text-xl text-black font-semibold mt-4 mb-2">{title}</h4>
      <a
        className="mt-4 inline-block px-4 py-2 text-black bg-white rounded hover:bg-opacity-90 transition-all"
        href={link}
      >
        Learn More
      </a>
    </div>
  );
}

export default function Service() {
  const images = [bg1, bg2, bg3]; // Array of image sources
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

  const services = [
    { title: "Maintenance and SEO Improvement", icon: faWrench },
    { title: "Business Website Development", icon: faCode },
    { title: "CMS Website Development", icon: faServer },
    { title: "E-commerce Website Development", icon: faShoppingCart },
    // { title: "Other Web Services", icon: faBolt },
  ];
  return (
    <section id="our-services">
      <div id="services" className="bg-white">
        <div className="w-full h-auto mx-auto backdrop-blur-sm">
          <h2 className="text-4xl text-primary font-Poppins text-center my-12">
            Our Services
          </h2>
          <div className="relative flex mx-auto w-full h-[700px]">
            <LazyLoadImage
              src={currentImage}
              alt="Background "
              className="w-full h-auto object-cover transition-opacity duration-1000"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 px-6 bg-[#0e0d0d98] hover:bg-[#0a0a0ab0] flex flex-col items-center z-20">
              <h3 className="text-4xl md:text-5xl font-Raleway font-bold text-white text-center mt-20 md:mt-40">
                Web Development Services
              </h3>
              <h3 className="text-xl md:text-3xl font-Raleway text-white text-center my-10">
                We provide our clients with cutting-edge web and software
                solutions
              </h3>
              <div className="w-full md:w-10/12 h-auto grid grid-cols-2 gap-6 items-center">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center text-white font-Roboto mx-auto py-3 transition transform hover:scale-105 duration-300"
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-4xl md:text-5xl text-primary animate-bounce mb-4"
                    />
                    <p className="text-sm md:text-xl">{service.title}</p>
                  </div>
                ))}
              </div>
              <Link to={"/web-development"}>
                <button
                  aria-label="learn more"
                  className="text-xl font-Raleway text-white hover:bg-white hover:text-black text-center my-10 p-3 px-6 border border-white rounded-full cursor-pointer transition duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="py-20 bg-white">
            <h3 className="text-4xl md:text-5xl py-9 font-Raleway font-bold text-primary text-center">
              Digital Marketing Services
            </h3>
            <div className="flex flex-row flex-wrap items-center gap-8">
              <ServiceCard
                title="Search Engine Optimization (SEO)"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-4xl text-primary"
                    height="45"
                    width="45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                  </svg>
                }
                link="/digital-marketing"
              />
              <ServiceCard
                title="Pay-Per-Click Advertising (PPC)"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-4xl text-primary"
                    height="45"
                    width="45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9 9 5 12 1.774-5.226L21 14 9 9z"></path>
                    <path d="m16.071 16.071 4.243 4.243"></path>
                    <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"></path>
                  </svg>
                }
                link="/digital-marketing"
              />
              <ServiceCard
                title="Social Media Marketing"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-4xl text-primary"
                    height="55"
                    width="55"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zm-2.77 4.43-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4 3.99 3.99 1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99 22 17l-3.99-3.99z"></path>
                  </svg>
                }
                link="/digital-marketing"
              />
              <ServiceCard
                title="Content Marketing"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-4xl text-primary"
                    height="45"
                    width="45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path>
                  </svg>
                }
                link="/digital-marketing"
              />
              <ServiceCard
                title="Other Marketing Services"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-4xl text-primary"
                    height="45"
                    width="45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M144 0c-13.3 0-24 10.7-24 24V142.1L97 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24zM360 200a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM184 296a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm312 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 345.5V400c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V345.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 441.5V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 468.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 441.5V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V441.5zM415 153l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V142.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
                  </svg>
                }
                link="/digital-marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
