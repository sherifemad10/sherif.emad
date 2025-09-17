"use client";
import React, { useState } from "react";

const Card = ({
  position,
  company,
  year,
  companyLogo,
  location,
  type,
  details,
  Skill,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className="flex flex-col justify-start items-start gap-2 w-full p-4 sm:p-6 border-2 border-gray-600 rounded-lg hover:scale-[1.02] transition ease-in-out cursor-pointer"
      onClick={handleFlip}
      role="button"
      aria-pressed={isFlipped}
    >
      <div className="flex justify-start items-start gap-3 sm:gap-4 w-full">
        <div>
          {/* image */}
          <img
            src={companyLogo}
            alt={company}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border-2 border-white object-cover"
            loading="lazy"
            draggable="false"
          />
        </div>

        {/* title */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-2 w-full">
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-xl sm:text-2xl text-gray-400 font-bold">{position}</h4>
            <h5 className="text-gray-400 text-sm sm:text-base">
              {company}  {type}{" "}
            </h5>
            <p className="text-gray-400 text-xs sm:text-sm">{location}</p>

            {/* des */}

            {isFlipped && (
              <>
                <div className="mt-2 w-full">
                  <ul className="list-disc list-inside text-gray-400 text-xs sm:text-sm">
                    {details?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {Skill?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* date */}
          <div className="flex justify-start md:justify-end items-center gap-2 mt-2 md:mt-0 self-stretch">
            <p className="text-gray-300 text-sm">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
