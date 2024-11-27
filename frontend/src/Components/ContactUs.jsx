import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
export default function ContactUs({ purposes }) {
  const location = useLocation();

  // Get the 'purpose' query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const purposeFromQuery = queryParams.get("purpose");

  const [formData, setFormData] = useState({
    purpose: purposeFromQuery || "",
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle change for form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/contact_us`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      let prevIsFilledContactForm = JSON.parse(
        localStorage.getItem("isFilledContactForm")
      );
      localStorage.setItem("isFilledContactForm", JSON.stringify(true));
      toast.success(
        "Thank you! Your message has been successfully submitted. We will get back to you shortly."
      );
      setFormData({
        purpose: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });
      if (!prevIsFilledContactForm) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(
        "Oops! Something went wrong while sending your message. Please try again later."
      );
    }
  };

  return (
    <div>
      <Header
        title="Get in Touch"
        lineColor="navy"
        description="We’re here to help! Reach out to discuss your project or ask any questions you may have."
      />

      <div
        id="contact"
        className="w-full md:w-[500px] mx-auto px-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <Link
          to={process.env.REACT_APP_WHATSAPP_NUMBER}
          className="bg-green-500 text-white py-2 px-4 rounded-full mb-4 flex items-center justify-center mx-auto"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
          Contact Us on WhatsApp
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700"
              required
            >
              <option value="">Select...</option>
              {purposes.map((purpose, i) => {
                return (
                  <option key={i} value={purpose}>
                    {purpose}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3 text-gray-700"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              id="terms"
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-700">
              I read and accept the{" "}
              <Link
                to="/terms"
                className="underline text-blue-500 hover:text-blue-700"
              >
                Terms & Conditions
              </Link>{" "}
              and
              <Link
                to="/privacy-policy"
                className="underline text-blue-500 hover:text-blue-700"
              >
                {" "}
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 my-4 px-4 bg-green-500 text-white rounded hover:bg-green-700"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
