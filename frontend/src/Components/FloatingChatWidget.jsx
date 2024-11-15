import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingChatWidget() {
  return (
    <a
      href={process.env.REACT_APP_WHATSAPP_NUMBER}
      style={{ zIndex: "1000" }}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
