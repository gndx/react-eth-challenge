import React from 'react';
import Fill from '../common/Fill';

export default function Skills({ skills = [{}, {}, {}] }) {
  return (
    <aside className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      <ul>
        {skills?.map((item, index) => (
          <li key={`skill-${item.name}`} className='Skills-item'>
            <h5>{item.name}</h5>
            <div className='Skills-item-container'>
              <Fill amount={`${item.percentage}`}>
                <p>{item.percentage}</p>
              </Fill>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
