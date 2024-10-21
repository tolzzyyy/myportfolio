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

const App = () => {
  const location = useLocation();
  return (
    <motion.div className="font-space-grotesk">
      <TopNav />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/sidequests" element={<SideQuest />} />
            <Route path="/about" element={<About />} />
            <Route path="/spotify" element={<Spotify/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
};

export default App;
