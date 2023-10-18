import React from "react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    navigate("/");
  }
  return (
    <div className="lg:px-16 lg:py-2 p-2 lg:flex lg:justify-between lg:items-center flex justify-between items-center font-poppins shadow-md shadow-zinc-300">
      <div className="flex justify-center lg:gap-2 gap-1">
        <img
          src="./Union.svg"
          alt=""
          className="lg:h-[39px] lg:w-[51px] h-[20px] w-[20px]  "
        />
        <p className="lg:mt-[-2px] font-bold lg:text-[32px] text-[14px]">
          Car-sale.
        </p>
      </div>
      <div className="flex lg:gap-8 gap-2 lg:text-[16px] text-[12px]">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>List Car</p>
        </Link>
        <Link to="/">
          <p>History</p>
        </Link>
      </div>
      <div className="text-white">
        {token === "" ? (
          <Link to="/login">
            <p className="cursor-pointer bg-[#FF7A00] rounded-md px-4 py-2">
              Log In
            </p>
          </Link>
        ) : (
          <p
            className="cursor-pointer bg-[#FF7A00] rounded-md px-4 py-2"
            onClick={() => handleLogout()}
          >
            Logout
          </p>
        )}
      </div>
    </div>
  );
};

<Button label="Login" bgColor="" color="white" />;
