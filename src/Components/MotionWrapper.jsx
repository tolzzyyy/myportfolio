import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
//   useEffect(() => {
//     // Scroll to the top-left of the page when the component first mounts or on page reload
//     window.scrollTo(0, 0);
//   }, []); // Empty dependency array ensures this only runs once when the component mounts

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100vw', // Start from the bottom of the viewport
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '-100vw', // Move out to the top of the viewport
    },
  };

  const pageTransition = {
    // type: 'tween',
    ease: 'anticipate',
    duration: 1,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full" // Ensure it takes full width and height
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
