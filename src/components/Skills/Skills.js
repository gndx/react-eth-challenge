import React from 'react';
import { BsTrophy } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { Container, Span } from '../../styles/GlobalStyles';
import {
  Section,
  SkillsContainer,
  Card,
  Name,
  SkillLevel,
  ImgNode,
  ImgJavascript,
  ImgReact,
  ImgPython,
  ImgCplusplus,
  ImgHtml,
  Wave,
  Frame,
} from './styles';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Skills() {
  return (
    <Container>
      <Span>
        <BsTrophy style={style} />
        <h2>Skills</h2>
      </Span>
      <Section>
        <SkillsContainer>
          <Card>
            <ImgNode />
            <SkillLevel>90%</SkillLevel>
            <Name>Node</Name>
            <Frame>
              <Wave percentage="90%" />
            </Frame>
          </Card>
          <Card>
            <ImgJavascript />
            <SkillLevel>50%</SkillLevel>
            <Name>Javascript</Name>
            <Frame>
              <Wave percentage="50%" />
            </Frame>
          </Card>
          <Card>
            <ImgReact />
            <SkillLevel>30%</SkillLevel>
            <Name>React</Name>
            <Frame>
              <Wave percentage="30%" />
            </Frame>
          </Card>
          <Card>
            <ImgHtml />
            <SkillLevel>100%</SkillLevel>
            <Name>HTML</Name>
            <Frame>
              <Wave percentage="100%" />
            </Frame>
          </Card>
          <Card>
            <ImgCplusplus />
            <SkillLevel>70%</SkillLevel>
            <Name>C++</Name>
            <Frame>
              <Wave percentage="70%" />
            </Frame>
          </Card>
          <Card>
            <ImgPython />
            <SkillLevel>10%</SkillLevel>
            <Name>Python</Name>
            <Frame>
              <Wave percentage="10%" />
            </Frame>
          </Card>
        </SkillsContainer>
      </Section>
    </Container>
  );
}

export default Skills;
