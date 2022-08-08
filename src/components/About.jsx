import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
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
  & h3 {
    color: #FF6D09;
  }
`
const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`

const About = ({data}) => {
  return (
    <Wrapper>
        <DescriptionWrapper>
        <ItemWrapper>
        <h3>About</h3>
          <p>
            💻 Software Engineer
          </p>
          <p>
            🇲🇽 +525513964342
          </p>
          <p>
            📩 rodrx20@gmail.com
          </p>
          <p>
            🌐 <a href="https://rdr-x.github.io/static/EN/englishversion.html">Landing Page</a>
          </p>
          <p>
            📍CDMX, Mexico
          </p>
        </ItemWrapper>
        <ItemWrapper>
          <p>
            I'm really exited about decentrilized technology scope and what it could make possible. Computer engineer and fullstack js developer.
          </p>
        </ItemWrapper>
        </DescriptionWrapper>
    </Wrapper>
  )
}

export { About }