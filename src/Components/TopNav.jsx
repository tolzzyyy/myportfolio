import React from "react";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa6";
import memoji from "../Assets/Memoji.png";
import { motion } from "framer-motion";

const TopNav = () => {
  return (
    <div className="max-w-[1680px] mx-auto h-full py-4 px-10">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex justify-between items-center  "
      >
        <div className="flex items-center gap-3">
          <img src={memoji} alt="" />
          <div>
            <h1 className="text-[14px]">Adetola Egberongbe</h1>
            <p className="text-[14px] font-thin">Frontend Engineer</p>
          </div>
        </div>
        <div>
          <ul className="text-[14px] font-medium flex gap-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link text-black"
                  : "hover:text-black text-[#929191] nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/sidequests"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link text-black"
                  : "hover:text-black text-[#929191] nav-link"
              }
            >
              Side Quest
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link text-black"
                  : "hover:text-black text-[#929191] nav-link"
              }
            >
              About
            </NavLink>
            <li className="flex items-center text-[#929191] gap-[2px]">
              {" "}
              <FaSpotify className="text-green-400" size={20} /> Spotify?
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default TopNav;
