import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { colors, colorsBadgest } from '../utils/colors';

function Interest(props){

  // Hardcoded, will change
  const interest = [
    {
      color: "info",
      name: "Interest name"
    },
    {
      color: "info",
      name: "Interest name"
    },
    {
      color: "info",
      name: "Interest name"
    }
  ]

  let tmpInterest = interest.map( inter => {
    let indexRand = Math.floor(Math.random() * colors.length);
    return {
      "name": "inter",
      "color": colorsBadgest[indexRand]
    }
  })
  return(
    <Container fluid className='Interest content green-bg'>
      <Row>
        <h2 className='Interest-title'>Interest</h2>
        <Col> 
          {tmpInterest.map( (inter, index) => (
            <Badge pill bg={inter.color} className="Interest-item" key={index}>
              {inter.name}
            </Badge>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Interest;

