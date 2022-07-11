import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Languages.styl';

function Languages() {
  return (
    <div className='Languages' style={{ 'padding-bottom': '20px' }}>
      <h2 className='Languages-title'>
        Languages
      </h2>
      <div className='Languages-data'>
        {data && data.data.languages.map(
          (item) => (
            <div key={item.name} className='Languages-item'>
              <div className='barra-gris'>
                <div className='red' style={{ width: item.percentage }}>
                  {item.name}
                  :
                  {' '}
                  {item.percentage}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Languages;
