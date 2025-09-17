"use client";

import React, { useEffect, useState } from "react";
import { PiCertificate } from "react-icons/pi";
import Card from "./UI/Card";



const Cerificates = ({limit }) => {
  const [data, setData] = useState([]);
  const displayed = limit ? data.slice(4, limit) : data;

  useEffect(() => {
    fetch("/Data/Certificates.json") // ✅ fixed path
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch Certificates.json:", err));
  }, []);

  if (!data.length) return <p className="text-gray-400">Loading certificates...</p>;
  return (
      <section className="flex flex-col justify-center items-start gap-2 w-full">
          <h4 className="flex justify-start items-center gap-2 text-2xl text-gray-400 font-bold">
            <PiCertificate />
            Cerificates
          </h4>
          {displayed.map((item, index) => (
            <Card
              key={index}
              year={item.year}
              position={item.position}
              company={item.company}
              companyLogo={item.companyLogo}
              Skill={item.Skills}
            />
          ))}
    
          {/* <Card/> */}
        </section>
  )
}

export default Cerificates
