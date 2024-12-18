import React, { useState } from "react";
import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/#services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Digital Marketing",
      link: "/digital-marketing",
    },
    {
      name: "Web Development",
      link: "/web-development",
    },
    {
      name: "Why Choose Us",
      link: "/#why-choose-us",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 flex flex-row w-full h-auto px-4 py-4 items-center backdrop-blur-md bg-[#ffffff] border-b border-[#ffffff44] z-20">
        <a href="/" className="m-auto ml-2">
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="w-12 h-12 object-cover"
          />
        </a>

        {/* Main menu for large screens */}
        <div className="ml-auto hidden md:flex flex-row justify-center items-center space-x-4">
          {links.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="text-[16px] px-3 text-[#381d0d] hover:text-primary font-Poppins hover:font-bold cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger icon for mobile screens */}
        <button
          className="ml-auto md:hidden text-[#381d0d] focus:outline-none"
          onClick={toggleSidebar}
          aria-label="toggle side bar"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-30 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-[#eeeeee]">
          <h2 className="text-lg font-bold text-[#381d0d]">Menu</h2>
          <button
            aria-label="current color"
            onClick={closeSidebar}
            className="focus:outline-none"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#381d0d]"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <div className="flex flex-col space-y-4 p-4">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={closeSidebar}
              className="text-[#381d0d] text-[16px] hover:text-primary font-Poppins"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
