import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import DecoratorContainer from './DecoratorContainer';
import '../styles/components/Experience.styl';

function Experience({ experiences, loading }) {
  return (
    <DecoratorContainer>
      <h3 className='Experience-title'>Experiencia 🆙</h3>

      {!loading ? (
        <ul className='Experience-container'>
          {experiences.map((exp, idx) => (
            <li className='Experience-item' key={`Experince-${exp.id || idx}`}>
              <h4>{exp.title}</h4>
              <p>
                <b>Posicion: </b>
                {exp.position}
              </p>
              <p>
                <b>year: </b>
                {exp.year}
              </p>
              <p>
                <b>tools: </b>
                {exp.tools.join(' - ')}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className='center'>
          <p>adadasd</p>

          <ThreeDots color='grey' />
        </div>
      )}
    </DecoratorContainer>
  );
}

export default Experience;
