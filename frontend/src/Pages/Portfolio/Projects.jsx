import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Projects({ projects }) {
  return (
    <div className="w-full h-auto py-10">
      <div className="w-full h-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative mx-auto w-10/12 md:w-[300px] h-[300px] bg-gray-100 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <LazyLoadImage
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-60">
              <h4 className="text-lg text-white font-semibold mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-white px-4 text-center">
                {project.description}
              </p>
            </div>

            {/* Action Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 w-10 h-10 bg-red-500 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:scale-125"
              title="Visit Site"
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("animate-shake")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("animate-shake")
              }
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>

      {/* Keyframe for Icon Animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 3;
        }
      `}</style>
    </div>
  );
}
