import React from "react";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <div className="lg:container mx-auto p-2 lg:flex lg:justify-between lg:items-center flex justify-between items-center font-poppins">
      <div className="flex justify-center lg:gap-2 gap-1">
        <img src="./Union.svg" alt="" className="lg:h-[39px] lg:w-[51px] h-[20px] w-[20px]  " />
        <p className="lg:mt-[-2px] font-bold lg:text-[32px] text-[14px]">Car-sale.</p>
      </div>
      <div className="flex lg:gap-14 gap-2 lg:text-[16px] text-[12px]">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">List Car</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">History</a>
          </li>
        </ul>
      </div>
      <div>
        <Button label="Login" bgColor="#FF7A00" color="white" />
      </div>
    </div>
  );
};
