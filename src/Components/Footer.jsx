import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="md:text-[70px] w-full text-center text-[20px] py-4 border-b-[2px] border-black border-dashed">
          Build the world with <span className="font-serif">intention</span>{" "}
        </h1>
        <div>
          <h1 className="py-1">Built with 💙 by Ebuka + Tola © 2024 </h1>
          <div className="flex justify-center py-1 gap-4 items-center">
           <a href="">TW</a>
           <a href="">GH</a>
           <a href="">LN</a>
           <a href="">IG</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
