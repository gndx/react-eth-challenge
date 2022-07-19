import React from 'react';
import Card from '../Card';
import '../../styles/components/Languages.css';

function Languages({ languages }) {
  return (
    <Card>
      <h2 className='Languages-title'>Languages</h2>
      <ul>
        {languages?.map(({ name, percentage }) => (
          <li key={`${name}_${percentage}`} className='Languages-item'>
            <h3>{name}</h3>
            <div className='meter'>
              <span style={{ width: percentage }} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default Languages;
