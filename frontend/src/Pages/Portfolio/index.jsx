import React, { useContext } from "react";
import Welcome from "./Welcome";
import Service from "./Service";
import Projects from "./Projects";
import { DataContext } from "../../store";

export default function Portfolio() {
  const { projects } = useContext(DataContext);
  return (
    <div>
      <Welcome />
      <Service projects={projects} />
      <Projects projects={projects} />
    </div>
  );
}
