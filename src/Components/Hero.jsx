import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "./Variants";
import ProjectPage from "./ProjectPage";
import { div } from "framer-motion/client";
import Footer from "./Footer";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Transforming designs into reality."; // Full sentence to type out
  
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(typing); // Stop typing when the full text is reached
      }
    }, 100); // Adjust the typing speed (in milliseconds)

    return () => clearInterval(typing); // Cleanup the interval when the component unmounts
  }, []);
  return (
    <div className="h-full">
      <div
     
        className="max-w-[1680px] mx-auto   flex flex-col gap-3 py-6 px-8 md:px-[80px]"
      >
        <div className="flex  md:h-[300px] justify-center flex-col gap-3 md:gap-9">
          <div>
            <h1
             
              className="text-black text-[30px] leading-tight md:text-[59px] tracking-tight md:leading-[55px] "
            >
              Transforming designs <br /> into reality
              {/* <TypeAnimation
 sequence={[
  "Transforming designs into reality.", 1000,
  "One step at a time.", 1000,
  "Turning ideas into code, one line at a time.", 1000,
  "Bringing visions to life, one pixel at a time.", 1000,
]}
  speed={1} // Slow down typing speed
  wrapper="span"
  repeat={Infinity}
  className="text-black text-[30px] md:text-[50px] tracking-tight md:leading-[100px]"
/> */}
            </h1>
          </div>
          <div>
            <p
             
              className=" w-full sm:w-full md:max-w-full lg:w-[1085px] text-[16px]"
            >
              Fullstack engineer building ML Architecture models, frontend &
              Backend infrastructures + Web Apps. I specialize in creating
              digital experiences that not only look great but also work
              seamlessly.
            </p>
          </div>
        </div>
        <ProjectPage />
        <Footer/>
      </div>
    </div>
  );
};

export default Hero;
