import React from 'react';
import '../styles/components/App.styl';

const Languages = ({ language }) => {

  const languages = Array.from(new Set(language));

  return (
    <div className='Languages'>
      <h2 className='Languages-title subtitle'>Languages</h2>
      {languages.map((item) => <span className='Languages-item subrayar' key={item.name}>{`${item.name} - ${item.percentage}`}</span>)}
    </div>
  );
};

export default Languages;
