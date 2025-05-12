import React from "react";

const Footer = () => {
  return (
    <div className="md:mt-10 w-full">
      <div className="flex flex-col gap-4 items-center justify-center">
        
        <div className="border-t-[2px] py-3 w-full border-black border-dashed">
          <h1 className="py-1 text-center">Built with 💙 by Ebuka + Tola © 2025 </h1>
          <div className="flex justify-center py-1 gap-4 items-center">
           <a href="https://x.com/tolzzyyy__">TW</a>
           <a href="https://github.com/tolzzyyy">GH</a>
           {/* <a href="">LN</a>
           <a href="">IG</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
