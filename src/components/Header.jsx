import React from 'react'
import styled from 'styled-components'
import ImgProfile from '../../public/assets/images/self.png'

const Wrapper = styled.div`
  display: flexbox;
  justify-content: cener;
  align-items: center;
`
const ImgWrapper = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 1.5rem;
`

const DescriptionWrapper = styled.div`
  align-items: center;
  margin: 1rem;
  width: 100vw;
  & a {
    text-decoration: none;
  }
`


const Header = () => {
  return (
    <Wrapper>
      <ImgWrapper
        src={ImgProfile}
        width="233px"
        height="233px"
        alt="image-profile"
      />
      <h1>
        
      </h1>
      <DescriptionWrapper>
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
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Header }