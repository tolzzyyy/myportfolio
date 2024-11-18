import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import rectangle from '../Assets/Rectangle 9.png'
import rectangle1 from '../Assets/ArtRoost (1).png'
import jobestate from '../Assets/JOBESTATE.png'
import { BsArrow90DegRight, BsArrowUpRight } from 'react-icons/bs';

const ProjectPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1008);
    };
    
    checkMobile();
    setIsLoaded(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageVariants = {
    initial: {
      scale: 1,
      transition: { duration: 0 }
    },
    hidden: {
      scale: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    visible: {
      scale: [0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="container flex mt-[70px] flex-col  md:gap-7 gap-10 mx-auto">
      {/* Project 1 */}
      <div
        className="flex flex-col lg:flex-row group justify-between cursor-pointer items-center gap-[20px] lg:gap-[50px]"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {isMobile ? (
          <div className="w-full">
            <img 
              src={jobestate}
              alt="Project" 
              className="w-full lg:w-[550px] h-auto object-cover"
            />
          </div>
        ) : (
          <motion.div
            className="w-full overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate={isLoaded ? (isHovered ? "visible" : "hidden") : "initial"}
          >
            <img 
              src={jobestate}
              alt="Project" 
              className="w-full lg:w-[550px] h-auto object-cover"
            />
          </motion.div>
        )}
        <div className='w-full group-hover:text-black transition-all duration-500 flex text-[#808080] flex-col gap-1'>
          <div className="text-[20px] md:text-[45px] border-b-[1px] lg:border-b-[2px] group-hover:border-black border-[#808080] py-2 md:py-4 flex items-center justify-between w-full font-medium">
            <h1>JobeState</h1> <BsArrowUpRight className='hidden lg:flex'/> <p className='flex lg:hidden'>2024</p>
          </div>
          <p className="text-sm md:text-base">Front-end web development</p>
        </div>
      </div>

      {/* Project 2 */}
      <div
        className="flex flex-col lg:flex-row group justify-between cursor-pointer items-center gap-[20px] lg:gap-[50px]"
        onMouseEnter={() => !isMobile && setIsHovered2(true)}
        onMouseLeave={() => !isMobile && setIsHovered2(false)}
      >
        {isMobile ? (
          <div className="w-full">
            <img 
              src={rectangle1}
              alt="Project" 
              className="w-full lg:w-[550px]  object-cover"
            />
          </div>
        ) : (
          <motion.div
            className="w-full overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate={isLoaded ? (isHovered2 ? "visible" : "hidden") : "initial"}
          >
            <img 
              src={rectangle1}
              alt="Project" 
              className="w-full lg:w-[550px] h-auto object-cover"
            />
          </motion.div>
        )}
        <div className='w-full group-hover:text-black transition-all duration-500 flex text-[#808080] flex-col gap-1'>
          <div className="text-[20px] md:text-[45px] border-b-[1px] lg:border-b-[2px] group-hover:border-black border-[#808080] py-2 md:py-4 flex items-center justify-between w-full font-medium">
            <h1>ArtRoost</h1> <BsArrowUpRight className='hidden lg:flex'/> <p className='flex lg:hidden'>2024</p>
          </div>
          <p className="text-sm md:text-base">Front-end web development</p>
        </div>
      </div>

      {/* Project 3 */}
      <div
        className="flex flex-col lg:flex-row group justify-between cursor-pointer items-center gap-[20px] lg:gap-[50px]"
        onMouseEnter={() => !isMobile && setIsHovered3(true)}
        onMouseLeave={() => !isMobile && setIsHovered3(false)}
      >
        {isMobile ? (
          <div className="w-full">
            <img 
              src={rectangle}
              alt="Project" 
              className="w-full lg:w-[500px] h-auto object-cover"
            />
          </div>
        ) : (
          <motion.div
            className="w-full overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate={isLoaded ? (isHovered3 ? "visible" : "hidden") : "initial"}
          >
            <img 
              src={rectangle}
              alt="Project" 
              className="w-full lg:w-[500px] h-auto object-cover"
            />
          </motion.div>
        )}
        <div className='w-full group-hover:text-black transition-all duration-500 flex text-[#808080] flex-col gap-1'>
          <div className="text-[20px] md:text-[45px] border-b-[1px] lg:border-b-[2px] group-hover:border-black border-[#808080] py-2 md:py-4 flex items-center justify-between w-full font-medium">
            <h1>Kept Journal</h1> <BsArrowUpRight className='hidden lg:flex'/> <p className='flex lg:hidden'>2024</p>
          </div>
          <p className="text-sm md:text-base">Front-end web development</p>
        </div>
      </div>

      {/* Project 4 */}
      <div
        className="flex flex-col lg:flex-row group justify-between cursor-pointer items-center gap-[20px] lg:gap-[50px]"
        onMouseEnter={() => !isMobile && setIsHovered4(true)}
        onMouseLeave={() => !isMobile && setIsHovered4(false)}
      >
        {isMobile ? (
          <div className="w-full">
            <img 
              src={rectangle}
              alt="Project" 
              className="w-full lg:w-[500px] h-auto object-cover"
            />
          </div>
        ) : (
          <motion.div
            className="w-full overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate={isLoaded ? (isHovered4 ? "visible" : "hidden") : "initial"}
          >
            <img 
              src={rectangle}
              alt="Project" 
              className="w-full lg:w-[500px] h-auto object-cover"
            />
          </motion.div>
        )}
        <div className='w-full group-hover:text-black transition-all duration-500 flex text-[#808080] flex-col gap-1'>
          <div className="text-[20px] md:text-[45px] border-b-[1px] lg:border-b-[2px] group-hover:border-black border-[#808080] py-2 md:py-4 flex items-center justify-between w-full font-medium">
            <h1>Kept Journal</h1> <BsArrowUpRight className='hidden lg:flex'/> <p className='flex lg:hidden'>2024</p>
          </div>
          <p className="text-sm md:text-base">Front-end web development</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;