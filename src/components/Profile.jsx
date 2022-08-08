import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  justify-content: center;
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

const Profile = ({ Profile }) => {
  return (
    <Wrapper>
      <h1>
        Profile
      </h1>
      <DescriptionWrapper>
        <p>
          Computer Systems Engineer student at UNIR México. Philosopher graduated by UNAM.
        </p>
        <p>
          I have some job experience as web developer using technolgies as React.js and Vue.js as Javascript frameworks, Sequelize as ORM, Express.js as server based in API Rest architecture and PostgreSQL as database.
          I'm pretty interesed in NLP using AI based on Python and decentrilized technologies just as blockchain. I'm foused in Ethereum as main blockchain for all my development activities but I first met Bitcoin and it blowed my mind. Also I would like to know better Polkadot as a future environment for blockchain development.
        </p>
        <p>
          I think that almost everything in our lives has a philosophical background and it's important to all of us do a little research about it. The main reason is because philosophy help us to visibilize invisible problems that we were not aware of them and put a name on them.
          Also I think that my professional education as Computer System Engineer is very important here because is the other side of the coin: create software solutions to the problems we were not aware of.   
        </p>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default Profile