import React from "react";
import Welcome from "./Welcome";
import Highlight from "./Highlight";
import Service from "./Service";
import BlogPosts from "../../Components/BlogPosts";
import Portfolio from "../../Components/Portfolio";
import Testimony from "../../Components/Testimony";
import ContactUs from "../../Components/ContactUs";
import Stacks from "./Stacks";
import WhyChooseUs from "../../Components/WhyChooseUs";
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
      <Stacks />
      <ContactUs />
    </div>
  );
}
