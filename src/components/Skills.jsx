import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { colors } from '../utils/colors';

function Skills(props){
  const data = useContext(AppContext)
  
  if(data.skills){
    let tmpSkills = data.skills.map( skill => {
      let perc = skill.percentage.replace('%', '')
      let indexRand = Math.floor(Math.random() * colors.length);
      return {
        "name": skill.name,
        "percentage": perc,
        "color": colors[indexRand]
      }
    })
    return(
      <Container fluid className='Academic content green-bg'>
        <Row>
          <h2 className='Skills-title'>Skills</h2>
          <Col> 
          
            <ListGroup variant="flush">
            {tmpSkills.map( (skill, index) => (
              <ListGroup.Item className='Skills-item' key={index}> 
                {skill.name}
                <ProgressBar variant={skill.color} now={skill.percentage} label={`${skill.percentage}%`} />
                
              </ListGroup.Item>
            ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Skills;