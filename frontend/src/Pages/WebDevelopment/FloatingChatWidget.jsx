import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingChatWidget() {
  return (
    <a
      href="https://wa.me/2347068546898"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
