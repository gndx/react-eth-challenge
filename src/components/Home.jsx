import { Children, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { Outlet, useLocation } from "react-router-dom";
import {
  handleTheme, selectCheck
} from '../store/application/aplicationSlice';

import HomeCard from "./HomeCard";
import NavLink from "./NavLink";
import Menu from "./Menu";
import { menuItem } from '../constants/Resources';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

const Home = ({ children }) => {
  const dispatch = useDispatch();
  const check = useSelector(selectCheck);

  const [menuOpen, setMenuOpen] = useState(false);
  const handle = (e) => {
    dispatch(handleTheme(e));
  };
  const a = useLocation();

  return (
    <>
      <section className="bg-homeBg dark:bg-homeBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <div
          className="container   w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]"
          data-aos="fade"
        >
          <div className="w-full flex justify-end px-4">
            <div className="flex items-center"> 
              {!check ? (
                <span
                  onClick={() => handle("dark")}
                  className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiMoon className=" text-3xl " />
                </span>
              ) : (
                <span
                  onClick={() => handle("light")}
                  className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiSun className="text-white text-3xl" />
                </span>
              )}

              {!menuOpen ? (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden   bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3 "
                >
                  <AiOutlineMenu />
                </span>
              ) : (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                >
                  <AiOutlineClose />
                </span>
              )}
            </div>
          </div>
        </div>

        <nav className={`${menuOpen ? "block lg:hidden" : "hidden"}`}>
          <ul
            className={`${
              menuOpen
                ? "block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
                : "flex my-12 "
            }`}
          >
            {menuItem.map((item) => (
              <li onClick={() => setMenuOpen(false)} key={item.id}>
                <NavLink
                  key={item.id}
                  activeClassName=" text-[#FA5252]  hover:text-[#FA5252] "
                  inactiveClassName=" dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                  className={`${
                    menuOpen ? " pl-4" : " mx-2.5 rounded-md "
                  }    cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  ${
                    a.pathname === "/homeTwo" && item.id === "01"
                      ? " dark:text-[#FA5252] text-[#FA5252]   "
                      : ""
                  }`}
                  to={item?.link}
                >
                  <span className="mr-2 text-xl">{item?.icon}</span>{" "}
                  {item?.name}
                </NavLink>
              </li>
            ))}

            {!check ? (
              <span
                onClick={() => handle("dark")}
                className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiMoon className=" text-3xl " />
              </span>
            ) : (
              <span
                onClick={() => handle("light")}
                className="bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiSun className="text-white text-3xl" />
              </span>
            )}
          </ul>
        </nav>

        <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[100px] ">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            {children}
          </div>

          <div className="col-span-12 lg:col-span-8  ">
            <Menu />
            <Outlet />
          </div>
        </div>
      <Footer/>

      </section>
    </>
  );
};

export default Home;
