import React from "react";
import { Table } from "./Table";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-[600px] min-w-[400px] border border-gray-100 shadow-lg">
        <Table projects={projects} />
      </div>
    </div>
  );
};
export default Projects;
