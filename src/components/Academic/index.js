import React from 'react';
import Card from '../Card';
import '../../styles/components/Academic.css';

function Academic({ academic }) {
  console.log({ academic });
  return (
    <Card>
      <h2 className='Academic-title'>Academic</h2>
      <ul>
        {academic?.map(
          ({ degree, description, endDate, startDate, institution }) => (
            <li className='Academic-item' key={`${degree}${description}`}>
              <h3>{degree}</h3>
              <h4>{institution}</h4>
              <p>{description}</p>
              <p>
                {startDate}
                {' '}
                -
                {' '}
                {endDate}
              </p>
            </li>
          ),
        )}
      </ul>
    </Card>
  );
}
export default Academic;
