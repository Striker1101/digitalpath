import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../Components/HeroSection";

// business background
import business_bg1 from "../../Assets/images/BUSINESS/bg1.jpeg";
import business_bg2 from "../../Assets/images/BUSINESS/bg2.jpeg";
import business_bg3 from "../../Assets/images/BUSINESS/bg3.jpeg";
import business_bg4 from "../../Assets/images/BUSINESS/bg4.jpeg";
import business_bg5 from "../../Assets/images/BUSINESS/bg5.jpeg";

//e-commerce background
import e_commerce_bg1 from "../../Assets/images/Ecommerce/bg1.jpeg";
import e_commerce_bg2 from "../../Assets/images/Ecommerce/bg2.jpeg";
import e_commerce_bg3 from "../../Assets/images/Ecommerce/bg3.jpeg";
import e_commerce_bg4 from "../../Assets/images/Ecommerce/bg4.jpeg";
import e_commerce_bg5 from "../../Assets/images/Ecommerce/bg5.jpeg";

// cms background
import cms_bg1 from "../../Assets/images/CMS/bg1.jpeg";
import cms_bg2 from "../../Assets/images/CMS/bg2.jpeg";
import cms_bg3 from "../../Assets/images/CMS/bg3.jpeg";
import cms_bg4 from "../../Assets/images/CMS/bg4.jpeg";
import cms_bg5 from "../../Assets/images/CMS/bg5.jpeg";

//seo improvement
import seo_bg1 from "../../Assets/images/SEO/bg1.jpeg";
import seo_bg2 from "../../Assets/images/SEO/bg2.jpeg";
import seo_bg3 from "../../Assets/images/SEO/bg3.jpeg";
import seo_bg4 from "../../Assets/images/SEO/bg4.jpeg";
import seo_bg5 from "../../Assets/images/SEO/bg5.jpeg";

//web and mobile
import wam_bg1 from "../../Assets/images/WebAndMobile/bg1.jpeg";
import wam_bg2 from "../../Assets/images/WebAndMobile/bg2.jpeg";
import wam_bg3 from "../../Assets/images/WebAndMobile/bg3.jpeg";
import wam_bg4 from "../../Assets/images/WebAndMobile/bg4.jpeg";
import wam_bg5 from "../../Assets/images/WebAndMobile/bg5.jpeg";

//ui and ux design
import uiandux_bg1 from "../../Assets/images/UIAndUX/bg1.jpeg";
import uiandux_bg2 from "../../Assets/images/UIAndUX/bg2.jpeg";
import uiandux_bg3 from "../../Assets/images/UIAndUX/bg3.jpeg";
import uiandux_bg4 from "../../Assets/images/UIAndUX/bg4.jpeg";
import uiandux_bg5 from "../../Assets/images/UIAndUX/bg5.jpeg";

//blogging
import blog_bg1 from "../../Assets/images/BlogWebsite/bg1.jpeg";
import blog_bg2 from "../../Assets/images/BlogWebsite/bg2.jpeg";
import blog_bg3 from "../../Assets/images/BlogWebsite/bg3.jpeg";
import blog_bg4 from "../../Assets/images/BlogWebsite/bg4.jpeg";
import blog_bg5 from "../../Assets/images/BlogWebsite/bg5.jpeg";

//software development
import software_dev_bg1 from "../../Assets/images/SoftwareDev/bg1.jpeg";
import software_dev_bg2 from "../../Assets/images/SoftwareDev/bg2.jpeg";
import software_dev_bg3 from "../../Assets/images/SoftwareDev/bg3.jpeg";
import software_dev_bg4 from "../../Assets/images/SoftwareDev/bg4.jpeg";
import software_dev_bg5 from "../../Assets/images/SoftwareDev/bg5.jpeg";
import software_dev_bg6 from "../../Assets/images/SoftwareDev/bg6.jpeg";

//maintaince and support
import maintainance_and_support_bg1 from "../../Assets/images/WebMaintance/bg1.jpeg";
import maintainance_and_support_bg2 from "../../Assets/images/WebMaintance/bg2.jpeg";
import maintainance_and_support_bg3 from "../../Assets/images/WebMaintance/bg3.jpeg";
import maintainance_and_support_bg4 from "../../Assets/images/WebMaintance/bg4.jpeg";
import maintainance_and_support_bg5 from "../../Assets/images/WebMaintance/bg5.jpeg";

//api integration
import api_int_bg1 from "../../Assets/images/ApiIntegration/bg1.jpeg";
import api_int_bg2 from "../../Assets/images/ApiIntegration/bg2.jpeg";
import api_int_bg3 from "../../Assets/images/ApiIntegration/bg3.jpeg";
import api_int_bg4 from "../../Assets/images/ApiIntegration/bg4.jpeg";
import api_int_bg5 from "../../Assets/images/ApiIntegration/bg5.jpeg";

import FloatingChatWidget from "../../Components/FloatingChatWidget";
import ServicesOverview from "../../Components/ServicesOverview";
import {
  faCode,
  faAnchorCircleExclamation,
  faAdjust,
  faMobile,
  faGlobe,
  faForwardStep,
  faPlugCircleCheck,
  faStore,
  faBuilding,
  faPaintBrush,
  faBroom,
  faDumbbell,
  faWrench,
  faUserTie,
  faGavel,
  faCalendarAlt,
  faDesktop,
  faHeadset,
  faCameraRetro,
  faStoreAlt,
  faTools,
  faChalkboardTeacher,
  faShoppingCart,
  faPeopleGroup,
  faLock,
  faCalendarCheck,
  faMagnifyingGlass,
  faKeyboard,
  faGears,
  faPenToSquare,
  faLink,
  faLocationDot,
  faChartLine,
  faCartShopping,
  faPencilRuler,
  faFlask,
  faFlaskVial,
  faHandPointer,
  faUniversalAccess,
  faChartBar,
  faGhost,
  faBlog,
  faNewspaper,
  faJoint,
  faWindowMaximize,
  faSquare,
  faFileCode,
  faMedkit,
  faJournalWhills,
  faWheatAwnCircleExclamation,
  faSquareShareNodes,
  faSheetPlastic,
  faShieldAlt,
  faSyncAlt,
  faCloudMeatball,
  faHeartbeat,
  faSearch,
  faPlug,
  faServer,
  faBook,
  faCheckCircle,
  faCube,
  faDatabase,
  faMobileAlt,
  faCog,
  faBug,
  faCloud,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

import WhyChooseUs from "./WhyChooseUs";
import KetFeatures from "./KetFeatures";
import {
  FaMobileAlt,
  FaClipboardList,
  FaSearch,
  FaTools,
  FaUserCog,
  FaShieldAlt,
  FaSearchPlus,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import BlogHighlights from "./BlogHighlights";
import Testimony from "../../Components/Testimony";
import ContactUs from "../../Components/ContactUs";
import { DataContext } from "../../store";
import { Helmet } from "react-helmet-async";
import Stacks from "../../Components/Stacks";

import nextjs from "../../Assets/images/nextjs.png";
import firebase from "../../Assets/images/firebase.png";
import mysql from "../../Assets/images/mysql.png";
import download from "../../Assets/images/download.jpeg";
import nestjs from "../../Assets/images/nestjs.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const stackItems = [
  { src: nextjs, alt: "Partner Logo 1" },
  { src: firebase, alt: "Partner Logo 2" },
  { src: mysql, alt: "Partner Logo 3" },
  { src: download, alt: "Partner Logo 4" },
  { src: nestjs, alt: "Partner Logo 5" },
];

let services = [];

let reasons = [];

let keyFeature = [];

let purposes = [];

let backgroundImages = [];

let desc = null;

let headline = null;

let subHeadline = null;

let first_button_text = null;

let testimony_first_text = null;

let testimony_second_text = null;

let testimony_show_percentage = false;

let testimony_first_number = 0;

let testimony_second_number = 0;

function convertToTitleCase(str) {
  return str
    .split("_") // Split the string at underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words with a space
}

function WebDevelopmentCategory() {
  // Get the category parameter from the URL
  const { category } = useParams();
  const { projects } = useContext(DataContext);

  // Filter projects based on the category
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  function displayContactForm() {
    switch (category) {
      case "api_development_integration":
        return (
          <iframe
            title="api_development_integration"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfnTCQZ-AL0ACu67jZwHkOEMxwW6lsNn6VKzA9MUrBsdxAQiQ/viewform?embedded=true"
            width="640"
            height="1025"
            className="border-none"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "software_development":
        return (
          <iframe
            title="software_development"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeBPTjHlJ4CbdCe1CRk1xnVQEz6s_t0GV0JYMZqX2BIbDdfiw/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "web_mobile_app_development":
        return (
          <iframe
            title="web_mobile_app_development"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWlQB6BX89ej3kAzZ24adxdXXSKSYGXE6xzjdyvmRnOho_Yg/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "business_website_improvement":
        return (
          <iframe
            title="business_website_improvement"
            src="https://docs.google.com/forms/d/e/1FAIpQLSekAlGkH-aHhgipCX1ajmDHqdUkoMm6OZsKo5dajuJoVh91SQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "website_ui_ux_design":
        return (
          <iframe
            title="website_ui_ux_design"
            src="https://docs.google.com/forms/d/e/1FAIpQLSe3u5yrwvD7ubcHiizLsBaYqt3qGHAGCwkLRQNwKmuCAgPsKA/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "seo_improvement":
        return (
          <iframe
            title="seo_improvement"
            src="https://docs.google.com/forms/d/e/1FAIpQLSefufGU4rSKBbVYoNSSOBZLNvq3vsodtAJuHgqljK5brWJcgQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "maintenance_support":
        return (
          <iframe
            title="maintenance_support"
            src="https://docs.google.com/forms/d/e/1FAIpQLScWMHEsKfA3pGTiiss6hIvmWaFNZ0LCnn0-oQtiDHNNsPq_Ow/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "cms_website_development":
        return (
          <iframe
            title="cms_website_development"
            src="https://docs.google.com/forms/d/e/1FAIpQLSekAlGkH-aHhgipCX1ajmDHqdUkoMm6OZsKo5dajuJoVh91SQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "e-commerce_website_development":
        return (
          <iframe
            title="e-commerce_website_development"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeW9iagobAYVV8aifKZ7BacbSOSZAHfwfkdn6ncGE2ZKtnyXQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "blogging_website_development":
        return (
          <iframe
            title="blogging_website_development"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdqt8Av-VxmK1vq0W8BfFQUUUd-y14I-DmcDsYTjiQJ5nTgHw/viewform?embedded=true"
            width="700"
            height="520"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );
      default:
        break;
    }
  }

  switch (category) {
    case "api_development_integration":
      keyFeature = [
        {
          feature: "Tailored APIs that Meet Your Unique Requirements",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "Efficient Integration with Existing Systems and Services",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: " ⁠In-Depth Documentation for Easy Onboarding",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Rigorous Testing to Ensure Reliability and Performance",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Scalable Solutions for Growing Businesses",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Ongoing Support and Consultation for API Optimization",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        api_int_bg1,
        api_int_bg2,
        api_int_bg3,
        api_int_bg4,
        api_int_bg5,
      ];

      purposes = [
        " API Development Inquiry",
        "Integration Support",
        "Consultation Request",
        " General Feedback",
      ];

      reasons = [
        {
          name: "Experienced Developers with Deep Industry Knowledge",
          desc: "Our skilled developers bring industry expertise to build reliable, high-quality blogging websites that maximize user engagement and satisfaction.",
        },
        {
          name: "Proven Track Record of Successful API Implementations",
          desc: "We have a strong history of successfully integrating APIs into blogging platforms, enhancing functionality and user experience with seamless interactions.",
        },
        {
          name: "Customized Solutions to Fit Your Business Goals",
          desc: "We design tailored blogging solutions aligned with your business objectives, optimizing functionality and enhancing your brand identity.",
        },
        {
          name: "Commitment to Best Practices and Security Standards",
          desc: "We prioritize security and adhere to best practices, ensuring your blogging platform is safe, reliable, and compliant with industry regulations.",
        },
        {
          name: "Transparent Communication Throughout the Project",
          desc: "We maintain open communication and provide ongoing feedback, ensuring your vision is fully realized and the development process is smooth.",
        },
        {
          name: "Dedicated Support Team Ready to Assist",
          desc: "Our dedicated support team is always available to assist with any questions or issues, ensuring your blog’s continued success and performance optimization.",
        },
      ];

      services = [
        {
          name: "Custom API Development",
          icon: faTools, // Custom API development often requires a hands-on approach, so we can use a tools icon.
          link: "",
          link_avail: false,
          desc: "Create custom APIs tailored to your business needs, ensuring seamless integration with your systems and optimized for performance.",
        },
        {
          name: "API Integration Services",
          icon: faSquareShareNodes, // The icon for API integration can represent connectivity or sharing.
          link: "",
          link_avail: false,
          desc: "Integrate third-party APIs into your systems to enhance functionality and streamline workflows, improving business operations.",
        },
        {
          name: "RESTful and SOAP API Development",
          icon: faServer, // RESTful and SOAP development relates to server-side programming.
          link: "",
          link_avail: false,
          desc: "Develop RESTful and SOAP APIs for seamless communication between your application and third-party systems, ensuring fast and reliable data transfer.",
        },
        {
          name: "API Documentation Creation",
          icon: faBook, // API documentation is about providing clear instructions, so a book icon fits.
          link: "",
          link_avail: false,
          desc: "Create comprehensive and easy-to-understand API documentation to guide developers in integrating and using your APIs efficiently.",
        },
        {
          name: "API Testing and Quality Assurance",
          icon: faCheckCircle, // QA and testing are about ensuring the quality and reliability of APIs, so a check icon fits well.
          link: "",
          link_avail: false,
          desc: "Test and verify the functionality of your APIs, ensuring that they meet high standards of performance, security, and reliability.",
        },
        {
          name: "Microservices Architecture",
          icon: faCube, // Microservices architecture can be represented by the cube, symbolizing modular components.
          link: "",
          link_avail: false,
          desc: "Design and implement microservices architectures to break down your application into manageable, scalable, and independently deployable services.",
        },
        {
          name: "Legacy System Integration",
          icon: faPlug, // Legacy system integration typically involves connecting older systems with newer ones.
          link: "",
          link_avail: false,
          desc: "Integrate legacy systems with modern applications and services to ensure that older technologies continue to work efficiently within new ecosystems.",
        },
        {
          name: "Third-Party API Integration",
          icon: faLink, // Third-party API integration involves connecting different systems, represented by the link icon.
          link: "",
          link_avail: false,
          desc: "Seamlessly integrate third-party APIs to extend your application's capabilities and enhance user experience with external services.",
        },
        {
          name: "API Management and Monitoring",
          icon: faHeartbeat, // API management and monitoring often involves performance tracking, best represented by a heartbeat icon.
          link: "",
          link_avail: false,
          desc: "Monitor and manage your APIs to ensure optimal performance, track usage, detect issues, and maintain security across your services.",
        },
      ];

      desc =
        "Enhance your systems with seamless API integrations, connecting external services to streamline operations and improve functionality.";

      headline = "Seamlessly Connect Your Applications with Custom APIs.";

      subHeadline =
        "Expert API development and integration services tailored for your business needs";

      first_button_text = "Explore Our API Services";

      testimony_first_text = "⁠⁠APIs Developed";

      testimony_first_number = 100;

      testimony_show_percentage = true;

      testimony_second_text = "Average Integration Time Reduction";

      testimony_second_number = 50;
      break;

    case "software_development":
      keyFeature = [
        {
          feature: "⁠Agile Development Methodologies for Fast Delivery",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: " ⁠Scalable and Robust Software Architecture",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "User-Centric Design and Experience",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Comprehensive Testing and Quality Assurance",
          icon: <FaTools />,
          link: "",
        },
        {
          feature:
            "Transparent Communication Throughout the Development Process",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Cost-Effective Solutions with Flexible Pricing Models",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        software_dev_bg1,
        software_dev_bg2,
        software_dev_bg3,
        software_dev_bg4,
        software_dev_bg5,
        software_dev_bg6,
      ];

      purposes = [
        "Custom Software Development",
        "Enterprise Solutions",
        "Integration Services",
        "Maintenance Inquiry",
      ];

      reasons = [
        {
          name: "⁠Proven Track Record of Successful Software Projects",
          desc: "Our extensive experience in building high-quality blogging websites across industries ensures reliable, impactful results that engage users and boost satisfaction.",
        },
        {
          name: "Skilled Team of Experienced Developers and Analysts",
          desc: "Our team of experts brings a wealth of knowledge and creative insight to build blogging platforms that perfectly reflect your brand’s style and vision.",
        },
        {
          name: "Customized Solutions to Address Unique Business Challenges",
          desc: "We craft tailored blogging solutions that meet the distinct needs of your business, enhancing functionality, user experience, and brand identity.",
        },
        {
          name: "Emphasis on Security and Compliance Best Practices",
          desc: "Our development practices prioritize data protection and regulatory compliance to ensure that your blog platform is secure, reliable, and trustworthy.",
        },
        {
          name: "Strong Focus on Client Satisfaction and Long-Term Relationships",
          desc: "With transparent communication and ongoing feedback, we ensure a collaborative process where your vision remains at the heart of development.",
        },
        {
          name: "Comprehensive Post-Deployment Support and Maintenance",
          desc: "We provide thorough support and maintenance, ensuring your blog’s continued success, performance optimization, and alignment with your business growth.",
        },
      ];

      services = [
        {
          name: "Custom Software Development",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "Develop custom software solutions tailored to your business needs, from desktop applications to enterprise systems, ensuring scalability and performance.",
        },
        {
          name: "Web Application Development",
          icon: faDesktop,
          link: "",
          link_avail: false,
          desc: "Create powerful web applications with modern frameworks, offering seamless user experiences and responsive design for any device.",
        },
        {
          name: "Database Design & Management",
          icon: faDatabase,
          link: "",
          link_avail: false,
          desc: "Design and manage databases that are optimized for performance, security, and scalability to meet your data management needs.",
        },
        {
          name: "Mobile App Development (iOS & Android)",
          icon: faMobileAlt,
          link: "",
          link_avail: false,
          desc: "Build native mobile apps for both iOS and Android, providing smooth, intuitive user experiences with full integration to back-end systems.",
        },
        {
          name: "Software Maintenance & Support",
          icon: faCog,
          link: "",
          link_avail: false,
          desc: "Ensure your software runs efficiently with ongoing maintenance and support services, including bug fixes, updates, and performance improvements.",
        },
        {
          name: "Bug Fixing & Quality Assurance",
          icon: faBug,
          link: "",
          link_avail: false,
          desc: "Identify and resolve bugs and issues in your software, ensuring that your product meets the highest quality standards and functions as intended.",
        },
        {
          name: "Cloud Computing & Solutions",
          icon: faCloud,
          link: "",
          link_avail: false,
          desc: "Design and implement cloud-based solutions that offer scalability, flexibility, and security, tailored to meet the unique demands of your business.",
        },
        {
          name: "DevOps & Continuous Integration/Continuous Deployment (CI/CD)",
          icon: faServer,
          link: "",
          link_avail: false,
          desc: "Implement DevOps practices with CI/CD pipelines for faster delivery, automation, and reliable deployment processes across your development lifecycle.",
        },
        {
          name: "Software Integration & API Development",
          icon: faSync,
          link: "",
          link_avail: false,
          desc: "Integrate multiple software systems and develop APIs that allow seamless communication and data exchange between platforms and services.",
        },
      ];

      desc =
        "Elevate your blogging experience with our expert blog development services, designed to optimize readability, engage your audience, and boost SEO performance. Whether you're an aspiring blogger or a content-focused business. ";

      headline = "Custom Software Development Tailored to Your Business Needs";

      subHeadline =
        "Innovative solutions that drive efficiency, growth, and success.";

      first_button_text = "Explore Our Software Development Services";

      testimony_first_text = "⁠Completed Software Development Projects";

      testimony_first_number = 200;

      testimony_show_percentage = false;

      testimony_second_text = "Satisfied Clients Benefiting from Our Solutions";

      testimony_second_number = 150;
      break;

    case "web_mobile_app_development":
      keyFeature = [
        {
          feature: "Tailored Solutions to Meet Unique Business Goals",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "⁠User-Friendly Design Focused on Customer Experience",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "Robust Security Measures and Data Protection",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Scalable Architecture for Future Growth",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "⁠Regular Updates and Maintenance Packages",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Comprehensive Testing and Quality Assurance",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [wam_bg1, wam_bg2, wam_bg3, wam_bg4, wam_bg5];

      purposes = [
        "Web App Development",
        "Mobile App Development",
        " Maintenance Inquiry",
        "General Consultation",
      ];

      reasons = [
        {
          name: "⁠⁠Proven Expertise in Diverse Industries and Technologies",
          desc: "Our extensive portfolio spans multiple industries and technologies, showcasing successful implementations across various platforms and business sectors. This diverse experience enables us to bring proven strategies and industry-specific insights to every project.",
        },
        {
          name: "Full-Cycle Development from Concept to Launch",
          desc: "We guide you through every stage of development, from initial concept and planning to design, implementation, testing, and final launch. Our comprehensive approach ensures a seamless journey from your initial idea to a fully functional website.",
        },
        {
          name: "Skilled Team of Developers, Designers, and Project Managers",
          desc: "Our team combines experienced developers, creative designers, and certified project managers who work collaboratively to deliver exceptional results. Each team member brings specialized expertise and years of professional experience to your project.",
        },
        {
          name: "Agile Development Process for Fast Iteration and Delivery",
          desc: "We utilize Agile methodology to ensure rapid development cycles, frequent updates, and quick adaptability to changes. This approach enables faster delivery while maintaining high quality through continuous testing and refinement.",
        },
        {
          name: "⁠Transparent Communication and Ongoing Support",
          desc: "We maintain clear, consistent communication throughout your project and beyond, providing regular updates, detailed documentation, and responsive support. Our commitment to transparency ensures you're always informed about your project's progress and future maintenance.",
        },
        {
          name: "Cost-Effective Solutions Tailored to Your Budget",
          desc: "We create customized solutions that align with your budget while maximizing value and ROI. Our flexible pricing models and scalable solutions ensure you get the features and functionality you need without unnecessary expenses.",
        },
      ];

      services = [
        {
          name: "Custom Web Application Development",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "Build tailored web applications with cutting-edge technologies to meet your specific business requirements, ensuring scalability, security, and optimal performance.",
        },
        {
          name: "iOS Mobile App Development",
          icon: faAnchorCircleExclamation,
          link: "",
          link_avail: false,
          desc: "Create native iOS applications optimized for iPhone and iPad, featuring intuitive interfaces, smooth performance, and full integration with iOS ecosystem features.",
        },
        {
          name: "⁠Android Mobile App Development",
          icon: faAdjust,
          link: "",
          link_avail: false,
          desc: "Develop custom Android applications that work across diverse devices, incorporating Material Design principles and leveraging the full potential of the Android platform.",
        },
        {
          name: "⁠Cross-Platform App Development (React Native, Flutter)",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "Build efficient cross-platform applications using React Native or Flutter to maintain a single codebase while delivering native-like experience across iOS and Android.",
        },
        {
          name: "Progressive Web App (PWA) Development",
          icon: faGlobe,
          link: "",
          link_avail: false,
          desc: "Develop progressive web applications that combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experience in the browser.",
        },
        {
          name: "API Development and Integration",
          icon: faPlugCircleCheck,
          link: "",
          link_avail: false,
          desc: "Design and implement robust APIs for seamless integration between systems, ensuring secure data exchange, documentation, and scalable architecture.",
        },
        {
          name: "⁠E-commerce Web and Mobile Solutions",
          icon: faStore,
          link: "",
          link_avail: false,
          desc: "Create comprehensive e-commerce solutions with secure payment processing, inventory management, and optimized shopping experience across web and mobile platforms.",
        },
        {
          name: "Enterprise Application Development",
          icon: faBuilding,
          link: "",
          link_avail: false,
          desc: "Develop sophisticated enterprise-level applications with advanced security features, scalable architecture, and integration capabilities for large-scale business operations.",
        },
        {
          name: "UI/UX Design for Web and Mobile Applications",
          icon: faPaintBrush,
          link: "",
          link_avail: false,
          desc: "Create engaging user interfaces and experiences through research-driven design, user testing, and modern design principles to ensure optimal user satisfaction and conversion.",
        },
        {
          name: "Maintenance and Support Services for Web and Mobile Apps",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Provide comprehensive maintenance, updates, and technical support for web and mobile applications, ensuring optimal performance, security patches, and continuous improvements.",
        },
      ];

      desc =
        "Transform your digital vision into reality with our expert web development solutions, from custom applications to enterprise platforms.";

      headline =
        "Transform Your Ideas into Powerful Web and Mobile Applications.";

      subHeadline =
        "Innovative solutions for your business needs, delivered with expertise.";

      first_button_text = "Explore Our Development Services";

      testimony_first_text =
        "Completed Web and Mobile App Development Projects";

      testimony_first_number = 150;

      testimony_show_percentage = false;

      testimony_second_text = "Satisfied Clients Utilizing Our Services";

      testimony_second_number = 120;
      break;

    case "business_website_improvement":
      keyFeature = [
        {
          feature: "Responsive Design for Mobile and Desktop",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "Content Management System (CMS) Integration",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "SEO Optimization for Local and Organic Visibility",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Ongoing Maintenance and Support",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        business_bg1,
        business_bg2,
        business_bg3,
        business_bg4,
        business_bg5,
      ];

      purposes = [" Website Development", "Consultation", "General Inquiry"];

      reasons = [
        {
          name: "Proven Success in Service Business Website Projects",
          desc: "We have a track record of successful projects, delivering high-quality websites for service businesses that drive results and increase client satisfaction.",
        },
        {
          name: "Experienced Design and Development Team",
          desc: "Our team of seasoned designers and developers specializes in creating innovative, user-friendly websites that align with your business goals and brand vision.",
        },
        {
          name: "Data-Driven Approach for Enhanced User Experience",
          desc: "We leverage analytics and user data to design websites that are not only aesthetically pleasing but also highly functional and optimized for your target audience.",
        },
        {
          name: "Clear Communication and Transparent Reporting",
          desc: "We ensure constant communication and provide clear, detailed reports throughout the development process, so you’re always informed and confident in our work.",
        },
        {
          name: "Competitive Pricing for Service Business Solutions",
          desc: "Our pricing structure is designed to offer exceptional value, providing cost-effective solutions for service businesses without compromising on quality.",
        },
        {
          name: "Competitive Pricing for Service Business Solutions",
          desc: "We offer affordable, customized pricing for businesses in the service industry, ensuring you receive the best possible value for your investment in a high-quality website.",
        },
      ];

      services = [
        {
          name: "Custom Cleaning Service Website Development",
          icon: faBroom,
          link: "",
          link_avail: false,
          desc: "Specialized websites for cleaning services to showcase services, pricing, and online booking.",
        },
        {
          name: "Personal Trainer Website Development",
          icon: faDumbbell,
          link: "",
          link_avail: false,
          desc: "Websites designed for personal trainers to promote programs, schedule sessions, and offer online booking.",
        },
        {
          name: "Plumbing Service Website Development",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Professional websites for plumbers with service listings, contact forms, and customer testimonials.",
        },
        {
          name: "Consulting Firm Website Development",
          icon: faUserTie,
          link: "",
          link_avail: false,
          desc: "Custom websites for consulting firms to showcase expertise, client testimonials, and service offerings.",
        },
        {
          name: "Legal Services Website Development",
          icon: faGavel,
          link: "",
          link_avail: false,
          desc: "Dedicated websites for legal professionals to highlight services, case studies, and contact options.",
        },
        {
          name: "Event Planning Service Website Development",
          icon: faCalendarAlt,
          link: "",
          link_avail: false,
          desc: "Event-focused websites to feature services, event portfolios, and online event booking.",
        },
        {
          name: "Real Estate Agent Website Development",
          icon: faBuilding,
          link: "",
          link_avail: false,
          desc: "Websites for real estate agents with property listings, virtual tours, and contact forms.",
        },
        {
          name: "CMS Website Development",
          icon: faDesktop,
          link: "",
          link_avail: false,
          desc: "Custom CMS websites for easy content management and website updates without coding.",
        },
        {
          name: "IT Support Services Website Development",
          icon: faHeadset,
          link: "",
          link_avail: false,
          desc: "Websites for IT support services offering online support, FAQs, and service information.",
        },
        {
          name: "Photography Business Website Development",
          icon: faCameraRetro,
          link: "",
          link_avail: false,
          desc: "Photography-focused websites to display portfolios, pricing, and client testimonials.",
        },
      ];

      desc =
        "Discover a variety of professional services designed to elevate your digital presence and streamline your business operations.";

      headline =
        "Elevate Your Service Business with Custom Website Development.";

      subHeadline =
        "Harness the power of a professional online presence tailored to your service needs.";

      first_button_text = "Explore Our Website Development Services";

      testimony_first_text = "Completed Service Business Projects";

      testimony_first_number = 185;

      testimony_show_percentage = false;

      testimony_second_text = "⁠Satisfied Service Business Owners";

      testimony_second_number = 170;
      break;

    case "website_ui_ux_design":
      keyFeature = [
        {
          feature: "User-Centric Approach Focusing on Real User Needs",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "⁠Seamless Design Development Process",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "Collaborative Workshops to Align Visions",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Focus on Accessibility and Inclusivity",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Continuous Testing and Improvement",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Adaptive and Responsive Design for All Devices",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        uiandux_bg1,
        uiandux_bg2,
        uiandux_bg3,
        uiandux_bg4,
        uiandux_bg5,
      ];

      purposes = [
        "UI/UX Design for Web",
        "UI/UX Design for Mobile",
        "Consultation Inquiry",
        "General Feedback",
      ];

      reasons = [
        {
          name: "Proven Success in Service Business Website Projects",
          desc: "We have a track record of successful projects, delivering high-quality websites for service businesses that drive results and increase client satisfaction.",
        },
        {
          name: "Experienced Design and Development Team",
          desc: "Our team of seasoned designers and developers specializes in creating innovative, user-friendly websites that align with your business goals and brand vision.",
        },
        {
          name: "Data-Driven Approach for Enhanced User Experience",
          desc: "We leverage analytics and user data to design websites that are not only aesthetically pleasing but also highly functional and optimized for your target audience.",
        },
        {
          name: "Clear Communication and Transparent Reporting",
          desc: "We ensure constant communication and provide clear, detailed reports throughout the development process, so you’re always informed and confident in our work.",
        },
        {
          name: "Competitive Pricing for Service Business Solutions",
          desc: "Our pricing structure is designed to offer exceptional value, providing cost-effective solutions for service businesses without compromising on quality.",
        },
        {
          name: "Competitive Pricing for Service Business Solutions",
          desc: "We offer affordable, customized pricing for businesses in the service industry, ensuring you receive the best possible value for your investment in a high-quality website.",
        },
      ];

      services = [
        {
          name: "User Research and Analysis",
          icon: faMagnifyingGlass,
          link: "",
          link_avail: false,
          desc: "Conduct comprehensive user research through surveys, interviews, and data analysis to understand user behaviors, needs, and pain points for informed design decisions.",
        },
        {
          name: "Wireframing and Prototyping",
          icon: faPencilRuler,
          link: "",
          link_avail: false,
          desc: "Create detailed wireframes and interactive prototypes to visualize user flows, layout structures, and core functionalities before final design implementation.",
        },
        {
          name: "⁠Visual UI Design",
          icon: faPaintBrush,
          link: "",
          link_avail: false,
          desc: "Design visually appealing and consistent user interfaces with modern aesthetics, brand alignment, and intuitive visual hierarchies that enhance user engagement.",
        },
        {
          name: "⁠Responsive Web Design",
          icon: faFlaskVial,
          link: "",
          link_avail: false,
          desc: "Develop fluid and adaptive designs that provide seamless user experiences across all devices and screen sizes, ensuring optimal functionality and visual appeal.",
        },
        {
          name: "⁠User Experience Testing & Iteration",
          icon: faFlask,
          link: "",
          link_avail: false,
          desc: "Conduct thorough usability testing, gather user feedback, and implement iterative improvements to optimize user experience and interface effectiveness.",
        },
        {
          name: "⁠Mobile App UI/UX Design",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "Create intuitive and engaging mobile app interfaces following platform-specific guidelines while ensuring smooth user journeys and optimal touch interactions.",
        },
        {
          name: "Interaction Design",
          icon: faHandPointer,
          link: "",
          link_avail: false,
          desc: "Design meaningful interactions and animations that provide clear feedback, enhance usability, and create delightful user experiences across all touchpoints.",
        },
        {
          name: "Accessibility Design",
          icon: faUniversalAccess,
          link: "",
          link_avail: false,
          desc: "Implement inclusive design practices ensuring digital products are accessible to all users, including those with disabilities, following WCAG guidelines and standards.",
        },
        {
          name: "UI/UX Audit and Consultation",
          icon: faChartBar,
          link: "",
          link_avail: false,
          desc: "Provide comprehensive analysis of existing interfaces and user experiences, identifying improvement opportunities and offering strategic recommendations for enhancement.",
        },
        {
          name: "Ongoing Maintenance and Support",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Deliver continuous design support, updates, and improvements based on user feedback, analytics, and emerging design trends to maintain optimal user experience.",
        },
      ];

      desc =
        "Transform your digital presence with human-centered design solutions that create intuitive, engaging experiences across web and mobile platforms.";

      headline = "Create Intuitive Designs that Elevate User Experience";

      subHeadline =
        "Web UI/UX design and development tailored to your audience";

      first_button_text = "Explore Our Design Services";

      testimony_first_text = "Completed UI/UX Projects";

      testimony_first_number = 100;

      testimony_show_percentage = false;

      testimony_second_text =
        "Satisfied Clients Benefiting from Our Design Solutions";

      testimony_second_number = 80;
      break;

    case "seo_improvement":
      keyFeature = [
        {
          feature: "Tailored SEO Strategies to Fit Your Business Goals",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "Comprehensive SEO Audits that Identify Opportunities",
          icon: <FaUserCog />,
          link: "",
        },
        {
          feature: "Proven Methods to Enhance Search Engine Rankings",
          icon: <FaShieldAlt />,
          link: "",
        },
        {
          feature: " ⁠Data-Driven Approach to Keyword and Content Optimization",
          icon: <FaSearchPlus />,
          link: "",
        },
        {
          feature: " ⁠Enhanced User Experience with Technical SEO Fixes",
          icon: <FaChartLine />,
          link: "",
        },
        {
          feature: "Regular Performance Reports and Insights",
          icon: <FaLifeRing />,
          link: "",
        },
      ];
      backgroundImages = [seo_bg1, seo_bg2, seo_bg3, seo_bg4, seo_bg5];

      purposes = [
        "SEO Audit",
        "Keyword Research",
        "Content Optimization",
        "General Inquiry",
      ];

      reasons = [
        {
          name: "⁠Experienced SEO Professionals with Proven Results",
          desc: "Our seasoned SEO specialists have a track record of delivering measurable results, consistently improving search rankings and organic traffic for businesses across diverse industries.",
        },
        {
          name: "⁠Up-to-Date Knowledge of the Latest SEO Trends and Algorithms",
          desc: "We stay ahead of search engine algorithm updates and industry trends, implementing cutting-edge SEO strategies that keep your website competitive in today's dynamic digital landscape.",
        },
        {
          name: "Customized Strategies for Diverse Industries",
          desc: "We develop tailored SEO approaches unique to your industry and business goals, ensuring targeted optimization that resonates with your specific market and audience.",
        },
        {
          name: "⁠Commitment to Transparency and Ethical SEO Practices",
          desc: "We follow white-hat SEO practices and maintain complete transparency in our methods, providing detailed reporting and updates to keep you informed of your SEO campaign's progress.",
        },
        {
          name: "Focus on Sustainable Growth and Long-Term Results",
          desc: "Our strategies focus on building lasting organic search presence rather than quick fixes, ensuring sustainable growth and continued success in search engine rankings.",
        },
        {
          name: "⁠Ongoing Support and Strategic Consultation",
          desc: "We provide continuous support and expert consultation, regularly reviewing and adjusting strategies to maintain optimal SEO performance and adapt to changing business needs.",
        },
      ];

      services = [
        {
          name: "SEO Audit and Analysis",
          icon: faMagnifyingGlass,
          link: "",
          link_avail: false,
          desc: "Comprehensive website analysis to identify SEO issues, opportunities, and develop strategic recommendations for improved search engine visibility.",
        },
        {
          name: "⁠Keyword Research and Strategy",
          icon: faKeyboard,
          link: "",
          link_avail: false,
          desc: "In-depth keyword research to identify high-value search terms, analyze competition, and develop targeted content strategies to boost organic rankings.",
        },
        {
          name: "⁠On-Page Optimization",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "Optimization of meta tags, headers, content structure, and HTML elements to improve search engine crawlability and relevance for target keywords.",
        },
        {
          name: "Technical SEO Services",
          icon: faGears,
          link: "",
          link_avail: false,
          desc: "Technical website optimization including site speed improvement, mobile optimization, XML sitemaps, robots.txt configuration, and fixing crawl errors.",
        },
        {
          name: "Content Creation and Optimization",
          icon: faPenToSquare,
          link: "",
          link_avail: false,
          desc: "Creation of high-quality, SEO-optimized content that engages users and ranks well in search results, including blog posts, landing pages, and product descriptions.",
        },
        {
          name: "⁠Link Building and Backlink Strategy",
          icon: faLink,
          link: "",
          link_avail: false,
          desc: "Strategic development of high-quality backlinks through outreach, content marketing, and relationship building to improve domain authority and rankings.",
        },
        {
          name: "⁠Local SEO Optimization",
          icon: faLocationDot,
          link: "",
          link_avail: false,
          desc: "Local search optimization including Google Business Profile management, local citation building, and optimization for location-based search queries.",
        },
        {
          name: "⁠SEO Performance Monitoring and Reporting",
          icon: faChartLine,
          link: "",
          link_avail: false,
          desc: "Regular monitoring and detailed reporting of key SEO metrics, rankings, traffic analysis, and ROI measurements with actionable insights.",
        },
        {
          name: "⁠Mobile SEO Strategies",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "Mobile-specific SEO optimization ensuring your website performs optimally on all devices with fast loading speeds and excellent user experience.",
        },
        {
          name: "⁠E-commerce SEO Solutions",
          icon: faCartShopping,
          link: "",
          link_avail: false,
          desc: "Specialized SEO strategies for e-commerce websites including product page optimization, category structure, and conversion rate optimization.",
        },
      ];

      desc =
        "Our SEO improvement services deliver strategic optimization solutions to enhance your website's visibility and drive organic traffic to your business. ";

      headline = "Boost Your Online Visibility and Drive Organic Traffic.";

      subHeadline =
        "Comprehensive SEO improvement services tailored for your business growth";

      first_button_text = "Explore Our SEO Services";

      testimony_first_text = "SEO Campaigns Completed";

      testimony_first_number = 150;

      testimony_show_percentage = true;

      testimony_second_text = "⁠Increased Organic Traffic for Clients";

      testimony_second_number = 30000;

      break;

    case "maintenance_support":
      keyFeature = [
        {
          feature: "⁠Routine Maintenance for Optimal Site Performance",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "Security Protocols to Protect Against Vulnerabilities",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "Fast and Reliable Support Whenever You Need It",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Quick Response Times for Critical Issues",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Regular Reporting on Site Performance and Health",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Tailored Plans to Fit Your Budget and Needs",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        maintainance_and_support_bg1,
        maintainance_and_support_bg2,
        maintainance_and_support_bg3,
        maintainance_and_support_bg4,
        maintainance_and_support_bg5,
      ];

      purposes = [
        "Maintenance Inquiry",
        "Support Request",
        " Consultation Inquiry",
        "General Feedback",
      ];

      reasons = [
        {
          name: "Experienced Technicians with Proven Expertise",
          desc: "Our extensive experience in building high-quality blogging websites across industries ensures reliable, impactful results that engage users and boost satisfaction.",
        },
        {
          name: "Comprehensive Support for All Platforms",
          desc: "Our team of experts brings a wealth of knowledge and creative insight to build blogging platforms that perfectly reflect your brand’s style and vision.",
        },
        {
          name: "Customized Maintenance Plans that Work for You",
          desc: "We craft tailored blogging solutions that meet the distinct needs of your business, enhancing functionality, user experience, and brand identity.",
        },
        {
          name: "Commitment to Preventive Care and Optimization",
          desc: "Our development practices prioritize data protection and regulatory compliance to ensure that your blog platform is secure, reliable, and trustworthy.",
        },
        {
          name: "Transparent Communication and Reporting",
          desc: "With transparent communication and ongoing feedback, we ensure a collaborative process where your vision remains at the heart of development.",
        },
        {
          name: "Focus on Client Satisfaction and Long-Term Relationships",
          desc: "We provide thorough support and maintenance, ensuring your blog’s continued success, performance optimization, and alignment with your business growth.",
        },
      ];

      services = [
        {
          name: "Regular Security Updates",
          icon: faShieldAlt,
          link: "",
          link_avail: false,
          desc: "Ensure your blog stays secure with regular security updates and patches, safeguarding your content and user data.",
        },
        {
          name: "Content Updates and Management",
          icon: faSyncAlt,
          link: "",
          link_avail: false,
          desc: "Keep your blog content fresh and relevant with our efficient content update and management services tailored to your needs.",
        },
        {
          name: "Performance Monitoring and Optimization",
          icon: faChartLine,
          link: "",
          link_avail: false,
          desc: "Boost your blog’s performance with continuous monitoring and optimization for faster loading times and smoother user experience.",
        },
        {
          name: "Backup and Recovery Solutions",
          icon: faCloudMeatball,
          link: "",
          link_avail: false,
          desc: "Protect your content with reliable backup and recovery solutions, ensuring your blog data remains safe and accessible.",
        },
        {
          name: "Website Health Audits",
          icon: faHeartbeat,
          link: "",
          link_avail: false,
          desc: "Maintain your blog’s performance with regular health audits that identify and address any issues affecting functionality and speed.",
        },
        {
          name: "Bug Fixing and Error Repairs",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Resolve technical issues swiftly with our bug fixing and error repair services, ensuring your blog runs smoothly at all times.",
        },
        {
          name: "Technical Support Services",
          icon: faHeadset,
          link: "",
          link_avail: false,
          desc: "Access professional technical support whenever needed, from troubleshooting to guidance, keeping your blog online and user-friendly.",
        },
        {
          name: "SEO Maintenance",
          icon: faSearch,
          link: "",
          link_avail: false,
          desc: "Enhance your blog’s visibility with ongoing SEO maintenance, including keyword optimization and search ranking improvements.",
        },
        {
          name: "Plugin and Software Updates",
          icon: faPlug,
          link: "",
          link_avail: false,
          desc: "Stay up-to-date with the latest features and security improvements through regular plugin and software updates.",
        },
      ];

      desc =
        "Boost your software's performance with our expert maintenance and support services, ensuring reliability, security, and continuous optimization for long-term success.";

      headline = "Keep Your Website Running Smoothly and Securely.";

      subHeadline =
        "Comprehensive website maintenance and support tailored to your needs.";

      first_button_text = "Explore Our Maintenance Services";

      testimony_first_text = "Websites Maintained";

      testimony_first_number = 200;

      testimony_show_percentage = true;

      testimony_second_text = "Average Website Uptime Improvement";

      testimony_second_number = 99.99;
      break;

    case "cms_website_development":
      keyFeature = [
        {
          feature: "Responsive Design for Mobile and Desktop",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "User-Friendly Admin Interface for Easy Content Management",
          icon: <FaUserCog />,
          link: "",
        },
        {
          feature:
            "Regular Updates and Security Monitoring to Keep Your Site Secure",
          icon: <FaShieldAlt />,
          link: "",
        },
        {
          feature: "SEO Optimization for Enhanced Visibility",
          icon: <FaSearchPlus />,
          link: "",
        },
        {
          feature: "Comprehensive Analytics and Reporting",
          icon: <FaChartLine />,
          link: "",
        },
        {
          feature: "On-Demand Support Options and Maintenance Plans",
          icon: <FaLifeRing />,
          link: "",
        },
      ];
      backgroundImages = [cms_bg1, cms_bg2, cms_bg3, cms_bg4, cms_bg5];

      purposes = [
        "CMS Development",
        "Maintenance",
        "Inquiry",
        "General Consultation",
      ];

      reasons = [
        {
          name: "Proven Expertise in CMS Website Projects and Maintenance",
          desc: "Our team's extensive experience in successfully delivering high-performance e-commerce websites that consistently increase conversions and drive growth for service businesses.",
        },
        {
          name: "Tailored Solutions for Various CMS Platforms",
          desc: "We specialize in crafting e-commerce websites tailored to your unique business needs, ensuring seamless user experiences that reflect your brand identity and engage your customers.",
        },
        {
          name: "Experienced Team of CMS Developers and Maintenance Specialists",
          desc: "Our dedicated experts bring years of experience to the table, designing and developing e-commerce websites that are optimized for both user experience and business performance.",
        },
        {
          name: "Data-Driven Approach for Improved User Experience",
          desc: "By leveraging real-time data and analytics, we ensure that every aspect of your e-commerce website is designed and developed with a focus on enhancing user engagement, conversion rates, and overall functionality.",
        },
        {
          name: "Transparent Communication and Reporting",
          desc: "We prioritize clear and open communication, providing you with regular progress updates and detailed reports, so you always know where your project stands and feel confident in our approach.",
        },
        {
          name: "Cost-Effective Maintenance Packages for Every Budget",
          desc: "Our highly competitive pricing ensures you receive the best value for your investment, delivering cost-effective, high-quality e-commerce solutions tailored to your specific needs.",
        },
      ];

      services = [
        {
          name: "Drupal Website Development & Ongoing Support",
          icon: faShoppingCart,
          link: "",
          link_avail: false,
          desc: "Develop robust Drupal-powered e-commerce websites with integrated shopping carts, secure payments, and ongoing maintenance support.",
        },
        {
          name: "Joomla Website Development & Maintenance Packages",
          icon: faPeopleGroup,
          link: "",
          link_avail: false,
          desc: "Design personalized Joomla websites for fitness professionals to promote programs, manage client sessions, and provide online bookings.",
        },
        {
          name: "Shopify CMS Development & Management",
          icon: faDesktop,
          link: "",
          link_avail: false,
          desc: "Develop professional Shopify-powered websites that adapt seamlessly across all devices, ensuring a smooth user experience on mobile and desktop.",
        },
        {
          name: "Magento CMS Setup and Maintenance",
          icon: faPlugCircleCheck,
          link: "",
          link_avail: false,
          desc: "Integrate Magento e-commerce platform into your website to enhance functionality with product management, order processing, and secure payment systems.",
        },
        {
          name: "Wix Website Development & Updates",
          icon: faLock,
          link: "",
          link_avail: false,
          desc: "Develop Wix-based websites with secure payment gateways for smooth online transactions, bookings, and donations.",
        },
        {
          name: "Squarespace Development with Continuous Support",
          icon: faCalendarCheck,
          link: "",
          link_avail: false,
          desc: "Provide ongoing Squarespace website maintenance and support, including SEO strategies to enhance your online presence.",
        },
        {
          name: "Ghost CMS Development & Site Management",
          icon: faCalendarCheck,
          link: "",
          link_avail: false,
          desc: "Provide ongoing Ghost CMS website maintenance and support, including SEO strategies to enhance your online presence.",
        },
        {
          name: "TYPO3 Website Creation & Maintenance",
          icon: faCalendarCheck,
          link: "",
          link_avail: false,
          desc: "Provide ongoing TYPO3 website maintenance and support, including SEO strategies to enhance your online presence.",
        },
        {
          name: "Headless CMS Solutions with Comprehensive Support",
          icon: faCalendarCheck,
          link: "",
          link_avail: false,
          desc: "Provide ongoing maintenance and support for your headless CMS-powered website, including SEO strategies to enhance your online presence.",
        },
      ];

      desc =
        "Our CMS website development services provide comprehensive solutions to create and maintain robust, feature-rich websites tailored to your business needs. Our expert team will ensure your site remains secure, optimized for search, and continuously evolving to meet customer demands.";

      headline = "Seamless CMS Website Development and Maintenance.";

      subHeadline =
        "Build and sustain your online presence effortlessly with our expert solutions.";

      first_button_text = "Explore Our CMS Development Services";

      testimony_first_text = "⁠Completed CMS Development Projects";

      testimony_first_number = 95;

      testimony_show_percentage = false;

      testimony_second_text = "Clients Utilizing Our Maintenance Services";

      testimony_second_number = 80;
      break;

    case "e-commerce_website_development":
      keyFeature = [];

      backgroundImages = [
        e_commerce_bg1,
        e_commerce_bg2,
        e_commerce_bg3,
        e_commerce_bg4,
        e_commerce_bg5,
      ];

      purposes = ["E-commerce Development", "Consultation", "General Inquiry"];

      reasons = [
        {
          name: "Proven Success in E-commerce Projects",
          desc: "With a proven track record, we have successfully delivered high-performance e-commerce websites that consistently increase conversions and drive growth for service businesses.",
        },
        {
          name: "Personalized E-commerce Solutions",
          desc: "Our team specializes in tailoring e-commerce websites to your unique business needs, ensuring seamless user experiences that reflect your brand identity and engage your customers.",
        },
        {
          name: "Expert E-commerce Development Team",
          desc: "Our dedicated team of expert developers and designers bring years of experience to the table, crafting e-commerce websites that are optimized for both user experience and business performance.",
        },
        {
          name: "Data-Driven Design and Development",
          desc: "By leveraging real-time data and analytics, we ensure that every aspect of your website is designed and developed with a focus on enhancing user engagement, conversion rates, and overall functionality.",
        },
        {
          name: "Transparent Project Communication and Reporting",
          desc: "We prioritize clear and open communication, providing you with regular progress updates and detailed reports, so you always know where your project stands and feel confident in our approach.",
        },
        {
          name: "Competitive Pricing for E-commerce Service",
          desc: "We offer highly competitive pricing that ensures you receive the best value for your investment, delivering cost-effective, high-quality e-commerce solutions tailored to your specific needs.",
        },
      ];

      services = [
        {
          name: "Core E-commerce Development Services",
          icon: faStoreAlt, // Changed to e-commerce icon
          link: "",
          link_avail: false,
          desc: "Create robust e-commerce websites to showcase products, integrate shopping carts, and enable secure online payments.",
        },
        {
          name: "Custom E-commerce Website Development",
          icon: faDumbbell, // Kept as is, relevant for personal trainer
          link: "",
          link_avail: false,
          desc: "Design personalized e-commerce websites for fitness professionals to promote programs, manage sessions, and provide online bookings.",
        },
        {
          name: "Responsive Design for Mobile and Desktop",
          icon: faTools, // Changed to a tool icon, relevant to responsive design
          link: "",
          link_avail: false,
          desc: "Develop professional websites that adapt seamlessly across all devices, ensuring a smooth user experience on both mobile and desktop.",
        },
        {
          name: "E-commerce Platform Integration",
          icon: faChalkboardTeacher, // Changed to match consulting and platform integration
          link: "",
          link_avail: false,
          desc: "Integrate e-commerce platforms into your website to enhance functionality with product management, order processing, and secure payment systems.",
        },
        {
          name: "Payment Gateway Setup",
          icon: faGavel, // Kept as is, related to legal services and security
          link: "",
          link_avail: false,
          desc: "Integrate payment gateways securely into your website to allow smooth transactions for online purchases, bookings, and donations.",
        },
        {
          name: "Ongoing Maintenance and SEO Improvements",
          icon: faCalendarAlt, // Kept as is, relevant for ongoing support and scheduling
          link: "",
          link_avail: false,
          desc: "Ensure your website remains up-to-date with ongoing maintenance, and improve its visibility with SEO strategies to enhance online presence.",
        },
      ];

      desc =
        "We develop powerful e-commerce platforms that drive online sales. Our expert team designs secure, feature-rich websites integrated with payment processing, inventory management, and seamless customer experiences.";

      headline = "Unlock Sales Potential with Custom E-commerce Development.";

      subHeadline =
        "Transform your business into a thriving online store with our expert eCommerce solutions.";

      first_button_text = "Explore Our E-commerce Services";

      testimony_first_text = "Completed E-commerce Projects";

      testimony_first_number = 59;

      testimony_show_percentage = false;

      testimony_second_text = "⁠Satisfied Online Store Owners";

      testimony_second_number = 44;
      break;

    case "blogging_website_development":
      keyFeature = [
        {
          feature: "⁠  ⁠User-Centric Design Focused on Readability and UX",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "SEO Optimization for Increased Visibility and Traffic",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature:
            " ⁠Easy-to-Use Content Management Systems for Simple Updates",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: " ⁠Social Media Integration to Enhance Engagement",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Ongoing Support and Maintenance Packages Available",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Content Strategy Consultation for Effective Blogging",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [blog_bg1, blog_bg2, blog_bg3, blog_bg4, blog_bg5];

      purposes = [
        " Blog Development",
        "Maintenance Inquiry",
        "General Consultation",
      ];

      reasons = [
        {
          name: "⁠⁠Proven Track Record in Blogging Website Projects",
          desc: "We have a successful history of building impactful blogging websites across various industries, delivering quality results that drive engagement and satisfaction.",
        },
        {
          name: "⁠Tailored Solutions for Individual Needs and Stylistic Preferences",
          desc: "We customize each project to reflect your unique vision and style, ensuring that every aspect of the website meets your specific requirements and aesthetic preferences.",
        },
        {
          name: "Experienced Team of Developers Specializing in Blogging Platforms",
          desc: "Our team of skilled developers and designers bring extensive experience in blogging platforms, creating high-performing websites optimized for content sharing and user interaction.",
        },
        {
          name: "⁠Robust Data-Driven Approach for Enhanced Reader Experience",
          desc: "By leveraging data insights, we design and develop user-friendly websites that improve reader engagement and streamline the browsing experience.",
        },
        {
          name: "⁠Emphasis on Communication and Client Satisfaction",
          desc: "We prioritize transparent communication and client feedback, keeping you informed and involved throughout the entire development process for a smooth collaboration.",
        },
        {
          name: " ⁠Affordable Packages for Development and Ongoing Maintenance",
          desc: "Our cost-effective development and maintenance packages ensure you receive high-quality services that meet your budget while maximizing the value of your investment.",
        },
      ];

      services = [
        {
          name: "⁠⁠Custom WordPress Blog Development",
          icon: faForwardStep,
          link: "",
          link_avail: false,
          desc: "Develop highly customizable WordPress blogs tailored to your content needs, with responsive design, SEO optimization, and easy-to-use content management.",
        },
        {
          name: "⁠Ghost Blogging Platform Setup and Management",
          icon: faGhost,
          link: "",
          link_avail: false,
          desc: "Set up and manage Ghost blogging platforms designed for simplicity and speed, ideal for writers and publishers focusing on content-driven experiences.",
        },
        {
          name: "Blogger Website Development Services",
          icon: faBlog,
          link: "",
          link_avail: false,
          desc: "Develop engaging Blogger sites with user-friendly layouts, customizable themes, and integration with Google services to support your blogging journey.",
        },
        {
          name: "⁠Medium-like Custom Blog Solutions",
          icon: faNewspaper,
          link: "",
          link_avail: false,
          desc: "Create platforms with a Medium-like experience, enabling simple, elegant content publication and a reader-friendly interface for enhanced readability.",
        },
        {
          name: "Joomla Blog Development & Integration",
          icon: faJoint,
          link: "",
          link_avail: false,
          desc: "Build and integrate Joomla-powered blogs, offering flexible content management and customization for unique blog layouts and functionality.",
        },
        {
          name: "⁠Wix Blog Creation & Optimization",
          icon: faWindowMaximize,
          link: "",
          link_avail: false,
          desc: "Design and optimize blogs on Wix with visually appealing templates, intuitive drag-and-drop editing, and SEO-friendly architecture to boost visibility.",
        },
        {
          name: "⁠Squarespace Blogging Website Development",
          icon: faSquare,
          link: "",
          link_avail: false,
          desc: "Develop aesthetically pleasing blogs on Squarespace with built-in SEO tools, customizable templates, and a focus on smooth content management.",
        },
        {
          name: "Static Site Generator Blogs (e.g., Jekyll, Hugo)",
          icon: faFileCode,
          link: "",
          link_avail: false,
          desc: "Build lightning-fast, secure static blogs using Jekyll or Hugo, ideal for content-heavy sites requiring minimal maintenance and high performance.",
        },
      ];
      desc =
        "Bring your blog to life with our specialized blogging website solutions, tailored to enhance readability, user engagement, and SEO performance. Whether you're an individual blogger or a content-driven business.";

      headline = "Create Your Voice with Custom Blogging Website Development";

      subHeadline =
        "Build, manage, and grow your blog effortlessly with our expert solutions.";

      first_button_text = "Explore Our Blogging Development Services";

      testimony_first_text = "Completed Blogging Projects";

      testimony_first_number = 75;

      testimony_show_percentage = false;

      testimony_second_text = "Satisfied Bloggers Using Our Services";

      testimony_second_number = 90;
      break;

    default:
      break;
  }

  return (
    <div className="mt-8">
      <Helmet>
        <title>
          DigitalPath | Web Development | {convertToTitleCase(category)}
        </title>
        <meta name="description" content="" />
      </Helmet>
      <HeroSection
        backgroundImages={backgroundImages}
        big_title={headline}
        small_title={subHeadline}
        first_button_text={first_button_text}
        first_button_link={`/web-development/${category}/#contact`}
        second_button_text={"Contact Us on WhatsApp"}
        second_button_link={"https://wa.me/2347068546898"}
      />
      <FloatingChatWidget />
      <ServicesOverview
        services={services}
        title={convertToTitleCase(category)}
        desc={desc}
        btn_text={"See More"}
      />

      {keyFeature.length > 0 && <KetFeatures keyFeature={keyFeature} />}

      <WhyChooseUs reasons={reasons} />

      <BlogHighlights />
      <>
        <h2 className="text-orange-800 text-2xl p-3">
          {filteredProjects.length > 0 && (
            <>Our Project For {convertToTitleCase(category)}</>
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="border p-4 rounded shadow">
                <LazyLoadImage
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 block"
                >
                  Visit Site
                </a>
              </div>
            ))
          ) : (
            <p>No projects found in this category.</p>
          )}
        </div>
      </>

      <Testimony
        first_number={testimony_first_number}
        second_number={testimony_second_number}
        first_text={testimony_first_text}
        second_text={testimony_second_text}
        percentage={testimony_show_percentage}
      />

      <Stacks stackItems={stackItems} />

      {/* <ContactUs purposes={purposes} /> */}
      <div className="flex justify-center items-center mb-4 min-h-screen">
        {displayContactForm()}
      </div>
    </div>
  );
}

export default WebDevelopmentCategory;
