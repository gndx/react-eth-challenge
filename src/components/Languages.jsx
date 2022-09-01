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
`;

const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
  width: 20rem;
`;
function Languages({ props }) {
  return (
    <div>
      {
        props ? (
          <Wrapper>
            <h3 className='Languages-title'>Languages</h3>
            <DescriptionWrapper>
              <ItemWrapper>
                <ul>
                  {
                    props.data.languages.map((language) => {
                      return (
                        <li className='Languages-item' key={language.name}>
                          {language.name} - {language.percentage}
                        </li>
                      );
                    })
                  }
                </ul>
              </ItemWrapper>
            </DescriptionWrapper>
          </Wrapper>
        ) : null
      }
    </div>
  );
};

export default Languages;
