import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/components/About.styl';

function About({ loading, about }) {
  return (
    <div className='About'>
      <h3 className='About-title'>Acerca de mi:</h3>
      {!loading ? (
        <ul>
          {about.map((abt, idx) => (
            <li className='About-item' key={false || idx}>
              {abt}
            </li>
          ))}
        </ul>
      ) : (
        <div className='center'>
          <ThreeDots color='grey' />
        </div>
      )}
    </div>
  );
}

export default About;
