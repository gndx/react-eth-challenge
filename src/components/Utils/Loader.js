import React from 'react';

const Loader = () => {
  return (
    <span className='flex h-screen w-screen m-auto justify-center items-center'>
      <span className='animate-ping absolute inline-flex h-5 w-5 rounded-full bg-sky-400 opacity-75' />
      <span className='absolute inline-flex rounded-full h-5 w-5 bg-sky-500' />
    </span>
  );
};

export default Loader;
