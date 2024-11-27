import React from "react";
import web_design_svgrepo_com from "../../Assets/images/web-design-svgrepo-com.svg";
import seo_1_svgrepo_com from "../../Assets/images/seo-1-svgrepo-com.svg";
import target_icon from "../../Assets/images/target_icon.svg";
import email_alt2_svgrepo_com from "../../Assets/images/email-alt2-svgrepo-com.svg";
import hashtag_svgrepo_com from "../../Assets/images/hashtag-svgrepo-com.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Results() {
  return (
    <div className="bg-[#c48925] text-white py-24 px-6 text-center">
      <h2 className="text-5xl font-bold mb-10">Results-driven Marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {[
          {
            imgSrc: web_design_svgrepo_com,
            title: "Web Design",
            description: "Create a brand and communicate your value.",
          },
          {
            imgSrc: seo_1_svgrepo_com,
            title: "SEO",
            description:
              "Find new clients organically and grow a foundation for tomorrow.",
          },
          {
            imgSrc: target_icon,
            title: "PPC",
            description:
              "Put your business in front of the right people today.",
          },
          {
            imgSrc: email_alt2_svgrepo_com,
            title: "Email Marketing",
            description: "Get more out of your current website visitors.",
          },
          {
            imgSrc: hashtag_svgrepo_com,
            title: "Social Media",
            description: "Increase awareness by engaging with your audience.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#da9826] rounded-lg transform transition-transform hover:scale-105"
          >
            <LazyLoadImage src={item.imgSrc} alt="icon" className="w-20 h-20" />
            <h3 className="text-xl font-Raleway font-semibold my-2">
              {item.title}
            </h3>
            <p className="text-md font-Nunito text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
