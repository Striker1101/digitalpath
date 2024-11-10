import React from "react";
import whatsapp from "../Assets/images/whatsapp.svg";
import facebook from "../Assets/images/facebook.svg";
import instagram from "../Assets/images/instagram.svg";
import linkinedin from "../Assets/images/linkedin-svgrepo-com.svg";
import x from "../Assets/images/x-social-media-logo-icon.svg";
import tictok from "../Assets/images/tiktok-svgrepo-com.svg";
import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative w-full py-12 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Digital Experts Logo"
              className="w-20 h-20 object-cover"
            />
            <p className="px-2 text-3xl font-Raleway text-[#241508] font-bold">
              Digital Experts
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-y-2 mt-10">
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
                className="font-medium text-black hover:text-primary text-sm md:text-md"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-center border-t py-4 md:flex-row md:justify-between">
          <p className="text-sm font-normal text-black text-center">
            © 2024{" "}
            <a
              href="https://material-tailwind.com/"
              className="font-semibold text-primary"
            >
              Digital Experts
            </a>
            . All Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://api.whatsapp.com/send/?phone=2347068546898"
              aria-label="WhatsApp"
              className="opacity-80 hover:opacity-100"
            >
              <img src={whatsapp} alt="WhatsApp" className="h-11 w-11" />
            </a>
            <a
              href="https://www.facebook.com/Digitalexpertsng"
              aria-label="Facebook"
              className="opacity-80 hover:opacity-100"
            >
              <img src={facebook} alt="facebook" className="h-11 w-11" />
            </a>
            <a
              href="https://www.linkedin.com/company/digitalexpertsng/"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100"
            >
              <img src={linkinedin} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="https://twitter.com/ProfitSplitAgc?s=09"
              aria-label="Twitter"
              className="opacity-80 hover:opacity-100"
            >
              <img src={x} alt="Twitter" className="w-9 h-9" />
            </a>
            <a
              href="https://www.instagram.com/digitalexperts_ng"
              aria-label="Instagram"
              className="opacity-80 hover:opacity-100"
            >
              <img src={instagram} alt="instagram" className="w-10 h-10" />
            </a>
            <a
              href="https://tiktok.com/@digitalexperts_ng"
              aria-label="tictok"
              className="block antialiased font-sans text-base font-light leading-relaxed text-inherit opacity-80 transition-opacity hover:opacity-100"
            >
              <img src={tictok} alt="" class="w-10 h-10 object-cover" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
