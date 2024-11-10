import React from "react";

export default function Projects({ projects }) {
  return (
    <div className="w-full h-auto py-10">
      <h2 className="text-4xl md:text-5xl text-[#412001] font-Poppins text-center my-8">
        Previous Projects
      </h2>
      <div className="w-full h-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto w-10/12 md:w-[500px] h-[420px] bg-[#ffffff] border border-slate-200 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[260px] object-cover rounded-t"
            />
            <div className="px-4 w-full md:h-[170px]">
              <h4 className="text-lg text-[#412001] font-Raleway font-semibold my-2">
                {project.name}
              </h4>
              <p className="line-clamp-2 text-lg text-slate-700">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 mr-auto ml-3 p-2 px-3 text-sm text-blue-100 font-Poppins bg-black hover:bg-[#412001] rounded cursor-pointer"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
