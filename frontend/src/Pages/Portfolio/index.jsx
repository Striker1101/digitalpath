import React, { useState, useContext } from "react";
import Welcome from "./Welcome";
import Service from "./Service";
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
      {/* <Service projects={projects} /> */}

      {/* Category Filter */}
      <div className="flex mt-3 justify-center mb-4 space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      {/* Filtered Projects */}
      <Projects projects={filteredProjects} />
    </div>
  );
}
