import React from 'react';

const Experience = ({data}) => {
  return (
    <div>
      <h2 className='Experience-title'>Experience Title</h2>
      {data.map((item,i) => (
        <p key={`experience-${i}`} className='Experience-item'>{item.jobDescription}</p>
      ))}
    </div>
  );
}

export default Experience;
