import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
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
    color: #979797;
  }

  & b {
    color: #FF6D09;
  }
`;
const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`;

function Academic({ Academic }) {
  return (
    <Wrapper>
      <h1 className='Academic-title'>
        Academic
      </h1>
      <DescriptionWrapper>
        <ItemWrapper className='Academic-item'>
          <h3>
            UNIR Mexico | Computer Systems Engineering
          </h3>
          <p><b>May 2022 - Present</b></p>
          <ul>
            <li>
              Fundamentals of computer systems engineering
            </li>
            <li>
              Programming
            </li>
            <li>
              Computer technology
            </li>
            <li>Discret mathematics and algebra</li>
            <li>Physics</li>
          </ul>
        </ItemWrapper>
        <ItemWrapper className='Academic-item'>
          <h3>
            Platzi
          </h3>
          <ul>
            <li>
              Blockchain and cryptocurrencys school. March 2021 - Present
            </li>
            <li>
              Javascript School. March 2021 - Present
            </li>
            <li>
              Node.js backend. July 2021 - present
            </li>
            <li>
              React.js school. January 2022 - present
            </li>
            <li>
              Vue.js school. December 2021 - present
            </li>
          </ul>
        </ItemWrapper>
        <ItemWrapper className='Academic-item'>
          <h3>
            Philosophy and Letters Faculty. UNAM | Philosophy
          </h3>
          <p><b>August 2019 graduated</b></p>
          <ul>
            <li>
              "Seminario de Tecnologías Filosóficas" member
            </li>
            <li>
              "Genealogía digital de la producción de discurso en los trabajos recepcionales de filosofía de la UNAM" member
            </li>
            <li>
              UNAM-DGAPA-PAPIIT IN405517 "Epistemología de la tecnología y el desarrollo del conocimiento científico" member
            </li>
          </ul>
        </ItemWrapper>
        <ItemWrapper className='Academic-item'>
          <h3>
            Microsoft
          </h3>
          <ul>
            <li>
              AZ-900 certified. Azure fundamentals. September 2021
            </li>
          </ul>
          <h3>
            Platzi & Ethereum Foundation
          </h3>
          <ul>
            <li>
              Road to devcon. July 2022 - present
            </li>
          </ul>
        </ItemWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Academic;
