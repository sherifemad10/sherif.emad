// import Image from 'next/image'
// import React from 'react'

// import {Logo, Link, Footer, Line} from './index'
// import { IoHomeOutline } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";
// import { CgWebsite } from "react-icons/cg";
// import { PiCertificate } from "react-icons/pi";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
// import { MdOutlineVerified } from "react-icons/md";



// const Navbar = () => {
//   return (
//     <header className='flex flex-col justify-center items-center gap-4 p-5 w-[20%] min-h-screen'>

//       <div className='flex flex-col justify-center items-center gap-2'>
//         <Image src={Logo} alt="Logo" className='w-40 h-40 rounded-full border-2 border-white' loading='lazy' draggable='false'/>
//         <div className='flex justify-center items-center gap-2'>
//         <h1 className='text-3xl font-bold text-white'>Sherif Emad</h1>
//         <span className='text-xl text-[#47b1ea]'><MdOutlineVerified/></span>
//         </div>
//       </div>

//       {/* links */}
//       <Line/>
//       <nav className='flex flex-col justify-center items-start gap-4 text-lg w-full p-2'>
//         <Link href="/" className='flex justify-start items-center gap-2 hover:bg-[#3D3F5B3D] transition ease-in-out w-full p-3 rounded-md'><span><IoHomeOutline/></span>Home</Link>
//         <Link href="#projects" className='flex justify-start items-center gap-2 hover:bg-[#3D3F5B3D] transition ease-in-out w-full p-3 rounded-md'><span><CgWebsite /></span>Projects</Link>
//         <Link href="cerificates" className='flex justify-start items-center gap-2 hover:bg-[#3D3F5B3D] transition ease-in-out w-full p-3 rounded-md'><span><PiCertificate /></span>Certificates</Link>
//         <Link href="#contact" className='flex justify-start items-center gap-2 hover:bg-[#3D3F5B3D] transition ease-in-out w-full p-3 rounded-md'><span><MdOutlineConnectWithoutContact/></span>Contact</Link>
//       </nav>
//       <Line/>
    
//       <Footer/>
//     </header>
//   )
// }

// export default Navbar
import Image from 'next/image'
import React from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { Footer } from '.';

const Navbar = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-6 p-5 w-full  bg-[#25284122] backdrop-blur-2xl border-2 border-[#c8b39e46] rounded-xl shadow-2xl m-6'>

      {/* Profile Image */}
      <figure>
        <Image
          src={'/sherifemad.png'}
          alt="Sherif Emad"
           width={300}
  height={300}
          className=' rounded-xl border-2 border-[#E7D1BB] object-cover'
          loading='lazy'
          draggable='false'
        />
      </figure>

      {/* Status */}
      <div className="flex items-center gap-2 border-1 border-[#c8b39e46] p-3 rounded-xl">
        <span className="text-green-500 animate-pulse">
          <RiRadioButtonLine size={18} />
        </span>
        <p className="text-white text-md font-bold">Available for work</p>
      </div>

      {/* Name */}
      <div className='flex justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold text-white'>Sherif Emad</h1>
        <span className='text-xl text-[#47b1ea]'>
          <MdOutlineVerified />
        </span>
      </div>

      {/* Footer */}
      {/* <div className="mt-auto w-full"> */}
        <Footer />
        
        
      {/* </div> */}
    </section>
  )
}

export default Navbar
