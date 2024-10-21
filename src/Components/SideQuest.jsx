import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "./Variants"
const SideQuest = () => {

  const Sidevariants = {
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
  return (
    <motion.div variants={Sidevariants} initial='hidden'
    animate='visible'
    className='py-6 px-[80px]'
    exit='exit'
    >
      <motion.h1  variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}>
sidequest
      </motion.h1>
      
    </motion.div>
  )
}

export default SideQuest
