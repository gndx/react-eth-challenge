import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/components/Interest.styl';
import DecoratorContainer from './DecoratorContainer';

function Interest({ interests, loading }) {
  return (
    <DecoratorContainer>
      <h3 className='Interest-title'>Intereses 👍</h3>
      {!loading ? (
        <ul>
          {interests.map((interest) => (
            <li className='Interest-item' key={`Skill-${interest}`}>
              <h3>{interest}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <div className='center'>
          <ThreeDots color='grey' />
        </div>
      )}
    </DecoratorContainer>
  );
}

export default Interest;
