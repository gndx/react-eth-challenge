import React from 'react';

const Section = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`glass mb-3 py-4 px-5 rounded-md min-h-[190px] w-11/12`}
    >
      <div className={`text-white ${className}`}>{children}</div>
    </div>
  );
};

export default Section;
