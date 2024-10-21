import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "./Variants";
import ProjectPage from "./ProjectPage";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Transforming designs into reality."; // Full sentence to type out
  const Herovariant = {
    hidden:{
      opacity:1,
    },
    visible:{
      opacity:1,
      transition:{delay:0.8, duration:0.8}
    },
    exit:{
    
      opacity:0,
      transition:{ease:'easeInOut'}
    }
  }
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
    <motion.div

    variants={Herovariant}
    initial='hidden'
    animate='visible'
    exit='exit'
     className="max-w-[1680px] mx-auto overflow-hidden flex flex-col gap-3 py-6 px-[80px]">
      <div className="flex flex-col gap-2">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=" "
          >
           <TypeAnimation
 sequence={[
  "Transforming designs into reality.", 1000,
  "One step at a time.", 1000,
  "Turning ideas into code, one line at a time.", 1000,
  "Bringing visions to life, one pixel at a time.", 1000,
]}
  speed={1} // Slow down typing speed
  wrapper="span"
  repeat={Infinity}
  className="text-black text-[50px] tracking-tight leading-[100px]"
/>

          </motion.h1>
        </div>
        <div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=" w-[1085px] text-[16px]"
          >
            Fullstack engineer building ML Architecture models, frontend &
            Backend infrastructures + Web Apps. I specialize in creating digital
            experiences that not only look great but also work seamlessly.
            Whether you're launching a new app or giving your current software a
            facelift, I bring a knack for transforming ideas into user-friendly
            designs. Let's collaborate to make your software not just
            functional, but visually appealing and enjoyable for your users.
            Ready to elevate your digital presence? Let's chat and turn your
            vision into a standout design!
          </motion.p>
        </div>
      </div>
      <ProjectPage />
    </motion.div>
  );
};

export default Hero;
