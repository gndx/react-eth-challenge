import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Profile(){
  const data = useContext(AppContext)
  return(
    <Container fluid className='Profile content green-bg'>
      <Row>
        <h2 className='Profile-title'>Profile</h2>
        <div className='Profile-desc'>{data.Profile}</div>
      </Row>
    </Container>
  )
}

export default Profile;