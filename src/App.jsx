import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import TopNav from "./Components/TopNav";
import Hero from "./Components/Hero";
import SideQuest from "./Components/SideQuest";
import { FcAbout } from "react-icons/fc";
import About from "./Components/About";
import { AnimatePresence, motion } from "framer-motion";
import Spotify from "./Components/Spotify";
import ProjectPage from "./Components/ProjectPage";
import MotionWrapper from "./Components/MotionWrapper";

const App = () => {
  const location = useLocation();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className=" font-space-grotesk   "
  >
      <TopNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<MotionWrapper><Hero /></MotionWrapper>} />
            <Route path="/sidequests" element={<MotionWrapper><SideQuest /></MotionWrapper>} />
            <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
            <Route path="/spotify" element={<Spotify/>}/>
            {/* <Route path="/projects" element={<ProjectPage/>}/> */}
          </Route>
        </Routes>
      </AnimatePresence>
      {/* <ProjectPage /> */}
    </motion.div>
  );
};

export default App;
