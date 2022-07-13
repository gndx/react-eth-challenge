import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest = [0, 1, 2] }) => {
  return (
    <div className='Interest'>
      <div className='Interest-title'>📗 Interest</div>
      <div className='Interest-container-items'>
        {
          interest?.map((item, index) => <div key={index} className='Interest-item'>{item}</div>)
        }
      </div>
    </div>
  );
};

export default Interest;
