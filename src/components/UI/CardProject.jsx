import React from 'react'
// import Image from 'next/image';


const CardProject = ({title, projectImage, description, tags, github, demo}) => {
  return (
    // <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-6 w-full'>
      

      <div className="flex flex-col justify-center items-start gap-4 border-2 border-[#c8b39e46] p-4 rounded-xl shadow-2xl cursor-pointer">
        <figure className="relative w-full  rounded-xl border-2 border-[#E7D1BB] overflow-hidden">
          <img
            src={projectImage}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition duration-300 ease-in-out"
            loading="lazy"
            draggable="false"
            
          />
        </figure>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-gray-400 w-full">
            {description}
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 text-sm text-gray-400">
            {
              tags.map((tag, index) => (
                <span key={index} className="bg-[#3D3F5B3D] p-1 rounded-md">
                  {tag}
                </span>
              ))
            }
            {/* <span className="bg-[#3D3F5B3D] p-1 rounded-md">Next.js</span> */}
          </div>
        </div>

        {/* btn */}
        <div className='flex  justify-center items-center gap-5 '>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="text-sm font-bold text-white  p-2 rounded-lg border-2 border-gray-600 hover:bg-gray-700 transition my-5 cursor-pointer">
              Live Demo
            </button>
          </a>
          {
            github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="text-sm font-bold text-white  p-2 rounded-lg border-2 border-gray-600 hover:bg-gray-700 transition my-5 cursor-pointer">
                Source Code
              </button>
            </a>
            
            )
          }
          


        </div>

      </div>
      //  </div>
  )
}

export default CardProject
