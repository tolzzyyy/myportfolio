import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
const About = () => {
  
  const Sidevariants = {
    hidden:{
      opacity:0,
      transition:{delay:0.5, duration:0.5}
    },
    visible:{
      opacity:1,
      transition:{delay:0.8, duration:0.8}
    },
    exit:{
    
      opacity:0,
      transition:{ease:'easeInOut', delay:0, duration:0}
    }
  }
  return (
    <motion.div variants={Sidevariants} initial='hidden'
    animate='visible'
    className='py-6 px-[80px]'
    exit='exit'
    >
      <motion.h1  variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }}>
About
      </motion.h1>
      
    </motion.div>
  )
}


export default About
