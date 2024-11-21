import React from "react"; 
import { motion } from "framer-motion"; 
import { fadeIn } from "./Variants"; 
import omo from "../Assets/JOBESTATE.png"; 

const About = () => {
  const Sidevariants = {
    hidden: {
      opacity: 0,
      transition: { delay: 0.9, duration: 0.9 },
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 1.2 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut", delay: 0.5, duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={Sidevariants}
      initial="hidden"
      animate="visible"
      className="py-6 flex w-full items-center flex-col px-5 md:px-[70px]"
      exit="exit"
    >
      <div className="flex items-center justify-end">
        <motion.h1
          variants={fadeIn("up", 0.5)}
          className="w-full text-[20px] md:tracking-[0px] md:text-[37px] font-[400] "
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          Hey there, i'm Adetola, 👋🏽  a frontend engineer who really loves 
          building cool responsive website designs, frontend/backend infrastructures with    {"/and "}
           <span className="">Web Apps. </span>
        </motion.h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-end">
        <div className="w-full mt-[60px] h-full flex flex-col-reverse lg:flex-row gap-10 justify-between">
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
                My resume
              </button>
            </div>
          </div>

          <div>
            <img src={omo} className="h-full object-cover w-full lg:w-[500px]" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;