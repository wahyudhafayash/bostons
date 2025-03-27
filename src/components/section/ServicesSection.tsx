import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from "../ui/CountUp";

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6 md:mx-20">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start md:mb-20">
        <h1 className="font-extrabold text-md md:pl-20 my-6 md:mt-12 text-[#E55615]">
          01.
        </h1>
        <div className="w-screen md:h-16 flex flex-col md:flex-row md:justify-between items-center md:px-20">
          <h1 className="font-extrabold text-4xl md:text-6xl text-center md:text-left">
            Layanan
          </h1>
          <button className="flex items-center justify-center py-4 px-8 my-14 text-sm md:text-md font-bold bg-[#292929] hover:bg-[#E55615] rounded-sm uppercase cursor-pointer transition-colors duration-300">
            Lihat Semua Layanan
          </button>
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col w-full md:flex-row gap-8 items-center">
        <div className="flex flex-col items-center md:items-start w-[90%] md:w-full mx-4 md:mx-0 p-4 md:p-16 md:h-[430px] bg-[#1F1F1F] rounded-sm">
          <FaLaptopCode className="my-6 text-[25px] md:text-[35px]" />
          <h1 className="font-bold md:mt-8 text-xl md:text-xl">
            Pembuatan Website
          </h1>
          <p className="my-6 md:mb-0 md:mt-6 text-[13px] md:text-[16px] text-center md:text-start">
            Membuat berbagai macam jenis website untuk kebutuhan maupun branding
            bisnis Anda.
          </p>
          <button className="py-2 px-5 mt-8 text-sm font-bold bg-[#E55615] rounded-sm hover:text-[#E55615] hover:bg-white hover:-translate-y-2 cursor-pointer transition-all duration-300">
            Lihat Portfolio
          </button>
        </div>

        <div className="flex flex-col items-center md:items-start w-[90%] md:w-full mx-4 md:mx-0 p-4 md:p-16 md:h-[430px] bg-[#1F1F1F] rounded-sm">
          <HiOutlineSpeakerphone className="my-6 text-[25px] md:text-[35px] rotate-330" />
          <h1 className="font-bold md:mt-8 text-xl md:text-xl">
            Digital Marketing
          </h1>
          <p className="my-6 md:mb-0 md:mt-6 text-[13px] md:text-[16px] text-center md:text-start">
            Membuat berbagai jenis website untuk kebutuhan atau branding bisnis
            Anda.
          </p>
          <button className="py-2 px-5 mt-8 text-sm font-bold bg-[#E55615] rounded-sm hover:text-[#E55615] hover:bg-white hover:-translate-y-2 cursor-pointer transition-all duration-300">
            Lihat Portfolio
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row gap-8 w-[90%] md:w-full mx-4 md:mx-0 my-20 items-center justify-evenly bg-[#1F1F1F] rounded-sm p-4 md:p-8">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center my-8">
              <FaPeopleGroup className="text-[30px] text-[#E55615]" />
              <h1 className="text-5xl font-extrabold mt-6">
                <CountUp
                  from={0}
                  to={22}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </h1>
              <h1 className="text-[18px] text-gray-300 mt-2">Clients</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesSection;
