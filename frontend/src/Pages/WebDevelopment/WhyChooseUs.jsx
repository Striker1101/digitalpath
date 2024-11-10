import React from "react";
import Header from "../../Components/Header";

const reasons = [
  {
    name: "Credibility and Trust",
    desc: "Our team’s proven track record and consistent delivery build a foundation of trust for every client.",
  },
  {
    name: "Efficiency in Our Work",
    desc: "We optimize processes to ensure projects are completed on time without compromising on quality.",
  },
  {
    name: "Enhanced Security",
    desc: "Implementing the latest security standards to safeguard your data and protect your digital assets.",
  },
  {
    name: "Unique Customizations",
    desc: "We tailor every solution to fit your specific needs, providing a truly unique experience.",
  },
  {
    name: "Best User Experience",
    desc: "We prioritize ease of use and seamless navigation to engage and satisfy your audience.",
  },
  {
    name: "Best SEO Services",
    desc: "Utilizing proven SEO techniques to boost your visibility and drive more traffic to your site.",
  },
  {
    name: "Comprehensive Expertise",
    desc: "Our team of skilled professionals brings a wealth of knowledge across various industries.",
  },
  {
    name: "Latest Technologies",
    desc: "Leveraging cutting-edge technologies to keep you ahead in the ever-evolving digital landscape.",
  },
  {
    name: "Affordable Pricing & Flexible Payment Plans",
    desc: "Our solutions are competitively priced with flexible payment options to suit your budget.",
  },
  {
    name: "Communication & Support",
    desc: "Clear, open communication and ongoing support at every step of your project journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <Header
        title="Why Choose Us"
        lineColor="green"
        description="Our commitment to quality, innovation, and client satisfaction sets us apart in delivering exceptional digital solutions."
      />

      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <h2 className="col-span-full text-3xl font-bold text-center mb-6">
          Why Choose Us
        </h2>
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="reason-card flex items-start bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-100"
          >
            {/* Icon or numbered badge */}
            <div className="mr-4 flex-shrink-0">
              <span className="bg-blue-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
                {index + 1}
              </span>
            </div>

            {/* Reason description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {reason.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {/* Optional description for each reason */}
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
