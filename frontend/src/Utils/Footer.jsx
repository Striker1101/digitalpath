import React from "react";
import whatsapp from "../Assets/images/whatsapp.svg";
import facebook from "../Assets/images/facebook.svg";
import instagram from "../Assets/images/instagram.svg";
import linkinedin from "../Assets/images/linkedin-svgrepo-com.svg";
import x from "../Assets/images/x-social-media-logo-icon.svg";
import tictok from "../Assets/images/tiktok-svgrepo-com.svg";
import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-8">
        {/* Footer Top */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Title */}
          <div className="flex flex-col items-center md:items-start">
            <LazyLoadImage
              src={logo}
              alt="Digital Experts Logo"
              className="w-24 h-24 object-cover mb-4 transition-transform transform hover:scale-110"
            />
            <p className="text-3xl font-semibold font-Raleway text-white">
              DigitalPath
            </p>
            <p className="text-lg mt-2 text-gray-400">
              Leading Digital Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "Our Services", link: "/#services" },
                { name: "Why Choose Us", link: "/#why-choose-us" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "Digital Marketing", link: "/digital-marketing" },
                { name: "About Us", link: "/about-us" },
                { name: "Contact Us", link: "/contact-us" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-lg font-medium text-gray-300 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Contact Info</h3>
            <p className="text-lg text-gray-400">
              Email:{" "}
              <span className="text-gray-300">talk2us@digitalpath.com.ng</span>
            </p>
            <p className="text-lg text-gray-400">
              Phone: <span className="text-gray-300">+234 706 854 6898</span>
            </p>
            <p className="text-lg text-gray-400">
              Address:{" "}
              <span className="text-gray-300">
                1 liberty street, Ikorodu Lagos
              </span>
            </p>
          </div>

          {/* Privacy and Terms Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/privacy-policy"
                className="text-lg font-medium text-gray-300 hover:text-primary transition-all duration-300 ease-in-out"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-lg font-medium text-gray-300 hover:text-primary transition-all duration-300 ease-in-out"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-700 pt-8 md:flex-row md:justify-between md:pt-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2024{" "}
            <Link
              to={"/"}
              className="font-semibold text-primary hover:text-gray-300"
            >
              DigitalPath
            </Link>
            . All Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://api.whatsapp.com/send/?phone=2347068546898"
              aria-label="WhatsApp"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage
                src={whatsapp}
                alt="WhatsApp"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.facebook.com/Digitalexpertsng"
              aria-label="Facebook"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage
                src={facebook}
                alt="Facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/digitalexpertsng/"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage
                src={linkinedin}
                alt="LinkedIn"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://twitter.com/ProfitSplitAgc?s=09"
              aria-label="Twitter"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage src={x} alt="Twitter" className="h-10 w-10" />
            </a>
            <a
              href="https://www.instagram.com/digitalexperts_ng"
              aria-label="Instagram"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage
                src={instagram}
                alt="Instagram"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://tiktok.com/@digitalexperts_ng"
              aria-label="TikTok"
              className="opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <LazyLoadImage src={tictok} alt="TikTok" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
