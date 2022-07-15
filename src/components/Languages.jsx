import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/components/Languages.styl';
import DecoratorContainer from './DecoratorContainer';

function Languages({ languages, loading }) {
  return (
    <DecoratorContainer>
      <h3 className='Languages-title'>Idiomas 🗣️</h3>
      {!loading ? (
        <ul>
          {languages.map((acd) => (
            <li className='Languages-item' key={`Language-${acd.title}`}>
              <h3>{acd.title}</h3>
              <p>
                <b>Estudie: </b>
                {acd.level}
              </p>
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

export default Languages;
