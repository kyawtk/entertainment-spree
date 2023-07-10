import React from "react";

const Header = () => {
  return (
    <header onClick={()=>window.scrollTo({top:0, left:0,behavior: "smooth"})} className="text-[2vw] md:text-[2vw] lg:text-[2vw]   p-2 font-montserrat w-full flex justify-center items-center bg-slate-900 cursor-pointer fixed top-0 uppercase z-50 text-white shadow-md ">
      🎞️Entertainment Spree📽️
    </header>
  );
};

export default Header;
