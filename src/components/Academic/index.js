import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Academic.styl';

function Academic() {
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>
        Academic
      </h2>
      <div className='Academic-data'>
        {data && data.data.Academic.map(
          (item) => (
            <div key={item.degree} className='Academic-item'>
              <h3>{item.institution}</h3>
              {' '}
              <h4>{item.degree}</h4>
              {' '}
              <div>
                (
                {item.startDate}
                {' '}
                -
                {item.endDate}
                )
              </div>
              <div>
                {item.description}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Academic;
