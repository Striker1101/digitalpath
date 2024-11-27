import React from "react";
import service1 from "../../Assets/images/Services/1.jpg";
import service2 from "../../Assets/images/Services/2.jpg";
import service3 from "../../Assets/images/Services/3.jpg";
import service4 from "../../Assets/images/Services/4.jpg";
import service5 from "../../Assets/images/Services/5.jpg";
import endless_constellation from "../../Assets/images/endless-constellation.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const services = [
  { id: 1, image: service1, path: "maintenance_and_seo_improvement" },
  { id: 2, image: service2, path: "business_website_improvement" },
  { id: 3, image: service3, path: "cms_website_improvement" },
  { id: 4, image: service4, path: "e_commerce_website_improvement" },
  { id: 5, image: service5, path: "other_web_service" },
];

export default function Service({ projects }) {
  return (
    <div id="services" className="bg-white py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat animate-scroll"
        style={{
          backgroundImage: `url(${endless_constellation})`,
        }}
      ></div>
      <div className="relative w-full h-auto px-4 py-2 mx-auto z-10">
        <h2 className="text-5xl text-[#412001] font-Poppins text-center my-8">
          Our Services
        </h2>
        <div className="flex flex-row flex-wrap items-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="mx-auto w-[400px] h-[260px] my-8 bg-[#ffffff] border border-slate-200 rounded-md shadow-lg hover:shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <LazyLoadImage
                src={service.image}
                alt=""
                className="w-full h-[200px] object-cover rounded-t"
              />
              <Link
                to={process.env.REACT_APP_WHATSAPP_NUMBER} // Pass the service.path as a query parameter
                className="my-auto mr-auto ml-3 p-2 text-sm text-blue-100 font-Poppins bg-black hover:bg-[#412001] rounded cursor-pointer"
              >
                <h4>Request Service</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
