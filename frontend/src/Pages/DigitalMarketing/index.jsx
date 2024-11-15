import React from "react";
import Welcome from "./Welcome";
import Results from "./Results";
import HeroSection from "../../Components/HeroSection";
import bg1 from "../../Assets/images/Digital_Marketing/bg1.jpeg";
import bg2 from "../../Assets/images/Digital_Marketing/bg2.jpeg";
import bg3 from "../../Assets/images/Digital_Marketing/bg3.jpeg";
import bg4 from "../../Assets/images/Digital_Marketing/bg4.jpeg";
import bg5 from "../../Assets/images/Digital_Marketing/bg5.jpeg";
import FloatingChatWidget from "../../Components/FloatingChatWidget";
import ServicesOverview from "../../Components/ServicesOverview";

//service
import {
  faPlug,
  faCode,
  faMobileAlt,
  faBriefcase,
  faPencilRuler,
  faSearch,
  faTools,
  faServer,
  faShoppingCart,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import WhyChooseUs from "../../Components/WhyChooseUs";
import BlogPosts from "../../Components/BlogPosts";
import Portfolio from "../../Components/Portfolio";
import Testimony from "../../Components/Testimony";
import ContactUs from "../../Components/ContactUs";

const services = [
  {
    name: "Email Marketing",
    link: "/digital-marketing/email_marketing",
    icon: faPlug,
  },
  {
    name: "Social Media Management",
    link: "/digital-marketing/social_media_management",
    icon: faCode,
  },
  {
    name: "Content Marketing",
    link: "/digital-marketing/content_marketing",
    icon: faMobileAlt,
  },
  {
    name: "Pay Per Click Advertising",
    link: "/digital-marketing/pay_per_click_advertising",
    icon: faBriefcase,
  },
  {
    name: "Brand Management And Positioning",
    link: "/digital-marketing/brand_management_and_positioning",
    icon: faPencilRuler,
  },
  {
    name: "Digital marketing consultation",
    link: "/digital-marketing/digital_marketing_consultation",
    icon: faSearch,
  },
];

export default function DigitalMarketing() {
  return (
    <div>
      <HeroSection
        backgroundImages={[bg1, bg2, bg3, bg4, bg5]}
        big_title={
          "Boost Your Business with Tailored Digital Marketing Solutions"
        }
        small_title={"Let's take your business to its next level."}
        first_button_text={"Explore Our Services"}
        first_button_link={"/web-development/#contact"}
        second_button_text={"Get a Free Consultation"}
        second_button_link={"https://wa.me/2347068546898"}
      />
      <FloatingChatWidget />
      {/* <Welcome /> */}

      <ServicesOverview
        services={services}
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
      <ContactUs
        purposes={["Web Development", "Digital Marketing", "Both", "Not Sure"]}
      />
      {/* <Results /> */}
    </div>
  );
}
