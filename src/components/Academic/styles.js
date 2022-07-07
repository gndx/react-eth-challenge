/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AcademicStyle = styled.div`
  background-color: #cde9ee;
  box-shadow: 0px 14px 18px rgba(0, 0, 0, .2);
  border-radius: 15px;
  padding: 5px;
  width: 49.3%;
  float: left;
`;

export const Item = styled.ul`
  padding: 0 8px;
`;

export const AcademicItemTitle = styled.h3`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  & svg {
    margin-right: 4px;
  }
`;

export const AcademicItemDate = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 30px;
  & svg {
    margin-right: 4px;
  }
`;
