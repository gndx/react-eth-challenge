import React from 'react';
import './Background.css';

function Background() {
  return (
    <>
      <div className='bg-container'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='500px'
        >
          <path
            id='shape1'
            fillRule='evenodd'
            fill='rgb(35, 23, 123)'
            d='M-0.011,9.318 L8.682,6.988 L11.011,15.682 L2.318,18.011 L-0.011,9.318 Z'
          />
          <path
            id='shape8'
            fillRule='evenodd'
            fill='rgb(35, 23, 123)'
            d='M607.694,164.319 L612.680,161.693 L615.306,166.680 L610.320,169.305 L607.694,164.319 Z'
          />
          <path
            id='shape9'
            fillRule='evenodd'
            fill='rgb(93, 203, 250)'
            d='M667.343,205.646 L679.152,213.179 L671.620,224.988 L659.810,217.456 L667.343,205.646 Z'
          />
          <path
            id='shape10'
            fillRule='evenodd'
            fill='rgb(93, 203, 250)'
            d='M915.839,-0.008 L924.997,5.833 L919.156,14.991 L909.998,9.150 L915.839,-0.008 Z'
          />
          <path
            id='cir6'
            fillRule='evenodd'
            fill='rgb(35, 23, 123)'
            d='M989.000,93.000 C993.418,93.000 997.000,96.582 997.000,101.000 C997.000,105.418 993.418,109.000 989.000,109.000 C984.582,109.000 981.000,105.418 981.000,101.000 C981.000,96.582 984.582,93.000 989.000,93.000 Z'
          />
        </svg>
      </div>
      <div className='box'>
        <div className='wave one' />
        <div className='wave two' />
        <div className='wave three' />
      </div>
    </>
  );
}

export default Background;
