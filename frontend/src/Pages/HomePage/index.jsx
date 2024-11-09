import React from "react";
import Welcome from "./Welcome";
import Highlight from "./Highlight";
import Service from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import BlogPosts from "./BlogPosts";
import Portfolio from "./Portfolio";
import Testimony from "./Testimony";
import ContactUs from "./ContactUs";
import Stacks from "./Stacks";
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
