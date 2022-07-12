import React from 'react';
import { MdSchool } from 'react-icons/md';
import { Container, Span } from '../styles/GlobalStyles';
import {
  Li,
  Job,
  Info,
  School,
  Time,
  Desc,
  Degree,
  Description,
} from '../styles/Academic';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Academic({ academic = [{}, {}, {}] }) {
  return (
    <Container>
      <Span>
        <MdSchool style={style} />
        <h2 className="Academic-title">Academic</h2>
      </Span>
      <ul>
        {academic?.map((element, index) => {
          return (
            <Li key={index} className="Academic-item">
              <Job>
                <Info>
                  <School>{element.institution}</School>
                  <Time>
                    {element.startDate} -{element.endDate}
                  </Time>
                </Info>
                <Desc>
                  <Degree>{element.degree}</Degree>
                  <Description>{element.description}</Description>
                </Desc>
              </Job>
            </Li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Academic;
