import React from 'react';
import '../styles/components/ProgressBar.styl';

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className='Progress-bar'>
      <div style={{ width: percentage }}>
        <small>{`${name} - ${percentage}`}</small>
      </div>
    </div>
  );
};

export default ProgressBar;
