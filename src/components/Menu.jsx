import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItem } from '../constants/Resources';

import NavLink from "./NavLink";

const Menu = () => {
  const [menuOpen] = useState(false);

  const a = useLocation();

  return (
    <header className="lg:w-[350px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#111111] ">
      <nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
        <ul
          className={`${
            menuOpen ? "block absolute left-0 top-20 w-full" : "flex  "
          }  `}
        >
          {menuItem.map((item) => (
            <NavLink
              key={item.id}
              activeClassName=" text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked"
              inactiveClassName=" transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
              className={`${
                item.id === "06" ? "block lg:hidden" : " "
              }  w-20 h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center ${
                a.pathname === "/homeTwo" && item.id === "01"
                  ? " lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                  : " "
              }`}
              to={item?.link}
            >
              <span className=" text-xl mb-1">{item?.icon}</span> {item?.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
