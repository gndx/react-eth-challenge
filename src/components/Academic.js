import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic = [0, 1, 2] }) => {
  return (
    <div className='Academic'>
      <div className='Academic-title'> 👨‍🎓 Academic </div>
      <div className='Academic-container-items'>
        {
          academic?.map((item, index) => <div key={index} className='Academic-item'>{item.degree}</div>)
        }
      </div>
    </div>
  );
};

export default Academic;
