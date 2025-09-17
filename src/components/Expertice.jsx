"use client";

import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import { IoCodeSlash } from "react-icons/io5";

const Expertice = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data/Experience.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch Experience.json:", err));
  }, []);

  if (!data.length) return <p className="text-gray-400">Loading experience...</p>;
  return (
    <div className="flex flex-col justify-center items-start gap-2 w-full">
      <h4 className="flex justify-start items-center gap-2 text-2xl text-gray-400 font-bold">
        <IoCodeSlash />
        Experience
      </h4>
      {data.map((item, index) => (
        <Card
          key={index}
          year={item.year}
          position={item.position}
          company={item.company}
          companyLogo={item.companyLogo}
          location={item.location}
          type={item.type}
          details={item.details}
          Skill={item.Skills}
        />
      ))}

      {/* <Card/> */}
    </div>
  );
};

export default Expertice;
