import React from 'react';
import Curriculum from './Curriculum';


const Welook = () => {
  return (
    <div className="bg-white/10 border-white/40 border-2 py-3 px-3 rounded-lg shadow-lg mb-3">
      <span>
        You can see my POAP's in my social wallet on welook{' '}
        {/* <img
            className="w-16 inline relative bottom-[4px]"
            src="https://www.welook.io/static/media/welook-logo-main.356ecc8f4e93d5e7435ef73cca5d7e33.svg"
            alt="welook logo"
          /> */}
      </span>
      <a
        href="https://www.welook.io/0x7ED27AB6cE44B19e2c1eE1317B836D4dEC1fD7ae"
        target="_blank"
        className="btn--pink mt-6"
        draggable="false"
      >
        See poaps{' '}
        <img
          className="w-5 inline relative top-[1px] ml-1"
          src="https://poap.xyz/POAP.f74a7300.svg"
          alt="poap logo"
        />
      </a>
      <Curriculum />
    </div>
  );
};

export default Welook;
