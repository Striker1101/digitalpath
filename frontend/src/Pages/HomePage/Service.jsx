import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FixedSizeGrid as Grid } from "react-window";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg1 from "../../Assets/images/bg1.jpg";
import bg2 from "../../Assets/images/bg_a.png";
import bg3 from "../../Assets/images/liquid-cheese.png";
import { DataContext } from "../../store";

function ServiceCard({ title, icon, link }) {
  return (
    <div className="w-[400px] mx-auto bg-[#adadab3a] border p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <FontAwesomeIcon
        icon={icon}
        className="text-4xl md:text-5xl text-primary mb-4"
      />
      <h4 className="text-xl text-black font-semibold mt-4 mb-2">{title}</h4>
      <a
        className="mt-4 px-4 py-2 text-black bg-white rounded hover:bg-opacity-90 transition-all"
        href={link}
      >
        Learn More
      </a>
    </div>
  );
}

export default function ServicesSection() {
  // Array of background images for rotation
  const backgroundImages = [bg1, bg2, bg3];
  const [currentBackground, setCurrentBackground] = useState(
    backgroundImages[0]
  );

  const { webServices, digitalServices } = useContext(DataContext);

  // Rotate background images every 2 seconds
  useEffect(() => {
    const rotateBackground = () => {
      const randomImage =
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setCurrentBackground(randomImage);
    };

    const interval = setInterval(rotateBackground, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [backgroundImages]);

  // Media queries for responsive grid columns
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Grid column counts for web services
  const webColumns = isLaptop ? 4 : isTablet ? 3 : 2;
  const webColumnWidth = isLaptop ? 280 : isTablet ? 240 : 150;
  const webRowHeight = 150;

  // Grid column counts for digital services
  const digitalColumns = isLaptop ? 4 : isTablet ? 3 : 1;
  const digitalColumnWidth = 300;
  const digitalRowHeight = 250;

  // Cell renderer for Web Services
  const WebServiceCell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * webColumns + columnIndex;
    if (index >= webServices.length) return null;

    const service = webServices[index];
    return (
      <div
        style={style}
        className="flex flex-col gap-3 m-3 items-center text-center text-white font-Roboto mx-auto py-3 transition transform hover:scale-105 duration-300"
      >
        <FontAwesomeIcon
          icon={service.icon}
          className="text-4xl md:text-5xl text-primary animate-bounce mb-4"
        />
        <p className="text-xs md:text-lg">{service.name}</p>
      </div>
    );
  };

  // Cell renderer for Digital Services
  const DigitalServiceCell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * digitalColumns + columnIndex;
    if (index >= digitalServices.length) return null;

    const service = digitalServices[index];
    return (
      <div
        style={{
          ...style,
          padding: "10px", // Adjust padding for the gap
        }}
        className="flex items-center justify-center m-3"
      >
        <ServiceCard
          title={service.name}
          icon={service.icon}
          link={service.link}
        />
      </div>
    );
  };

  return (
    <section id="services">
      <div className="bg-white">
        <div className="w-full mx-auto backdrop-blur-sm">
          <h2 className="text-4xl text-primary font-Poppins text-center my-12">
            Our Services
          </h2>

          {/* Web Development Services */}
          <div className="relative flex mx-auto w-full h-[900px]">
            <img
              src={currentBackground}
              alt="Background"
              className="w-full h-auto object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 px-6 bg-[#0e0d0d98] hover:bg-[#0a0a0ab0] flex flex-col items-center z-20">
              <h3 className="text-4xl md:text-5xl font-Raleway font-bold text-white text-center mt-20 md:mt-40">
                Web Development Services
              </h3>
              <h3 className="text-xl md:text-3xl font-Raleway text-white text-center my-10">
                We provide our clients with cutting-edge web and software
                solutions.
              </h3>

              <div className="flex justify-center py-10">
                <Grid
                  columnCount={webColumns}
                  rowCount={Math.ceil(webServices.length / webColumns)}
                  columnWidth={webColumnWidth}
                  rowHeight={webRowHeight}
                  width={webColumnWidth * webColumns}
                  height={350}
                >
                  {WebServiceCell}
                </Grid>
              </div>

              <Link to="/web-development">
                <button className="text-xl font-Raleway text-white hover:bg-white hover:text-black border border-white rounded-full py-3 px-6 transition duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div className="bg-white">
            <h3 className="text-4xl md:text-5xl py-9 font-Raleway font-bold text-primary text-center">
              Digital Marketing Services
            </h3>
            <div className="flex justify-center py-10">
              <Grid
                columnCount={digitalColumns}
                rowCount={Math.ceil(digitalServices.length / digitalColumns)}
                columnWidth={digitalColumnWidth}
                rowHeight={digitalRowHeight}
                width={digitalColumnWidth * digitalColumns}
                height={600}
                className="gap-4"
              >
                {DigitalServiceCell}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
