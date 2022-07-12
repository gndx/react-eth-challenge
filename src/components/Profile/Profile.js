import React from 'react';
import { TbUser } from 'react-icons/tb';
import { Container, Span } from '../../styles/GlobalStyles';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Profile() {
  return (
    <Container>
      <Span>
        <TbUser style={style} />
        <h2>Profile</h2>
      </Span>
      <p>
        Ignore the squirrels, you'll never catch them anyway hack, for floof
        tum, tickle bum, jellybean footies curly toes climb leg roll over and
        sun my belly,
      </p>
    </Container>
  );
}

export default Profile;
