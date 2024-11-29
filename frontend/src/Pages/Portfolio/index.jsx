import React, { useState, useContext } from "react";
import Welcome from "./Welcome";
import Projects from "./Projects";
import { DataContext } from "../../store";

export default function Portfolio() {
  const { projects } = useContext(DataContext);

  // Extract unique categories from projects
  const categories = [
    "show all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("show all");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "show all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <Welcome />
      {/* Category Filter */}
      <div className="mt-3  text-center">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <button
              aria-label="select category"
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 bg-transparent border-none text-base cursor-pointer ${
                selectedCategory === category
                  ? "text-blue-500 font-bold"
                  : "text-gray-800"
              }`}
            >
              {category.replace(/_/g, " ")}
            </button>
            <span className="mx-1 text-gray-400">/</span>
          </React.Fragment>
        ))}
      </div>

      {/* Filtered Projects */}
      <Projects projects={filteredProjects} />
    </div>
  );
}
