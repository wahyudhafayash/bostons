import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { PiTiktokLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-28 pt-36 md:pt-56 text-white bg-[url('/rumahh.webp')] bg-cover bg-center h-full pb-16">
      <div className="flex flex-col items-center text-center md:items-start md:text-left bg-black/70 rounded-xl p-4 md:py-4 px-12">
        <h1 className="text-xl md:text-2xl font-bold text-[#E55615] py-5 uppercase">
          Hallo Perkenalkan Kami
        </h1>
        <h1 className="text-3xl md:text-5xl py-5 font-bold">
          {"{"}Brand Name{"}"}
        </h1>
        <p className="text-sm md:text-xl font-semibold py-5 uppercase">
          Lorem ipsum dolor sit amet
        </p>

        <div className="flex items-center justify-center md:justify-around gap-6 md:gap-0 w-full max-w-xs md:max-w-md py-5">
          <button className="w-12 h-12 md:w-16 md:h-16 bg-[#E55615] rounded-full hover:bg-[#E55615]/90 hover:scale-90 transition-all duration-200 cursor-pointer flex items-center justify-center">
            <IoLogoInstagram className="text-white text-[24px] md:text-[28px]" />
          </button>
          <button className="w-12 h-12 md:w-16 md:h-16 bg-[#E55615] rounded-full hover:bg-[#E55615]/90 hover:scale-90 transition-all duration-200 cursor-pointer flex items-center justify-center">
            <PiTiktokLogo className="text-white text-[24px] md:text-[28px]" />
          </button>
          <button className="w-12 h-12 md:w-16 md:h-16 bg-[#E55615] rounded-full hover:bg-[#E55615]/90 hover:scale-90 transition-all duration-200 cursor-pointer flex items-center justify-center">
            <FaWhatsapp className="text-white text-[24px] md:text-[28px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
