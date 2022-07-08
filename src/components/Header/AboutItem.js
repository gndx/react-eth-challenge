import React from 'react';

const AboutItem = ({ children }) => {
  return (
    <div className='flex items-center'>
      <span className='rounded-full w-2 h-2 bg-cyan-400 mr-2' />
      <span className='text-slate-500 dark:text-slate-400'>{children}</span>
    </div>

  );
};

export default AboutItem;
