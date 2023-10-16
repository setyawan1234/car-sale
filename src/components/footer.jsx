import React from "react";
import { Button } from "./button";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-black w-full lg:h-[16rem] h-[36rem] text-white font-poppins lg:p-8 p-1">
      <div className="container mx-auto  lg:flex lg:justify-between lg:flex-row flex justify-center flex-col my-5">
        <div className="lg:flex lg:justify-start flex items-center lg:items-start gap-3 cursor-pointer">
          <img src="./Union.svg" alt="" className="lg:h-[39px] lg:w-[51px]" />
          <p className="lg:mt-[2px] font-bold lg:text-[32px] text-[14px]">
            Car-sale.
          </p>
        </div>
        <div className="lg:flex lg:justify-around lg:flex-row flex justify-center flex-col items-center lg:gap-12 gap-6">
          <div className="lg:flex lg:flex-row lg:mt-[0px] flex mt-8 gap-28 lg:gap-12">
            <div className="flex flex-col gap-1">
              <p className="font-bold">Company</p>
              <hr className="border-2 border-[#FF7A00] lg:w-[85px]"/>
              <p className="font-thin cursor-pointer">Homepage</p>
              <p className="font-thin cursor-pointer">List Car</p>
              <p className="font-thin cursor-pointer">History</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Mobile App</p>
                <hr className="border-2 border-[#FF7A00] lg:w-[95px]"/>
              <p className="font-thin cursor-pointer">Features</p>
              <p className="font-thin cursor-pointer">Live share</p>
              <p className="font-thin cursor-pointer">Video record</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-bold">Comunity</p>
            <hr className="border-2 border-[#FF7A00] w-20 lg:w-[90px]"/>
            <p className="font-thin cursor-pointer">Featured artists</p>
            <p className="font-thin cursor-pointer">The Portal</p>
            <p className="font-thin cursor-pointer">Live Events</p>
          </div>

          <div className="lg:flex lg:flex-col lg:gap-5 flex gap-12">
            <Button label="Register" bgColor="#FF7A00" />
            <Button label="Log In" />
          </div>
        </div>
      </div>
      <hr className="border-2 container mx-auto border-[#FF7A00]" />
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:flex-row flex flex-col gap-5 mt-4 p-4 lg:p-1">
        <div>
          <p className="font-thin">
            © Car-Sale Malang 2023. We love our users!
          </p>
        </div>
        <div className="flex items-center lg:gap-12 gap-4">
          <p>Follow Us : </p>
          <div className="flex gap-5 px-3">
            <AiFillInstagram className="h-8 w-8 text-[#FF7A00] " />
            <BsFacebook className="h-6 w-6 mt-[4px] text-[#FF7A00]" />
            <BsLinkedin className="h-6 w-6 mt-[4px] text-[#FF7A00]" />
          </div>
        </div>
      </div>
    </div>
  );
};
