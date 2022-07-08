import React from 'react';

const Academic = ({data}) => {
  return (
    <div>
      <h2 className='Academic-title'>Title academic</h2>
      {data.map((item,i) => (
        <p key={`academic-${i}`} className='Academic-item'>{item.description}</p>
      ))}
    </div>
  );
}

export default Academic;
