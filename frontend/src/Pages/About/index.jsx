import React from "react";
import logo from "../../Assets/images/logo.png";
export default function AboutUs() {
  return (
    <div className="w-full h-full pb-4 pd:mb-36 py-5 md:py-20 px-0 md:px-20 lg:px-40 bg-background2 bg-center bg-cover bg-no-repeat flex flex-col ">
      <div className="mt-20 px-6 md:px-20 pb-20 mx-auto w-11/12 md:w-full h-auto bg-white rounded-sm md:rounded-xl shadow-lg">
        <img
          src={logo}
          alt="company logo"
          className="my-12 mx-auto w-40 h-auto"
        />

        <h2 className="text-xl md:text-2xl font-bold text-primary pt-10">
          About Us
        </h2>

        <p className="text-lg text-gray-900 leading-9">
          Welcome to Digital Experts, where passion meets innovation to deliver
          exceptional solutions for businesses and individuals alike. Founded
          with the belief that technology should empower people, we are
          dedicated to creating digital solutions that drive success, streamline
          operations, and inspire growth.
        </p>

        <h3 className="font-bold text-primary mt-8">Our Journey</h3>
        <p className="text-lg text-gray-900 leading-9">
          Since our inception, we have grown from a small team of passionate
          innovators into a recognized organization known for quality, customer
          satisfaction, and industry expertise. Starting with a vision to
          provide [specific services like software development, digital
          marketing, etc.], we have continuously expanded our capabilities to
          meet the dynamic needs of clients across various sectors.
        </p>

        <h3 className="font-bold text-primary mt-8">Our Mission</h3>
        <p className="text-lg text-gray-900 leading-9">
          At Digital Experts, our mission is simple: to empower our clients by
          delivering high-quality, tailored solutions that help them reach their
          full potential. We strive to:
        </p>

        <ul className="list-disc list-inside mt-4 text-lg text-gray-900 leading-9">
          <li>
            Leverage cutting-edge technology to provide innovative solutions.
          </li>
          <li>
            Build long-term partnerships based on trust, integrity, and
            transparency.
          </li>
          <li>
            Continuously learn, grow, and adapt to stay at the forefront of
            industry trends.
          </li>
        </ul>

        <h3 className="font-bold text-primary mt-8">What We Do</h3>
        <p className="text-lg text-gray-900 leading-9">
          Our expertise spans a range of services, all designed to offer
          end-to-end support for your business:
        </p>

        <ul className="list-disc list-inside mt-4 text-lg text-gray-900 leading-9">
          <li>
            <strong>Custom Software Development</strong>: We design and build
            powerful, scalable solutions tailored to meet the unique needs of
            each client.
          </li>
          <li>
            <strong>Digital Marketing & SEO</strong>: Our team helps elevate
            your brand's online presence, driving traffic, engagement, and
            conversions.
          </li>
          <li>
            <strong>Cloud Solutions & Hosting</strong>: We provide secure,
            reliable cloud infrastructure to help businesses of all sizes
            operate efficiently and securely.
          </li>
          <li>
            <strong>Consulting & Strategy</strong>: Our experts guide you
            through complex challenges, providing strategic insights to support
            your business goals.
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-primary pb-4 pt-10">
          Our Core Values
        </h3>

        <ul className="list-disc list-inside mt-4 text-lg text-gray-900 leading-9">
          <li>
            <strong>Integrity</strong>: We operate with honesty and transparency
            in every aspect of our business.
          </li>
          <li>
            <strong>Innovation</strong>: We are passionate about pushing
            boundaries to create solutions that make a difference.
          </li>
          <li>
            <strong>Customer-Centric Approach</strong>: Our clients are our top
            priority. We listen, understand, and work to exceed their
            expectations.
          </li>
          <li>
            <strong>Continuous Improvement</strong>: We are committed to
            learning and adapting to ensure that we deliver the best possible
            outcomes.
          </li>
        </ul>

        <h3 className="text-md font-bold text-primary pb-4 pt-10">
          Visit Us Today
        </h3>
        <p className="text-lg text-gray-900 leading-9">
          We are excited about the opportunity to work with you and bring your
          ideas to life. Whether you're a startup looking to make your mark or
          an established business aiming to innovate, Digital Experts has the
          expertise and passion to help you succeed. Reach out to us today to
          start a conversation – let's create something amazing together.
        </p>
      </div>
    </div>
  );
}
