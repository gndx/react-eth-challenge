import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/components/Skills.styl';
import DecoratorContainer from './DecoratorContainer';

function Skills({ skills, loading }) {
  return (
    <DecoratorContainer>
      <h2 className='Skills-title'>Habilidades 💪</h2>
      {!loading ? (
        <ul>
          {skills.map((sk) => (
            <li className='Skills-item' key={`Skill-${sk}`}>
              <h3>{sk}</h3>
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

export default Skills;
