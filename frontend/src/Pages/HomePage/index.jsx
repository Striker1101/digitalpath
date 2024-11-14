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

export default function Homepage() {
  return (
    <div>
      <Welcome />
      <Highlight />
      <Service />
      <WhyChooseUs />
      <BlogPosts />
      <Portfolio />
      <Testimony />
      <Stacks stackItems={stackItems} />
      <ContactUs />
    </div>
  );
}
