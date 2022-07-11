import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Interest.styl';

function Interest() {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>
        Interest
      </h2>
      <div className='Interest-data'>
        {data && data.data.interest.map(
          (item) => (
            <div key={item} className='Interest-item'>
              {item.toLocaleUpperCase()}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Interest;
