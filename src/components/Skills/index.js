import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Skills.styl';

function Skills() {
  return (
    <div className='Skills'>
      <h2 className='Skills-title'>
        Skills
      </h2>
      <div className='Skills-data'>
        {data && data.data.skills.map(
          (item) => (
            <div key={item.name} className='Skills-item'>
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

export default Skills;
