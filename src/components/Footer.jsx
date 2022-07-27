import React from "react";
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer
      style={{
        background: `${"transparent"}`,
      }}
      className="overflow-hidden rounded-b-2xl"
    >
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
        © 2022 All Rights Reserved by{" "}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>
        .
      </p>

     
      
      <span className="flex justify-center">
        <span className="text-center flex-none text-gray-lite  dark:text-color-910 ">
        With
        </span>
        &nbsp; <AiFillHeart size={20} color="#FA5252"/> <span className="text-center flex-none text-gray-lite  dark:text-color-910 ">
        &nbsp; by
        </span>
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
        &nbsp; Ivy Saskia
        </span>
      </span> 
      
    </footer>
  );
};

export default Footer;
