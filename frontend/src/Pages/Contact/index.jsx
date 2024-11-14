import React from "react";
import ContactUs from "../../Components/ContactUs";
const purposes = [
  " Website Development",
  "Digital Marketing",
  "Both",
  "Inquiry",
];

export default function ContactUS() {
  return <ContactUs purposes={purposes} />;
}
