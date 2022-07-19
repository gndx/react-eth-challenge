import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Academic = ({ certificate, academic }) => {
  return (
    <AcademicWrapper>
      <h2 className="Academic-title">What I know</h2>
      <AcademicCategories>
        <div>
          <CategoryTitle>
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Academic</h3>
          </CategoryTitle>
          {academic.map((item, idx) => (
            <div className="Academic-item" key={idx}>
              <span>
                <h3>{item.degree}</h3>
                -
                <h4>{item.institution}</h4>  
              </span>
              <DateContainer>
                <small>{item.startDate}</small><p>-</p><small>{item.endDate}</small>
              </DateContainer>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div>
          <CategoryTitle>
            <FontAwesomeIcon icon={faGlasses} />
            <h3>Certificates</h3>
          </CategoryTitle>
          {certificate.map((item, idx) => (
            <div className="Academic-item" key={idx}>
              <h4>{item.institution}</h4>
              <h4>{item.date}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </AcademicCategories>
    </AcademicWrapper>
  );
};

const AcademicWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0 20px 20px;
  margin: 0 20px 20px;

  .Academic-title {
    color: #1f1f1f;
  }
`;

const AcademicCategories = styled.div`
  display: grid;
  grid-template-columns: 2, 1fr;

  .Academic-item {
    padding: 20px;
    span {
        display: inline;

        h3 {
          display: inline;
        }

        h4 {
          display: inline;
        }
  }
  
  div:first-child {
    grid-column: 1/2;
    .Academic-item div {
      display: flex;
      flex-direction: row;
      }
    }
  }
    
  div:last-child {
    grid-column: 2/2;

    .Academic-item h4 {
      margin-top: 0;
      display: inline;
      margin-right: 20px;
    }

    .Academic-item div {
      display: flex;
      flex-direction: row;
    }
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    padding-left: 10px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 60%;
  height: 25px;
  align-items: center;
  justify-content: start;

  small {
    margin-right: 10px;
  }
  p {
    margin-right: 10px;
  }
`;

export default Academic;
