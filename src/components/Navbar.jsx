import Image from 'next/image'
import React from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { Footer } from '.';

const Navbar = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-4 sm:gap-6 p-3 sm:p-5 w-full bg-[#25284122] backdrop-blur-2xl border-2 border-[#c8b39e46] rounded-xl shadow-2xl m-2 sm:m-4 lg:m-6'>

      {/* Profile Image */}
      <figure className="w-full max-w-[300px]">
        <Image
          src={'/sherifemad.png'}
          alt="Sherif Emad"
          width={300}
          height={300}
          className='w-full h-auto rounded-xl border-2 border-[#E7D1BB] object-cover'
          loading='lazy'
          draggable='false'
        />
      </figure>

      {/* Status */}
      <div className="flex items-center gap-2 border-1 border-[#c8b39e46] p-2 sm:p-3 rounded-xl">
        <span className="text-green-500 animate-pulse">
          <RiRadioButtonLine size={16} className="sm:w-[18px] sm:h-[18px]" />
        </span>
        <p className="text-white text-sm sm:text-md font-bold">Available for work</p>
      </div>

      {/* Name */}
      <div className='flex justify-center items-center gap-2'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>Sherif Emad</h1>
        <span className='text-lg sm:text-xl text-[#47b1ea]'>
          <MdOutlineVerified />
        </span>
      </div>

      <Footer />
    </section>
  )
}

export default Navbar
