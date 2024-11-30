import React, { useContext } from "react";
import HeroSection from "../../Components/HeroSection";
import bg1 from "../../Assets/images/Digital_Marketing/bg1.jpeg";
import bg2 from "../../Assets/images/Digital_Marketing/bg2.jpeg";
import bg3 from "../../Assets/images/Digital_Marketing/bg3.jpeg";
import bg4 from "../../Assets/images/Digital_Marketing/bg4.jpeg";
import bg5 from "../../Assets/images/Digital_Marketing/bg5.jpeg";
import FloatingChatWidget from "../../Components/FloatingChatWidget";
import ServicesOverview from "../../Components/ServicesOverview";

import WhyChooseUs from "../../Components/WhyChooseUs";
import BlogPosts from "../../Components/BlogPosts";
import Portfolio from "../../Components/Portfolio";
import Testimony from "../../Components/Testimony";
import ContactUs from "../../Components/ContactUs";
import { DataContext } from "../../store";

export default function DigitalMarketing() {
  const { digitalServices } = useContext(DataContext);
  return (
    <div>
      <HeroSection
        backgroundImages={[bg1, bg2, bg3, bg4, bg5]}
        big_title={
          "Boost Your Business with Tailored Digital Marketing Solutions"
        }
        small_title={"Let's take your business to its next level."}
        first_button_text={"Explore Our Services"}
        first_button_link={"/web-development/#contact-us"}
        second_button_text={"Get a Free Consultation"}
        second_button_link={"https://wa.me/2347068546898"}
      />
      <FloatingChatWidget />
      {/* <Welcome /> */}

      <ServicesOverview
        services={digitalServices}
        title={"Our Services"}
        desc={
          "Discover a variety of professional services designed to elevate your digital presence and streamline your business operations."
        }
        btn_text={"See More"}
      />
      <WhyChooseUs />
      <BlogPosts />
      <Portfolio />
      <Testimony first_number={300} second_number={280} />
      {/* <ContactUs
        purposes={["Web Development", "Digital Marketing", "Both", "Not Sure"]}
      /> */}
      <section id="contact-us">
        <div className="flex justify-center items-center mb-4 min-h-screen">
          <iframe
            title="digital marketing"
            src="https://docs.google.com/forms/d/e/1FAIpQLSenPy0u2xbO7_hZAAhmp6nP0Bu-vMzHTzpW2C3IdUcm0yzOlQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* <Results /> */}
    </div>
  );
}
