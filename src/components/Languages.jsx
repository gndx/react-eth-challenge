import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { colors } from '../utils/colors';

function Languages(){
  const data = useContext(AppContext)

  if(data.languages){
    let tmpLangs = data.languages.map( lang => {
      let perc = lang.percentage.replace('%', '')
      let indexRand = Math.floor(Math.random() * colors.length);
      return {
        "name": lang.name,
        "percentage": perc,
        "color": colors[indexRand]
      }
    })
    return(
      <Container fluid className='Languages content green-bg'>
        <Row>
          <h2 className='Languages-title'>Languages</h2>
          <Col> 
          
            <ListGroup variant="flush">
            {tmpLangs.map( (lang, index) => (
              <ListGroup.Item className='Languages-item' key={index}> 
                {lang.name}
                <ProgressBar variant={lang.color} now={lang.percentage} label={`${lang.percentage}%`} />
                 
              </ListGroup.Item>
            ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Languages;
