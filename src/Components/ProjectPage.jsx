import React from "react";
import { motion } from "framer-motion";
import brimble from "../Assets/Rectangle 10.png";
import ebuka from "../Assets/Rectangle 8.png"; 
import ebuka1 from "../Assets/Rectangle 9.png"; 
import { fadeIn } from "./Variants"
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="py-[0px]">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col py-[100px] w-full"
      >
        <h1>Missions</h1>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[70px] mt-[30px] md:mt-[80px]">
          {/* Card 1 */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            <Link to="/bimble" className="relative block w-full">
              <div className="relative">
                <img src={ebuka1} className="w-full h-auto block" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-[30px] backdrop-blur-[10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                  <h2 className="md:text-[50px] text-[20px] text-black font-bold">
                    Ebuka.design
                  </h2>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                  Brimble Public Beta
                </h1>
                <p className="text-[#737373] text-[9px] lg:text-[12px]">
                  Identity and motion design
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            <div className="relative cursor-pointer block w-full">
              <img src={ebuka} alt="Portfolio Preview" className="w-full h-auto block" />
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-[30px] backdrop-blur-[5px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <h2 className="md:text-[50px] text-[20px] text-black font-bold">
                  Coming Soon
                </h2>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Adetola - Portfolio
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">
                UX and Product Design
              </p>
            </div>
          </motion.div>

          {/* Duplicate of Card 1 */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            <Link to="/bimble" className="relative block w-full">
              <div className="relative">
                <img src={ebuka1} className="w-full h-auto block" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-[30px] backdrop-blur-[10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                  <h2 className="md:text-[50px] text-[20px] text-black font-bold">
                    Ebuka.design
                  </h2>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                  Brimble Public Beta
                </h1>
                <p className="text-[#737373] text-[9px] lg:text-[12px]">
                  Identity and motion design
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Duplicate of Card 2 */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            <div className="relative cursor-pointer block w-full">
              <img src={ebuka} alt="Portfolio Preview" className="w-full h-auto block" />
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-[30px] backdrop-blur-[5px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <h2 className="md:text-[50px] text-[20px] text-black font-bold">
                  Coming Soon
                </h2>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Adetola - Portfolio
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">
                UX and Product Design
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
