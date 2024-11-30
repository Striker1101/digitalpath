import React from "react";
import Welcome from "./Welcome";
import Highlight from "./Highlight";
import Service from "./Service";
import BlogPosts from "../../Components/BlogPosts";
import Portfolio from "../../Components/Portfolio";
import Testimony from "../../Components/Testimony";
import ContactUs from "../../Components/ContactUs";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Stacks from "../../Components/Stacks";
import nextjs from "../../Assets/images/nextjs.png";
import firebase from "../../Assets/images/firebase.png";
import mysql from "../../Assets/images/mysql.png";
import download from "../../Assets/images/download.jpeg";
import nestjs from "../../Assets/images/nestjs.png";

const stackItems = [
  { src: nextjs, alt: "Partner Logo 1" },
  { src: firebase, alt: "Partner Logo 2" },
  { src: mysql, alt: "Partner Logo 3" },
  { src: download, alt: "Partner Logo 4" },
  { src: nestjs, alt: "Partner Logo 5" },
];
const purposes = [
  " Website Development",
  "Digital Marketing",
  "Both",
  "Inquiry",
];

export default function Homepage() {
  return (
    <div>
      <Welcome />
      <Highlight />
      <Service />
      <WhyChooseUs />
      <BlogPosts />
      <Portfolio />
      <Testimony first_number={300} second_number={280} />
      <Stacks stackItems={stackItems} />
      {/* <ContactUs purposes={purposes} /> */}
      <section id="contact-us">
        <div className="flex justify-center items-center mb-4 min-h-screen">
          <iframe
            title="HomePage Form"
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
      </section>
    </div>
  );
}
