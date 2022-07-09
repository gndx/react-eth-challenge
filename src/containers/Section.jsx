import React from 'react';

const Section = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`glass mb-3 py-4 px-5 rounded-md min-h-[170px] w-11/12 max-w-[1400px]`}
    >
      <div className={`text-white ${className}`}>{children}</div>
    </div>
  );
};

export default Section;
