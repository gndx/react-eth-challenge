import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Academic(){
  const data = useContext(AppContext)
  return(
    <Container fluid className='Academic content green-bg'>
      <Row>
        <h2 className='Academic-title'>Academic</h2>
        <Col>
          {data.Academic && data.Academic.map( (acad, index) => (
            <Card
              bg='Light'
              key={index}
              text='dark'
              style={{ width: '28rem' }}
              className="mb-2 Academic-item"
              border="primary"
            >
              <Card.Header>{acad.degree}</Card.Header>
              <Card.Body>
                <Card.Title>{acad.institution} </Card.Title>
                <Card.Text>
                <Badge bg="info">From: {acad.startDate}</Badge>{' '} <Badge bg="success">To: {acad.endDate}</Badge>
                  <div>
                    {acad.description}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          
        </Col>
      </Row>
    </Container>
  )
}

export default Academic;

