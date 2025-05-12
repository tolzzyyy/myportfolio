import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Spotify from './Spotify';

const TopNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      if (open) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%'; // Prevent horizontal scroll
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [open]);

  return (
    <div className="w-full max-w-[1640px]  mx-auto py-6 px-8 md:px-[80px]">
      <nav className="flex justify-between items-center">
        <div className="flex items-center  mt-4 md:mt-0  gap-2 md:gap-3 justify-center">
          <NavLink to="/" className='' end>
            <img className=" md:w-full" src={memoji} alt="Memoji" />
          </NavLink>
          <p className="md:text-[12px] text-[12px]">Adetola</p>
        </div>
        <ul className="hidden lg:flex gap-[70px] font-[400] text-[14px] text-[#818080] items-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-black nav-link active-link'
                : 'hover:text-black transition-all duration-500 nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/sidequests"
            className={({ isActive }) =>
              isActive
                  ? 'text-black nav-link active-link'
                : 'hover:text-black transition-all duration-500 nav-link'
            }
          >
            SideQuest
          </NavLink>
          <Spotify />
        </ul>
        <div onClick={() => setOpen(!open)} className="flex lg:hidden mt-4 cursor-pointer">
          {open ? (
            <FaTimes className="z-50  right-[30px] top-[45px] text-black" size={24} />
          ) : (
            <FaBars size={24} className=' right-[30px] md:right-[80px]  top-[45px]' />
          )}
        </div>
      </nav>
      <div
        className={`absolute top-0 lg:hidden left-0 w-full bg-white z-30 transition-all duration-500 ease-in-out ${
          open ? 'opacity-100 h-screen' : 'opacity-0 h-0'
        }`}
        style={{
          transitionProperty: 'opacity, height',
          height: open ? '100vh' : '0',
        }}
        aria-hidden={!open} // Improve accessibility by hiding from screen readers when not open
      >
        <div className="flex flex-col gap-4 text-[12px] justify-center items-center p-4 h-full">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                 ? 'text-black nav-link active-link'
                : 'hover:text-black transition-all duration-500 nav-link'
            }
            onClick={() => setOpen(false)} // Close the menu when a link is clicked
          >
            About
          </NavLink>
          <NavLink
            to="/sidequests"
            className={({ isActive }) =>
              isActive
                  ? 'text-black nav-link active-link'
                : 'hover:text-black transition-all duration-500 nav-link'
            }

            onClick={() => setOpen(false)}
          >
            SideQuest
          </NavLink>
         <Spotify/>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
