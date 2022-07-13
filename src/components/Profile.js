import React from 'react';
import { TbUser } from 'react-icons/tb';
import { Container, Span, ProfileP } from '../styles/GlobalStyles';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Profile({ description }) {
  return (
    <Container>
      <Span>
        <TbUser style={style} />
        <h2 className='Profile-title'>Profile</h2>
      </Span>
      <ProfileP className='Profile-desc'>{description}</ProfileP>
      <ProfileP>
        P.D. I love this quote:
        {' '}
        <q>An invest in knowledge always pays the best interest</q>
      </ProfileP>
    </Container>
  );
}

export default Profile;
