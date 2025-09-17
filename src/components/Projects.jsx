"use client";
 
import React, { useEffect, useState } from "react";
import CardProject from "./UI/CardProject";
import { CgWebsite } from "react-icons/cg";


const Projects = ({ limit }) => {
  const [data, setData] = useState([]);

  const displayed = limit ? data.slice(0, limit) : data;

  useEffect(() => {
    fetch("/Data/Project.json")
      .then((res) => res.json())
      .then((projects) => {
        setData(projects);
      })
      .catch((err) =>
        console.error("Failed to fetch Project.json:", err)
      );
  }, []);

  if (!data.length)
    return <p className="text-gray-400">Loading projects...</p>;

  return (
    <section className="flex flex-col justify-center items-start gap-6 w-full">
      <h3 className="flex justify-start items-center gap-2 text-2xl text-gray-400 font-bold">
        <span><CgWebsite /></span>
        Projects
      </h3>
      <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-6 w-full'>

      {displayed.map((item, index) => (
        <CardProject
          key={index}
          title={item.title}
          projectImage={item.projectImage}
          description={item.description}
          tags={item.tags}
          github={item.github}
          demo={item.demo}
        />
      ))}
      </div>

      
    </section>
  );
};

export default Projects;
