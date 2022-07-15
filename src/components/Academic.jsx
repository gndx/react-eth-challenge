import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import DecoratorContainer from './DecoratorContainer';
import '../styles/components/Academic.styl';

function Academic({ academics, loading }) {
  return (
    <DecoratorContainer>
      <h2 className='Academic-title'>Academico 🎓</h2>

      {!loading ? (
        <ul>
          {academics.map((acd) => (
            <li className='Academic-item' key={`Academic-${acd.organism}`}>
              <h3>{acd.organism}</h3>
              <p>
                <b>Estudie: </b>
                {acd.career}
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

export default Academic;
