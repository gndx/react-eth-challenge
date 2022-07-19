import React from 'react';
import Card from '../Card';
import '../../styles/components/Interest.css';

function Interest({ interest }) {
  console.log({ interest });
  return (
    <Card>
      <h2 className='Interest-title'>Interest</h2>
      <ul className='Interest-list'>
        {interest?.map((individualinterest) => (
          <li key={`${individualinterest}`} className='Interest-item'>
            <h3>{individualinterest}</h3>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default Interest;
