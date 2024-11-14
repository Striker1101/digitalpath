import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What services does Digital Path offer?",
      answer:
        "Digital Path offers a range of services, including software development, web design and development, digital marketing, advertising, and consulting.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for building a website depends on its complexity and requirements. Typically, it can range from a few days to a few months. We will provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is full-stack development?",
      answer:
        "Full-stack development involves both front-end and back-end development. It means our team can handle everything from user interface design to server-side management, ensuring a seamless integration of all components.",
    },
    {
      question: "What platforms do you use for web development?",
      answer:
        "We work with a variety of platforms and technologies, including WordPress, Shopify, Laravel, React, and custom solutions tailored to your needs.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes, we offer comprehensive Search Engine Optimization (SEO) services to improve your website's visibility on search engines and drive organic traffic.",
    },
    {
      question: "What is the difference between SEO and PPC advertising?",
      answer:
        "SEO (Search Engine Optimization) focuses on optimizing your unpaid online presence to rank higher in search results organically, while PPC (Pay-Per-Click) is a paid advertising model that places your ads at the top of search results for specific keywords.",
    },
    {
      question: "How do you ensure the quality of your services?",
      answer:
        "We maintain high-quality standards by employing experienced professionals, conducting extensive testing and reviews at every project stage, and prioritizing client feedback throughout the process.",
    },
    {
      question: "What is included in your digital marketing services?",
      answer:
        "Our digital marketing services include SEO, PPC advertising, social media marketing, content marketing, email marketing, and brand strategy, all designed to enhance your online presence.",
    },
    {
      question: "Can you help with website maintenance?",
      answer:
        "Yes, we provide ongoing website maintenance services, including updates, backups, security monitoring, and performance optimization to keep your site running smoothly.",
    },
    {
      question: "What type of hosting services do you provide?",
      answer:
        "We offer reliable web hosting solutions that include shared hosting, VPS hosting, and dedicated server options, tailored to your website's needs for performance and scalability.",
    },
    {
      question: "Do you offer responsive design for websites?",
      answer:
        "Absolutely! All our websites are built with a responsive design to ensure they function seamlessly on desktops, tablets, and mobile devices.",
    },
    {
      question: "Can you assist with branding and graphic design?",
      answer:
        "Yes, we provide branding services, including logo design, color palette selection, and overall visual identity development to create a cohesive brand experience.",
    },
    {
      question: "What industries do you mainly work with?",
      answer:
        "We work with various industries, including e-commerce, healthcare, technology, education, and more, customizing our services to meet different business needs.",
    },
    {
      question: "How does the consultation process work?",
      answer:
        "During our initial consultation, we’ll discuss your goals, needs, and challenges. Based on this discussion, we will provide tailored recommendations and a roadmap for how we can assist you.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We use agile project management methodologies to ensure flexibility and responsiveness throughout the project lifecycle, allowing us to adapt to changes quickly.",
    },
    {
      question:
        "Do you provide training for using the delivered website or software?",
      answer:
        "Yes, we offer training sessions to help you and your team effectively use the website or software we develop, ensuring you feel comfortable with all features and functionalities.",
    },
    {
      question:
        "How can I track the performance of my digital marketing campaigns?",
      answer:
        "We provide detailed analytics reports and dashboards to track key performance indicators (KPIs) for your campaigns, allowing you to measure success and ROI effectively.",
    },
    {
      question: "Is there ongoing support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance options to address any issues or updates after the project is completed, ensuring your continued success.",
    },
    {
      question: "What is the pricing structure for your services?",
      answer:
        "Our pricing varies based on the specific services required. We offer customized quotes after assessing your needs during the consultation process.",
    },
    {
      question: "How do I get started with Digital Path?",
      answer:
        "To get started, simply reach out through our contact form, via WhatsApp (+2347068546898) or give us a call (+2347016943939). We'll schedule an initial consultation to discuss your needs and how we can help.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b">
            <div
              className="flex justify-between items-center py-4 px-5 cursor-pointer hover:bg-gray-100 transition duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-medium text-gray-800">
                {item.question}
              </h3>
              <span
                className={`transform transition duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen py-4 px-5"
                  : "max-h-0 py-0 px-5"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
