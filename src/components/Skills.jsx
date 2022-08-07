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
  width: 100%;
  & a {
    text-decoration: none;
  }
`

const Skills = () => {
  return (
    <Wrapper>
      <h1>
        Skills
      </h1>
      <DescriptionWrapper>
        
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Skills }