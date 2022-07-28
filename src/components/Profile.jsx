import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Profile(){
  return(
    <Container fluid className='Profile content green-bg'>
      <Row>
        <h2 className='Profile-title'>Profile</h2>
        <div className='Profile-desc'>Desc</div>
      </Row>
    </Container>
  )
}

export default Profile;