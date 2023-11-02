import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import { Link } from "react-router-dom";
import Union from "../assets/Union.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const { token, changeToken } = useToken();
  const { role, changeRole } = useToken();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  function handleLogout() {
    changeToken();
    changeRole();
    navigate("/");
  }

  const links = [
    { to: "/", text: "Home" },
    { to: "/list-car", text: "List Car" },
    { to: "/history", text: "History" },
  ];

  if (token !== "" || role !== "") {
    links.push({ to: "/bot", text: "Chat Bot" });
    links.push({ to: "/role-admin" });
  }

  return (
    <div className="lg:px-16 lg:py-2 p-2 lg:flex lg:justify-between lg:items-center flex justify-between items-center font-poppins shadow-md shadow-zinc-300">
      {/* logo */}
      <div className="flex justify-center lg:gap-2 gap-1">
        <img
          src={Union}
          alt=""
          className="lg:h-[39px] lg:w-[51px] h-[20px] w-[20px]"
        />
        <p className="lg:mt-[-2px] font-bold lg:text-[32px] text-[14px]">
          Car-sale.
        </p>
      </div>

      {/* version mobile */}
      <div className="lg:hidden">
        <div className="relative z-50">
          <button
            type="button"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {menuVisible && (
            <div className="absolute bg-gray-200 ml-[-60px] mt-2 py-2 w-48 border rounded-lg shadow-lg">
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && (
                    <hr className="border-1 border-gray-500 border-dashed" />
                  )}
                  <Link
                    to={link.to}
                    className="block px-4 py-2 text-gray-800 hover:text-gray-900"
                  >
                    {link.text}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* version desktop */}
      <div className="hidden text-[16px] gap-8 lg:flex lg:items-center">
        {links.map((link, index) => (
          <Link to={link.to} key={index}>
            <p>{link.text}</p>
          </Link>
        ))}
      </div>

      {/* button login n logout */}
      <div className="text-white">
        {token === "" && role === "" ? (
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
