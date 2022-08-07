import React from 'react'
import styled from 'styled-components'
import ImgProfile from '../../public/assets/images/self.png'

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: cener;
  align-items: center;
`
const ImgWrapper = styled.img`
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;  object-fit: cover;
  margin: 1.5rem;
`

const DescriptionWrapper = styled.div`
  align-items: center;
  margin: 1rem;
  width: 30%;
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