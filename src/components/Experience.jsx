import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  justify-content: cener;
  align-items: center;
  margin: 2rem;
`
const DescriptionWrapper = styled.div`
  align-items: center;
  margin: 1rem;
  width: 80%;
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
`

const Experience = () => {
  return (
    <Wrapper>
      <h1>
        Experience
      </h1>
      <DescriptionWrapper>
        <h3>
          Software developer
        </h3>
        <p>
          <b>May 2022 - Present</b> 
        </p>
        <ul>
          <li>
            Front-end development using React.js and Typescript
          </li>
          <li>
            Blockchain research and dapp development
          </li>
        </ul>
        <h3>
          Software Engineer Jr
        </h3>
        <p>
          <b>February 2022 - May 2022</b>
        </p>
        <ul>
          <li>
            API improvement with Node.js
          </li>
          <li>
            Database Audit with ORM: Sequelize, Postgres
          </li>
          <li>
            Consuming API Rest
          </li>
          <li>
            Front-end features improvement using Vue.js
          </li>
        </ul>
        <h3>
          Freelancer
        </h3>
        <p>
          <b>March 2021 - Present</b>
        </p>
        <ul>
          <li>
              Web design of landing pages and E-Commerce web apps focused on customer experience
          </li>
          <li>
            Web app development with CMS software Wordpress
          </li>
          <li>
            Web app development with HTML5, CSS3, Javascript
          </li>
          <li>
            Server development with Node.js, Express.js and Heroku
          </li>
          <li>
            Database integration with ORM: Sequelize, Postgres, MySQL
          </li>
          <li>
            API Rest architecture
          </li>
        </ul>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Experience }
