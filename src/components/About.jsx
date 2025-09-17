import React from "react";
import { Line, Link } from "./index";
import { IoCodeSlash } from "react-icons/io5";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
} from "react-icons/si";
import Expertice from "./Expertice";
import AboutMe from "./UI/AboutMe";

import { AuroraTextEffect } from "./UI/AuroraTextEffect";
import Cerificates from "./Cerificates";
import Button from "./UI/Button";
import Projects from "./Projects";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-end gap-6 p-5 w-full">
      <div className="flex flex-col justify-start items-start gap-2">
        <div>
          {/* <h2 className='text-4xl text-gray-400 font-bold'>Hi,I'm Sherif Emad</h2> */}
          <AuroraTextEffect />
          <h3 className="text-gray-400 text-xl">Front-End Developer</h3>
        </div>

        <AboutMe />
        {/* <p>I am a front-end developer with one year of experience creating responsive, high-performance, and SEO-optimized websites. Skilled in HTML, CSS, SASS, Tailwind CSS, Bootstrap, JavaScript, and React.js, I deliver clean, efficient code and modern UI/UX designs. My portfolio includes diverse projects such as SEF Academy, e-commerce websites, Gazini website, and Luma Dental Clinic, reflecting my ability to build scalable and user-friendly digital solutions.</p> */}

        {/* <p>Driven by a passion for teaching and growth, I aspire to become a professional instructor while advancing in front-end development and web technologies. I am dedicated to helping businesses grow online through fast, accessible, and visually appealing websites that enhance user experience. Let’s connect and create something impactful together.</p> */}
      </div>

      <Line />

      {/* skills */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <h4 className="flex justify-start items-center gap-2 text-2xl text-gray-400 font-bold">
          <IoCodeSlash />
          Skills
        </h4>

        <div className="flex justify-start items-center gap-11 flex-wrap w-full p-6">
          <SiHtml5 className="text-6xl text-[#f97316] " card-title="HTML" />
          <SiCss3 className="text-6xl text-[#264de4]" card-title="CSS" />
          <SiSass className="text-6xl text-[#ef4444]" card-title="Sass" />
          <FaBootstrap
            className="text-6xl text-[#a855f7]"
            card-title="Bootstrap"
          />
          <SiTailwindcss
            className="text-6xl text-[#38bdf8]"
            card-title="Tailwind CSS"
          />
          <SiJavascript
            className="text-6xl text-[#f0db4f]"
            card-title="Javascript"
          />
          <FaReact className="text-6xl text-[#61dbfb]" card-title="React" />
          <TbBrandVite className="text-6xl text-[#4ade80]" card-title="Vite" />
        </div>
      </div>

      <Line />

      <Expertice />
      <Line />

      <Cerificates limit={8} />

      <Button />

      <Line />


      <Projects limit={3} />
      {/* more project */}
      <div className='w-full'>
      <Link href='/projects' className='flex justify-center items-center '>
        <button className='text-gray-400 font-bold border-2 border-gary-500 px-4 py-2 rounded-2xl cursor-pointer'>More Projects</button>
      </Link>
      </div>
    </section>
  );
};

export default About;
