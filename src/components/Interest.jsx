import React from 'react';
import '../styles/components/App.styl';

const Interest = ({ interest }) => {

  const interests = Array.from(new Set(interest));

  return (
    <div className='Interest'>
      <h2 className='Interest-title subtitle'>Interest</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {interests.map((item) => <div className='Interest-item badge' key={item}>{item}</div>)}
      </div>
    </div>
  );
};

export default Interest;
