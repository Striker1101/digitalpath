import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../Components/HeroSection";

// business background
import email_marketing_bg1 from "../../Assets/images/EmailMarketing/bg1.jpeg";
import email_marketing_bg2 from "../../Assets/images/EmailMarketing/bg2.jpeg";
import email_marketing_bg3 from "../../Assets/images/EmailMarketing/bg3.jpeg";
import email_marketing_bg4 from "../../Assets/images/EmailMarketing/bg4.jpeg";
import email_marketing_bg5 from "../../Assets/images/EmailMarketing/bg5.jpeg";

//social media management
import social_media_management_bg1 from "../../Assets/images/SocailMediaManagement/bg1.jpeg";
import social_media_management_bg2 from "../../Assets/images/SocailMediaManagement/bg2.jpeg";
import social_media_management_bg3 from "../../Assets/images/SocailMediaManagement/bg3.jpeg";
import social_media_management_bg4 from "../../Assets/images/SocailMediaManagement/bg4.jpeg";
import social_media_management_bg5 from "../../Assets/images/SocailMediaManagement/bg5.jpeg";

//content marketing
import content_marketing_bg1 from "../../Assets/images/ContentMarketing/bg1.jpeg";
import content_marketing_bg2 from "../../Assets/images/ContentMarketing/bg2.jpeg";
import content_marketing_bg3 from "../../Assets/images/ContentMarketing/bg3.jpeg";
import content_marketing_bg4 from "../../Assets/images/ContentMarketing/bg4.jpeg";
import content_marketing_bg5 from "../../Assets/images/ContentMarketing/bg5.jpeg";

//pay per click
import ppc_bg1 from "../../Assets/images/PayPerClick/bg1.jpeg";
import ppc_bg2 from "../../Assets/images/PayPerClick/bg2.jpeg";
import ppc_bg3 from "../../Assets/images/PayPerClick/bg3.jpeg";
import ppc_bg4 from "../../Assets/images/PayPerClick/bg4.jpeg";
import ppc_bg5 from "../../Assets/images/PayPerClick/bg5.jpeg";

//brand management and position
import bmp_bg1 from "../../Assets/images/BrandManagment/bg1.jpeg";
import bmp_bg2 from "../../Assets/images/BrandManagment/bg2.jpeg";

//brand management content
import dmc_bg1 from "../../Assets/images/DigitalMarketingConsultant/bg1.jpeg";
import dmc_bg2 from "../../Assets/images/DigitalMarketingConsultant/bg2.jpeg";
import dmc_bg3 from "../../Assets/images/DigitalMarketingConsultant/bg3.jpeg";
import dmc_bg4 from "../../Assets/images/DigitalMarketingConsultant/bg4.jpeg";
import dmc_bg5 from "../../Assets/images/DigitalMarketingConsultant/bg5.jpeg";
import dmc_bg6 from "../../Assets/images/DigitalMarketingConsultant/bg6.jpeg";
import dmc_bg7 from "../../Assets/images/DigitalMarketingConsultant/bg7.jpeg";
import dmc_bg8 from "../../Assets/images/DigitalMarketingConsultant/bg8.jpeg";

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

import WhyChooseUs from "../WebDevelopment/WhyChooseUs";
import KetFeatures from "../WebDevelopment/KetFeatures";
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
  FaToolbox,
  FaRegClipboard,
  FaSearchDollar,
} from "react-icons/fa";
import BlogHighlights from "../WebDevelopment/BlogHighlights";
import ContactUs from "../../Components/ContactUs";
import { DataContext } from "../../store";
import { Helmet } from "react-helmet-async";
import Stacks from "../../Components/Stacks";

import nextjs from "../../Assets/images/nextjs.png";
import firebase from "../../Assets/images/firebase.png";
import mysql from "../../Assets/images/mysql.png";
import download from "../../Assets/images/download.jpeg";
import nestjs from "../../Assets/images/nestjs.png";
import DigitalMarketingTestimony from "./DigitalMarketTestimony";
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

let client_lists = [];

function convertToTitleCase(str) {
  return str
    .split("_") // Split the string at underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words with a space
}

function DigitalMarketingCategory() {
  // Get the category parameter from the URL
  const { category } = useParams();
  const { projects } = useContext(DataContext);

  // Filter projects based on the category
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  function displayContactForm() {
    switch (category) {
      case "email_marketing":
        return (
          <iframe
            title="email_marketing"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRh-gfgIz-cEtQ6mxcF2_mTwjmxdD13rPv-azkUZU3p82qxA/viewform?embedded=true"
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

      case "social_media_management":
        return (
          <iframe
            title="social_media_management"
            src="https://docs.google.com/forms/d/e/1FAIpQLScJFUXeV684bWBSpqQoc_Q8vRHMCJBGqVZsuqSiuXesYyGQAw/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "content_marketing":
        return (
          <iframe
            title="content_marketing"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRh-gfgIz-cEtQ6mxcF2_mTwjmxdD13rPv-azkUZU3p82qxA/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "pay_per_click_advertising":
        return (
          <iframe
            title="pay_per_click_advertising"
            src="https://docs.google.com/forms/d/e/1FAIpQLScEgj1hNo1nkGj8twa6W9VciTzll6pLySsulEZKJhnx0GKnrQ/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "brand_management_and_positioning":
        return (
          <iframe
            title="brand_management_and_positioning"
            src="https://docs.google.com/forms/d/e/1FAIpQLSe_llVloTPV-YQ0EkW2sN0pgYUDnSn1x0qNIn3_vX7Je6ploA/viewform?embedded=true"
            width="640"
            height="1025"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );

      case "digital_marketing_consultation":
        return (
          <iframe
            title="digital_marketing_consultation"
            src="https://docs.google.com/forms/d/e/1FAIpQLSenPy0u2xbO7_hZAAhmp6nP0Bu-vMzHTzpW2C3IdUcm0yzOlQ/viewform?embedded=true"
            width="640"
            height="1025"
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
    case "email_marketing":
      keyFeature = [
        {
          feature: "⁠Custom email strategies tailored to your audience",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature:
            " ⁠Professionally designed email templates that reflect your brand",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature:
            "Segmentation for targeted messaging to different customer groups",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature:
            " ⁠Comprehensive analytics to track open rates, click-through rates, and conversions",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Automation tools to nurture leads without manual effort",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Ongoing Support and Consultation for API Optimization",
          icon: <FaToolbox />,
          link: "",
        },
        {
          feature:
            "Continuous improvement through A/B testing and optimization",
          icon: <FaUserCog />,
          link: "",
        },
      ];

      backgroundImages = [
        email_marketing_bg1,
        email_marketing_bg2,
        email_marketing_bg3,
        email_marketing_bg4,
        email_marketing_bg5,
      ];

      purposes = [
        "Email Marketing Inquiry",
        "Strategy Consultation",
        "List Building Support",
        "General Feedback",
      ];

      reasons = [
        {
          name: "⁠Experienced Email Marketing Specialists with Proven Results",
          desc: "Our skilled developers bring industry expertise to build reliable, high-quality blogging websites that maximize user engagement and satisfaction.",
        },
        {
          name: "Focus on Personalization to Drive Engagement",
          desc: "We have a strong history of successfully integrating APIs into blogging platforms, enhancing functionality and user experience with seamless interactions.",
        },
        {
          name: "Transparent Reporting on Campaign Performance",
          desc: "We design tailored blogging solutions aligned with your business objectives, optimizing functionality and enhancing your brand identity.",
        },
        {
          name: "⁠Commitment to Best Practices and Compliance",
          desc: "We prioritize security and adhere to best practices, ensuring your blogging platform is safe, reliable, and compliant with industry regulations.",
        },
        {
          name: "Ongoing Support and Strategy Adaptation",
          desc: "We maintain open communication and provide ongoing feedback, ensuring your vision is fully realized and the development process is smooth.",
        },
        {
          name: "⁠Success Stories Backed by Data",
          desc: "Our dedicated support team is always available to assist with any questions or issues, ensuring your blog’s continued success and performance optimization.",
        },
      ];

      services = [
        {
          name: "List Building and Segmentation",
          icon: faTools, // Custom API development often requires a hands-on approach, so we can use a tools icon.
          link: "",
          link_avail: false,
          desc: "Create custom APIs tailored to your business needs, ensuring seamless integration with your systems and optimized for performance.",
        },
        {
          name: "⁠Email Campaign Strategy Development",
          icon: faSquareShareNodes, // The icon for API integration can represent connectivity or sharing.
          link: "",
          link_avail: false,
          desc: "Integrate third-party APIs into your systems to enhance functionality and streamline workflows, improving business operations.",
        },
        {
          name: "Email Design and Template Creation",
          icon: faServer, // RESTful and SOAP development relates to server-side programming.
          link: "",
          link_avail: false,
          desc: "Develop RESTful and SOAP APIs for seamless communication between your application and third-party systems, ensuring fast and reliable data transfer.",
        },
        {
          name: "⁠Automated Email Sequences",
          icon: faBook, // API documentation is about providing clear instructions, so a book icon fits.
          link: "",
          link_avail: false,
          desc: "Create comprehensive and easy-to-understand API documentation to guide developers in integrating and using your APIs efficiently.",
        },
        {
          name: "⁠A/B Testing and Optimization",
          icon: faCheckCircle, // QA and testing are about ensuring the quality and reliability of APIs, so a check icon fits well.
          link: "",
          link_avail: false,
          desc: "Test and verify the functionality of your APIs, ensuring that they meet high standards of performance, security, and reliability.",
        },
        {
          name: "Performance Analytics and Reporting",
          icon: faCube, // Microservices architecture can be represented by the cube, symbolizing modular components.
          link: "",
          link_avail: false,
          desc: "Design and implement microservices architectures to break down your application into manageable, scalable, and independently deployable services.",
        },
        {
          name: "⁠Compliance with Email Regulations (e.g., GDPR, CAN-SPAM)",
          icon: faPlug, // Legacy system integration typically involves connecting older systems with newer ones.
          link: "",
          link_avail: false,
          desc: "Integrate legacy systems with modern applications and services to ensure that older technologies continue to work efficiently within new ecosystems.",
        },
        {
          name: "⁠Drip Campaigns",
          icon: faLink, // Third-party API integration involves connecting different systems, represented by the link icon.
          link: "",
          link_avail: false,
          desc: "Seamlessly integrate third-party APIs to extend your application's capabilities and enhance user experience with external services.",
        },
        {
          name: "Customer Journey Mapping and Email Workflows",
          icon: faHeartbeat, // API management and monitoring often involves performance tracking, best represented by a heartbeat icon.
          link: "",
          link_avail: false,
          desc: "Monitor and manage your APIs to ensure optimal performance, track usage, detect issues, and maintain security across your services.",
        },
        {
          name: "⁠Re-Engagement Campaigns",
          icon: faBook, // API documentation is about providing clear instructions, so a book icon fits.
          link: "",
          link_avail: false,
          desc: "Create comprehensive and easy-to-understand API documentation to guide developers in integrating and using your APIs efficiently.",
        },
      ];

      desc =
        "Enhance your systems with seamless API integrations, connecting external services to streamline operations and improve functionality.";

      headline = "Engage, Nurture, and Convert with Strategic Email Marketing.";

      subHeadline =
        "Crafting personalized email campaigns that deliver results";

      first_button_text = "Explore Our Email Marketing Services";

      client_lists = [
        "Increased Open and Click-Through Rates",
        "⁠Enhanced Customer Engagement and Retention",
        "⁠Boosted Conversion Rates",
      ];
      break;

    case "social_media_management":
      keyFeature = [
        {
          feature:
            "⁠Customized strategies to achieve specific business objectives",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "Engaging content tailored to target audiences",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "Comprehensive analytics to measure campaign success",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Proactive community management to enhance brand loyalty",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Flexible services to adapt to changing market trends",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "⁠Continuous support for optimizing social media efforts",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        social_media_management_bg1,
        social_media_management_bg2,
        social_media_management_bg3,
        social_media_management_bg4,
        social_media_management_bg5,
      ];

      purposes = [
        "Social Media Strategy Inquiry",
        "Content Support",
        "Consultation Request",
        "General Feedback",
      ];

      reasons = [
        {
          name: "Engaging content tailored to target audiences",
          desc: "We specialize in crafting compelling content that resonates with your audience, driving engagement and enhancing user satisfaction.",
        },
        {
          name: "Customized strategies to achieve specific business objectives",
          desc: "Our solutions are tailored to your unique goals, creating blogging platforms that reflect your brand identity and support your vision.",
        },
        {
          name: "Comprehensive analytics to measure campaign success",
          desc: "We provide in-depth analytics tools to track performance, helping you refine strategies and achieve measurable results.",
        },
        {
          name: "Proactive community management to enhance brand loyalty",
          desc: "Our team focuses on building strong community engagement, fostering loyal relationships, and amplifying your brand’s presence.",
        },
        {
          name: "Flexible services to adapt to changing market trends",
          desc: "We offer scalable and adaptable services, ensuring your blog stays relevant and competitive in an ever-changing market.",
        },
        {
          name: "Continuous support for optimizing social media efforts",
          desc: "Our dedicated support team helps you integrate blogging with social media, enhancing visibility and driving sustained growth.",
        },
      ];

      services = [
        {
          name: "Social Media Strategy Development",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "Create effective social media strategies that align with your business goals, driving engagement and building brand awareness.",
        },
        {
          name: "Content Creation and Curation",
          icon: faDesktop,
          link: "",
          link_avail: false,
          desc: "Develop engaging and high-quality content tailored to your audience, ensuring consistent messaging across platforms.",
        },
        {
          name: "Social Media Advertising",
          icon: faDatabase,
          link: "",
          link_avail: false,
          desc: "Plan and execute targeted social media advertising campaigns to maximize reach and return on investment.",
        },
        {
          name: "Community Management",
          icon: faMobileAlt,
          link: "",
          link_avail: false,
          desc: "Foster and manage online communities, ensuring active engagement and addressing audience queries promptly.",
        },
        {
          name: "Social Profile Setup and Optimization",
          icon: faCog,
          link: "",
          link_avail: false,
          desc: "Set up and optimize social media profiles to ensure consistency, visibility, and alignment with your brand identity.",
        },
        {
          name: "Analytics and Reporting",
          icon: faBug,
          link: "",
          link_avail: false,
          desc: "Track performance metrics and provide detailed reports to help refine strategies and improve campaign effectiveness.",
        },
        {
          name: "Influencer Collaborations",
          icon: faCloud,
          link: "",
          link_avail: false,
          desc: "Partner with influencers to amplify your brand message and reach wider, more engaged audiences.",
        },
        {
          name: "Crisis Management",
          icon: faServer,
          link: "",
          link_avail: false,
          desc: "Develop and implement crisis management strategies to protect your brand’s reputation during challenging times.",
        },
        {
          name: "SEO and Social Integration",
          icon: faSync,
          link: "",
          link_avail: false,
          desc: "Integrate SEO best practices with social media strategies to enhance online visibility and audience reach.",
        },
      ];

      desc =
        "Transform your online presence with our expert social media management services, tailored to boost engagement, build brand loyalty, and drive results. From strategy development to content creation and analytics, we ensure your social platforms work seamlessly to grow your audience and achieve your business goals.";

      headline = "Elevate Your Brand with Expert Social Media Management.";

      subHeadline =
        "Strategic social media solutions tailored to enhance your online presence";

      first_button_text = "Discover Our Services";

      client_lists = [
        "Increased Engagement Rates",
        "⁠Growth in Follower Base",
        "Improved Brand Awareness",
      ];
      break;

    case "content_marketing":
      keyFeature = [
        {
          feature:
            "Customized content strategies tailored to your business goals",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature:
            " ⁠High-quality, engaging content designed for your target audience",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature:
            "⁠SEO-optimized content to improve organic search visibility",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Comprehensive analytics to assess content performance",
          icon: <FaTools />,
          link: "",
        },
        {
          feature:
            "⁠Effective distribution methods to maximize reach and engagement",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature:
            "⁠Continuous content optimization based on audience feedback and trends",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [
        content_marketing_bg1,
        content_marketing_bg2,
        content_marketing_bg3,
        content_marketing_bg4,
        content_marketing_bg5,
      ];

      purposes = [
        "Content Marketing Inquiry",
        " Strategy Consultation",
        " Content Support",
        "General Feedback",
      ];

      reasons = [
        {
          name: "Experienced Content Marketers with Proven Results",
          desc: "Our team of content marketing experts has a track record of delivering impactful campaigns that drive engagement and business growth, tailored to various industries and audiences.",
        },
        {
          name: "Data-Driven Insights for Continuous Improvement",
          desc: "We leverage analytics and performance metrics to optimize strategies, ensuring your content and campaigns consistently deliver measurable results.",
        },
        {
          name: "Commitment to Quality and Originality",
          desc: "We focus on creating high-quality, original content that reflects your brand identity, setting you apart from competitors and driving audience engagement.",
        },
        {
          name: "Transparent Communication and Reporting",
          desc: "We provide clear, detailed reporting and maintain open communication to ensure you stay informed and involved throughout every stage of our content marketing process.",
        },
        {
          name: "Ongoing Support to Adapt to Market Changes",
          desc: "Our team provides continuous support and adapts strategies to evolving market trends, ensuring your content remains relevant and effective in achieving your goals.",
        },
      ];

      services = [
        {
          name: "Content Strategy Development",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "Craft tailored content strategies to align with your business objectives, ensuring consistent messaging and maximum audience engagement.",
        },
        {
          name: "Blog Writing and Management",
          icon: faAnchorCircleExclamation,
          link: "",
          link_avail: false,
          desc: "Deliver expertly written blogs and manage content calendars to keep your audience informed and engaged with fresh, relevant content.",
        },
        {
          name: "SEO Content Creation",
          icon: faAdjust,
          link: "",
          link_avail: false,
          desc: "Develop high-quality, SEO-optimized content that boosts search engine rankings and drives organic traffic to your website.",
        },
        {
          name: "Social Media Content",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "Create engaging social media content that aligns with platform best practices, enhancing your brand's visibility and audience interaction.",
        },
        {
          name: "Email Marketing Content",
          icon: faGlobe,
          link: "",
          link_avail: false,
          desc: "Design compelling email campaigns with persuasive content that drives open rates, clicks, and customer conversions.",
        },
        {
          name: "Infographic and Visual Content Design",
          icon: faPlugCircleCheck,
          link: "",
          link_avail: false,
          desc: "Produce visually appealing infographics and visual content that convey complex information in an easily digestible and engaging format.",
        },
        {
          name: "Video Content Production",
          icon: faStore,
          link: "",
          link_avail: false,
          desc: "Create captivating video content tailored to your brand, from promotional videos to tutorials, to drive audience engagement.",
        },
        {
          name: "E-books and Whitepapers",
          icon: faBuilding,
          link: "",
          link_avail: false,
          desc: "Produce in-depth e-books and whitepapers that showcase your expertise and provide value to your audience, establishing authority in your industry.",
        },
        {
          name: "Content Distribution and Promotion",
          icon: faPaintBrush,
          link: "",
          link_avail: false,
          desc: "Implement strategic content distribution and promotion campaigns to ensure your content reaches the right audience effectively.",
        },
        {
          name: "Analytics and Performance Tracking",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Monitor and analyze content performance metrics to refine strategies and maximize the impact of your content marketing efforts.",
        },
      ];

      desc =
        "Elevate your brand's online presence with our expert content marketing services, designed to engage your audience, drive traffic, and achieve measurable results through tailored strategies and compelling content.";

      headline = "Drive Engagement and Growth with Expert Content Marketing";

      subHeadline =
        "Strategic content that captures attention and converts leads into customers.";

      first_button_text = "Explore Our Content Services";

      client_lists = [
        "⁠Increased Engagement and Interaction Rates",
        "⁠Growth in Audience Reach and Brand Awareness",
        "⁠Improved Conversion Metrics",
      ];
      break;

    case "pay_per_click_advertising":
      keyFeature = [
        {
          feature: "⁠Customized campaigns that target specific market segments",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature: "⁠Data-driven decision-making for continuous improvement",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "⁠Comprehensive tracking to measure ad performance",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Collaborative ad creation to align with brand messaging",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "⁠Flexible budget options to suit different business sizes",
          icon: <FaRegClipboard />,
          link: "",
        },
        {
          feature: "Continuous optimization for better results over time",
          icon: <FaSearchDollar />,
          link: "",
        },
      ];

      backgroundImages = [ppc_bg1, ppc_bg2, ppc_bg3, ppc_bg4, ppc_bg5];

      purposes = [
        "PPC Campaign Inquiry",
        "Budget Support",
        "Consultation Request",
        "General Feedback",
      ];

      reasons = [
        {
          name: "⁠Experienced PPC Specialists with a Proven Track Record",
          desc: "Our team of PPC experts has a history of delivering successful campaigns, optimizing ad performance, and achieving measurable results across diverse industries.",
        },
        {
          name: "Transparent Reporting on Campaign Performance",
          desc: "We provide clear, detailed reports on campaign progress and performance, ensuring you have complete visibility and confidence in your advertising investment.",
        },
        {
          name: "⁠Tailored Strategies to Meet Your Business Goals",
          desc: "We design PPC strategies customized to your specific objectives, helping you reach your target audience effectively and maximize ROI.",
        },
        {
          name: "Commitment to Best Practices in Ad Management",
          desc: "Our PPC management services adhere to industry best practices, ensuring optimal ad placements, budget utilization, and ongoing performance improvements.",
        },
        {
          name: "Ongoing Communication and Support",
          desc: "We prioritize collaboration through consistent communication and provide ongoing support to adapt to market trends and your evolving business needs.",
        },
        {
          name: "⁠Data-Driven Approaches for Effective Results",
          desc: "Our campaigns leverage in-depth analytics and data insights to optimize performance, ensuring your ads deliver impactful and measurable outcomes.",
        },
      ];

      services = [
        {
          name: "Keyword Research and Selection",
          icon: faBroom,
          link: "",
          link_avail: false,
          desc: "Identify high-performing keywords to target the right audience and maximize ad relevance for improved campaign success.",
        },
        {
          name: "Campaign Strategy Development",
          icon: faDumbbell,
          link: "",
          link_avail: false,
          desc: "Develop tailored PPC strategies to align with your business goals, focusing on audience targeting and competitive positioning.",
        },
        {
          name: "Ad Creation and Optimization",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Design and refine compelling ad copy and visuals to attract clicks, increase conversions, and improve ad quality scores.",
        },
        {
          name: "A/B Testing and Performance Analysis",
          icon: faUserTie,
          link: "",
          link_avail: false,
          desc: "Run experiments on ad variations to identify the best-performing elements and continuously optimize campaign results.",
        },
        {
          name: "Remarketing Strategies",
          icon: faGavel,
          link: "",
          link_avail: false,
          desc: "Implement remarketing campaigns to re-engage users who have interacted with your brand, boosting conversion rates.",
        },
        {
          name: "Conversion Tracking and Analytics",
          icon: faCalendarAlt,
          link: "",
          link_avail: false,
          desc: "Set up conversion tracking to monitor campaign performance and gain actionable insights for data-driven decisions.",
        },
        {
          name: "Budget Management",
          icon: faBuilding,
          link: "",
          link_avail: false,
          desc: "Optimize campaign budgets to ensure efficient allocation of resources, maximizing ROI and minimizing wasted spend.",
        },
        {
          name: "Competitor Analysis",
          icon: faDesktop,
          link: "",
          link_avail: false,
          desc: "Analyze competitors’ strategies to uncover opportunities and refine your campaign to stay ahead in the market.",
        },
        {
          name: "Landing Page Optimization",
          icon: faHeadset,
          link: "",
          link_avail: false,
          desc: "Enhance landing page design and content to boost user engagement, reduce bounce rates, and increase conversions.",
        },
        {
          name: "Ongoing Support and Consultation",
          icon: faCameraRetro,
          link: "",
          link_avail: false,
          desc: "Provide continuous support and expert guidance to adapt your campaigns to evolving market trends and business goals.",
        },
      ];

      desc =
        "Maximize your ROI with expertly managed pay-per-click advertising campaigns, designed to drive targeted traffic, boost conversions, and achieve your business goals.";

      headline = "Maximize Your ROI with Expert PPC Advertising.";

      subHeadline =
        "Strategic PPC solutions designed to drive targeted traffic and increase conversions.";

      first_button_text = "Explore Our PPC Services";

      client_lists = [
        "Increased Click-Through Rates (CTR)",
        "⁠Growth in Conversion Rates",
        "⁠Significant ROI Improvements",
      ];
      break;

    case "brand_management_and_positioning":
      keyFeature = [
        {
          feature: "⁠Comprehensive brand audits to assess current positioning",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature:
            " ⁠Tailored strategies to align your brand with target audiences",
          icon: <FaClipboardList />,
          link: "",
        },
        {
          feature: "⁠Creative storytelling to communicate your brand's essence",
          icon: <FaSearch />,
          link: "",
        },
        {
          feature: "Visual identity design that resonates and differentiates",
          icon: <FaTools />,
          link: "",
        },
        {
          feature:
            " ⁠Data-driven insights from market research and competitive analysis",
          icon: <FaTools />,
          link: "",
        },
        {
          feature: "Ongoing support to adapt brand strategies as needed",
          icon: <FaTools />,
          link: "",
        },
      ];

      backgroundImages = [bmp_bg1, bmp_bg2];

      purposes = [
        "Brand Strategy Inquiry",
        "Positioning Consultation",
        "Visual Identity Support",
        "General Feedback",
      ];

      reasons = [
        {
          name: "Experts with Extensive Experience in Brand Strategy",
          desc: "Our team has extensive expertise in creating comprehensive brand strategies, ensuring your brand stands out and connects deeply with your target audience.",
        },
        {
          name: "Committed to Authentic Storytelling for Brand Resonance",
          desc: "We craft compelling narratives that authentically represent your brand, fostering stronger emotional connections and lasting impressions with your audience.",
        },
        {
          name: "Data-Driven Approaches for Effective Positioning",
          desc: "We leverage data insights to position your brand effectively in the market, aligning with audience preferences and outshining competitors.",
        },
        {
          name: "Transparent Processes and Continuous Communication",
          desc: "We maintain open lines of communication, keeping you informed every step of the way, ensuring a collaborative approach to your branding goals.",
        },
        {
          name: "Proven Results in Building and Strengthening Brands",
          desc: "Our work is backed by proven results, successfully building and enhancing brands to increase visibility, trust, and customer loyalty.",
        },
        {
          name: "Tailored Solutions for Diverse Industries",
          desc: "We offer personalized branding strategies designed to meet the unique challenges and opportunities of various industries, ensuring relevance and impact.",
        },
      ];

      services = [
        {
          name: "⁠Visual Identity Design (Logos, Color Schemes, Typography)",
          icon: faMagnifyingGlass,
          link: "",
          link_avail: false,
          desc: "Craft visually appealing logos, cohesive color schemes, and typography that reinforce your brand identity and resonate with your audience.",
        },
        {
          name: "Brand Messaging and Storytelling",
          icon: faPencilRuler,
          link: "",
          link_avail: false,
          desc: "Develop compelling brand messaging and narratives that effectively communicate your brand's vision, mission, and values.",
        },
        {
          name: "⁠Brand Strategy Development",
          icon: faPaintBrush,
          link: "",
          link_avail: false,
          desc: "Create tailored brand strategies to define your market positioning and ensure consistency across all brand touchpoints.",
        },
        {
          name: "Market Research and Competitive Analysis",
          icon: faFlaskVial,
          link: "",
          link_avail: false,
          desc: "Conduct in-depth market research and competitor analysis to uncover opportunities and guide your brand's strategic decisions.",
        },
        {
          name: "Brand Positioning Strategy",
          icon: faFlask,
          link: "",
          link_avail: false,
          desc: "Design and implement a positioning strategy that differentiates your brand, making it memorable and impactful in the market.",
        },
        {
          name: "⁠Audience Segmentation and Targeting",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "Identify and segment target audiences, tailoring strategies to effectively engage and convert specific customer groups.",
        },
        {
          name: "Brand Development and Equity Building",
          icon: faHandPointer,
          link: "",
          link_avail: false,
          desc: "Build and enhance brand equity by fostering trust, loyalty, and recognition through consistent brand communication and strategies.",
        },
        {
          name: "⁠Brand Guidelines Creation",
          icon: faUniversalAccess,
          link: "",
          link_avail: false,
          desc: "Establish comprehensive brand guidelines to ensure consistency in visual and messaging elements across all platforms and mediums.",
        },
        {
          name: "⁠Reputation Management",
          icon: faChartBar,
          link: "",
          link_avail: false,
          desc: "Monitor, manage, and improve your brand’s online reputation to build trust and credibility with your audience.",
        },
        {
          name: "⁠Brand Monitoring and Analytics",
          icon: faWrench,
          link: "",
          link_avail: false,
          desc: "Utilize analytics tools to track your brand’s performance, monitor growth, and make data-driven improvements to your strategies.",
        },
      ];

      desc =
        "Establish a powerful and unique market presence with tailored brand strategies that align your identity, messaging, and goals to drive recognition and loyalty.";

      headline =
        "Build a Stronger Brand Through Strategic Management and Positioning";

      subHeadline = "Empower your brand to stand out in a crowded marketplace.";

      first_button_text = "Discover Our Brand Management Services";

      client_lists = [
        "Improved Brand Recognition and Loyalty",
        "⁠Enhanced Market Positioning and Perception",
        "⁠Increased Customer Engagement and Trust",
      ];
      break;

    case "digital_marketing_consultation":
      keyFeature = [
        {
          feature:
            "Customized digital marketing strategies based on your unique goals",
          icon: <FaMobileAlt />,
          link: "",
        },
        {
          feature:
            "In-depth analysis of current digital presence and competitor landscape",
          icon: <FaUserCog />,
          link: "",
        },
        {
          feature: "Data-driven approach for decision-making and optimization",
          icon: <FaShieldAlt />,
          link: "",
        },
        {
          feature:
            "Expert guidance on the latest digital marketing trends and tools",
          icon: <FaSearchPlus />,
          link: "",
        },
        {
          feature:
            "Actionable insights and recommendations for measurable improvements",
          icon: <FaChartLine />,
          link: "",
        },
        {
          feature:
            "Continuous support to adapt strategies as your business evolves",
          icon: <FaLifeRing />,
          link: "",
        },
      ];
      backgroundImages = [
        dmc_bg1,
        dmc_bg2,
        dmc_bg3,
        dmc_bg4,
        dmc_bg5,
        dmc_bg7,
        dmc_bg8,
      ];

      purposes = [
        "Digital Marketing Inquiry",
        "SEO Consultation",
        "Social Media Strategy",
        "General Feedback",
      ];

      reasons = [
        {
          name: "⁠Experienced Digital Marketing Consultants with Proven Success",
          desc: "With years of expertise in digital marketing, our consultants have consistently delivered impactful results, improving website visibility and driving organic traffic for businesses across various sectors.",
        },
        {
          name: "⁠Deep Understanding of Various Digital Channels",
          desc: "Our team has a comprehensive understanding of all digital channels, utilizing SEO, content marketing, social media, and PPC strategies to ensure your brand remains visible and competitive in a crowded online space.",
        },
        {
          name: "Commitment to Collaboration and Transparency",
          desc: "We believe in close collaboration with clients, ensuring that your goals and vision are aligned with our strategies, and keeping you updated with clear and transparent communication throughout the process.",
        },
        {
          name: "Tailored Strategies that Align with Your Business Objectives",
          desc: "Each digital marketing strategy we create is customized to meet your business objectives, optimizing channels and content to drive engagement and conversion while ensuring a perfect fit with your brand values.",
        },
        {
          name: "Ongoing Education on Best Practices and Emerging Trends",
          desc: "We keep ourselves and our clients informed on the latest best practices and trends in digital marketing, ensuring that your strategies remain relevant and effective in an ever-evolving digital world.",
        },
        {
          name: "Proven Track Record of Client Success Stories",
          desc: "Our success is built on the success of our clients, with numerous case studies demonstrating how our digital marketing efforts have helped businesses grow, expand their online presence, and achieve long-term results.",
        },
      ];

      services = [
        {
          name: "⁠SEO & Content Marketing Consultation",
          icon: faMagnifyingGlass,
          link: "",
          link_avail: false,
          desc: "We offer comprehensive SEO and content marketing consultation to identify issues, discover opportunities, and provide strategic recommendations to improve search engine visibility and user engagement.",
        },
        {
          name: "Strategy Development and Roadmapping",
          icon: faKeyboard,
          link: "",
          link_avail: false,
          desc: "Our expert team develops detailed strategies and roadmaps by conducting in-depth keyword research, analyzing competition, and crafting content strategies that elevate your website's organic rankings.",
        },
        {
          name: "⁠Comprehensive Digital Marketing Audits",
          icon: faCode,
          link: "",
          link_avail: false,
          desc: "We conduct thorough digital marketing audits, optimizing meta tags, headers, content structure, and HTML elements to enhance search engine crawlability and ensure your website's relevance for target keywords.",
        },
        {
          name: "Social Media Strategy and Management Support",
          icon: faGears,
          link: "",
          link_avail: false,
          desc: "Our team offers social media strategy and management support to enhance your online presence, drive engagement, and integrate social media efforts with your SEO and content marketing campaigns.",
        },
        {
          name: "Paid Advertising Strategy (PPC, Google Ads, Social Ads)",
          icon: faPenToSquare,
          link: "",
          link_avail: false,
          desc: "We craft compelling paid advertising strategies that leverage PPC, Google Ads, and Social Ads, targeting your ideal audience and ensuring maximum ROI through optimized campaign management.",
        },
        {
          name: "⁠Email Marketing Strategy Development",
          icon: faLink,
          link: "",
          link_avail: false,
          desc: "We develop effective email marketing strategies, focusing on personalized messaging, high-quality content, and optimized email flows to build strong customer relationships and drive conversions.",
        },
        {
          name: " ⁠Analytics and Performance Monitoring",
          icon: faLocationDot,
          link: "",
          link_avail: false,
          desc: "We provide detailed analytics and performance monitoring, tracking key SEO metrics, user engagement, and campaign performance to optimize strategies and maximize results.",
        },
        {
          name: "⁠Brand Positioning and Identity Development",
          icon: faChartLine,
          link: "",
          link_avail: false,
          desc: "We assist in brand positioning and identity development, ensuring your brand resonates with your target audience through cohesive messaging, design, and market positioning strategies.",
        },
        {
          name: "⁠⁠Conversion Rate Optimization",
          icon: faMobile,
          link: "",
          link_avail: false,
          desc: "We implement targeted conversion rate optimization strategies to improve user experience, drive more conversions, and ensure your website performs optimally across all devices.",
        },
        {
          name: "⁠⁠Ongoing Support and Training",
          icon: faCartShopping,
          link: "",
          link_avail: false,
          desc: "We provide ongoing support and training to ensure you stay ahead with the latest SEO trends, continuously improving your website's performance and digital marketing strategies.",
        },
      ];

      desc =
        "Our Digital Marketing Consultation services provide expert guidance to help you craft and execute effective marketing strategies that increase your online visibility, engagement, and conversions across various digital channels.";

      headline =
        "Unlock Your Business Potential with Expert Digital Marketing Consultation";

      subHeadline =
        "Tailored strategies to elevate your online presence and achieve real results";

      first_button_text = "Discover Our Consultation Services";

      client_lists = [
        "⁠Improved ROI on marketing campaigns",
        "⁠Enhanced brand visibility and engagement",
        "⁠Successful implementation of digital strategies",
      ];

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
        first_button_link={`/digital-marketing/${category}/#services`}
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

      <DigitalMarketingTestimony clients_lists={client_lists} />

      <Stacks stackItems={stackItems} />

      {/* <ContactUs purposes={purposes} /> */}
      <section id="contact-us">
        <div className="flex justify-center items-center mb-4 min-h-screen">
          {displayContactForm()}
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingCategory;
