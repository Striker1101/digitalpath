import React from "react";
import ContactUs from "../../Components/ContactUs";
const purposes = [
  " Website Development",
  "Digital Marketing",
  "Both",
  "Inquiry",
];

export default function ContactUS() {
  return (
    // <ContactUs purposes={purposes} />
    <div className="flex justify-center items-center mb-4 mt-16 min-h-screen">
      <iframe
        title="contact_us"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-aDd5tOGZAO-KYRcLU9TQQ3WflEw0M87rRCsTcWlsH4hFjQ/viewform?embedded=true"
        width="640"
        height="1138"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
