import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages = [0, 1, 2] }) => {
  return (
    <div className='Languages'>
      <div className='Languages-title'>🈯 Languages</div>
      <div className='Languages-container-items'>
        {
          languages?.map((item, index) => <div key={index} className='Languages-item'>{item.name}</div>)
        }
      </div>
    </div>
  );
};

export default Languages;
