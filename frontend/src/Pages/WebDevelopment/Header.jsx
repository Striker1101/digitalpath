import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo">Digital Path</div>
      <nav className="space-x-4">
        {[
          "Services",
          "About Us",
          "Why Choose Us",
          "Portfolio",
          "Blog",
          "Contact Us",
        ].map((link) => (
          <a
            href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
            key={link}
            className="hover:text-gray-300"
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
