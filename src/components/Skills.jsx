import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin: 2rem;
`
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  align-items: center;
  margin: 1rem;
  width: 100%;
  & a {
    text-decoration: none;
  }
  & ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }
  & li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  & i {
    color: #FF6D09;
  }

  & h3 {
    color: #979797;
  }
`

const ItemWrapper = styled.div`
  margin: 1rem;
`

const Skills = ({ Skills }) => {
  return (
    <Wrapper>
      <h1 className="Skills-title">
        Skills
      </h1>
      <DescriptionWrapper>
          <ItemWrapper className="Skills-item">
          <h3>
            Hard skills
          </h3>
            <p><i>Programming languages</i></p>
          <ul>
            <li>
              Javascript
            </li>
            <li>
              Python
            </li>
            <li>
              Solidity
            </li>
            <li>
              C
            </li>
            </ul>
            </ItemWrapper>
            <ItemWrapper className="Skills-item">
            <p><i>Front-end</i></p>
            <ul>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Vue.js
            </li>
            <li>
              React.js
            </li>
            </ul>
            </ItemWrapper>
            <ItemWrapper className="Skills-item">
            <p><i>Back-end</i></p>
            <ul>
            <li>
              Node.js
            </li>
            <li>
              Express.js
            </li>
            <li>
              Sequelize (ORM)
            </li>
            <li>
              API Rest
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              MySQL
            </li>
            <li>
              Git
            </li>
            </ul>
            </ItemWrapper>
        <ItemWrapper className="Skills-item">
          <h3>
            Soft skills
          </h3>
          <p><i>Communication</i></p>
          <ul>
            <li>
              Verbal communication
            </li>
            <li>
              Written communication
            </li>
            <li>
              Empathy
            </li>
            </ul>
        </ItemWrapper>
        <ItemWrapper className="Skills-item">
          <ul>
            <p><i>Teamwork</i></p>
            <li>
              Active listening 
            </li>
            <li>
              Collaboration
            </li>
            <li>
              Idea exchange
            </li>
          </ul>
            </ItemWrapper>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default Skills