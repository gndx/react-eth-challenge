import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Experience(){

  // Hardcoded, will change
  const experience = [
    {
      company: "Company",
      jobTitle: "JobTitle",
      startDate: "StartDate",
      endDate: "EndDate",
      jobDescription: "Job Description"
    },
    {
      company: "Company",
      jobTitle: "JobTitle",
      startDate: "StartDate",
      endDate: "EndDate",
      jobDescription: "Job Description"
    },
    {
      company: "Company",
      jobTitle: "JobTitle",
      startDate: "StartDate",
      endDate: "EndDate",
      jobDescription: "Job Description"
    }
]

  return(
    <Container fluid className='Experience content green-bg'>
      <Row>
        <h2 className='Experience-title'>Experience</h2>
        <Col>
          {experience.map( (exp, index) => (
            <Card
              bg='Light'
              key={index}
              text='dark'
              style={{ width: '28rem' }}
              className="mb-2 Experience-item"
              border="primary"
            >
              <Card.Header>{exp.company}</Card.Header>
              <Card.Body>
                <Card.Title>{exp.jobTitle} </Card.Title>
                <Card.Text>
                <Badge bg="info">From: {exp.startDate}</Badge>{' '} <Badge bg="success">To: {exp.endDate}</Badge>
                  <div>
                    {exp.jobDescription}
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

export default Experience;

