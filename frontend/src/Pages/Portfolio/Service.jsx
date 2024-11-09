import React from "react";
import service1 from "../../Assets/images/Services/1.jpg";
import service2 from "../../Assets/images/Services/2.jpg";
import service3 from "../../Assets/images/Services/3.jpg";
import service4 from "../../Assets/images/Services/4.jpg";
import service5 from "../../Assets/images/Services/5.jpg";
import endless_constellation from "../../Assets/images/endless-constellation.svg";
const services = [
  { id: 1, title: "Request Service", image: service1 },
  { id: 2, title: "Request Service", image: service2 },
  { id: 3, title: "Request Service", image: service3 },
  { id: 4, title: "Request Service", image: service4 },
  { id: 5, title: "Request Service", image: service5 },
];

export default function Service() {
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
              <img
                src={service.image}
                alt=""
                className="w-full h-[200px] object-cover rounded-t"
              />
              <h4 className="my-auto mr-auto ml-3 p-2 text-sm text-blue-100 font-Poppins bg-black hover:bg-[#412001] rounded cursor-pointer">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
