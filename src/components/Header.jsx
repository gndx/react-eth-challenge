import React from 'react';

const Header = ({ name, profession }) => {
  return (
    <>
    <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white Header-title">
            { name }
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            { profession }
          </h3>
    </>
  );
};

export default Header;
