import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import omo from "../Assets/JOBESTATE.png";
import Footer from "./Footer";

const About = () => {
  
  return (
    <div
    
      className="py-6  flex w-full max-w-[1680px] mx-auto  items-center flex-col px-8 md:px-[80px]"
    
    >
      <div className="flex  xl:h-[220px] items-center justify-end">
        <h1
     
          className="w-full text-[20px] md:tracking-[0px] md:text-[37px] font-[400] "
        >
          Hey there, i'm Adetola, 👋🏽 a frontend engineer who really loves
          building cool responsive website designs, frontend/backend
          infrastructures with {"/and "}
          <span className="">Web Apps. </span>
        </h1>
      </div>

      <div className="flex mb-[40px] flex-col-reverse md:flex-row w-full h-full justify-end">
        <div className="w-full mt-[70px] h-full flex flex-col-reverse lg:flex-row gap-10 justify-between">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h1 className="text-[21px] font-[400]">tools i work with</h1>
              <ul className="text-[17px] mt-5 font-[300] flex flex-col gap-3">
                <li>React</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>NextJs</li>
                <li>SwiperJs</li>
                <li>FramerMotion</li>
              </ul>
            </div>
            <div className="mt-5">
              <button className=" w-full md:w-[140px] h-[50px] border-2 border-black">
                My resume
              </button>
            </div>
          </div>

          <div className="  lg:relative flex flex-col justify-between">
            <div>
              <h1 className="text-[21px] font-[400]">Places i've been</h1>
              <ul className="text-[17px] mt-5 font-thin flex flex-col gap-3">
                <li>EhizuaHub - 2023</li>
                <li>Genify - 2024</li>
                <li>Fundamental schools - 2023</li>
                <li>LivingSpring schools - 2024</li>
              </ul>
            </div>
            <div className="mt-5">
              <button className=" w-full lg:absolute md:bottom-0 md:w-[140px] h-[50px] border-2 border-black">
               Get in Touch
              </button>
            </div>
          </div>

          <div>
            <img
              src={omo}
              className="h-full object-cover w-full lg:w-[500px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
