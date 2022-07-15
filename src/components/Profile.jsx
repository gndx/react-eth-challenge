import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/components/Profile.styl';
import DecoratorContainer from './DecoratorContainer';

function Profile({ profile, loading }) {
  return (
    <DecoratorContainer>
      <h2 className='Profile-title'>Perfil 👤</h2>
      {!loading ? (
        profile.map((prf, idx) => (
          <p key={`Profile-${prf.id || idx}`} className='Profile-desc'>
            {prf.description}
          </p>
        ))
      ) : (
        <div className='center'>
          <ThreeDots color='grey' />
        </div>
      )}
    </DecoratorContainer>
  );
}

export default Profile;
