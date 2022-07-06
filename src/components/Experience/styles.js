/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Text = styled.div`
  float: "top-left"
`;

export const ExperienceStyle = styled.div`
  background-color: #cde9ee;
  box-shadow: 0px 14px 18px rgba(0, 0, 0, .2);
  border-radius: 15px;
  padding: 5px;
`;

export const Item = styled.ul`
  padding: 0 8px;
`;

export const ExperienceItemTitle = styled.h3`
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

export const ExperienceItemDate = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 30px;
  & svg {
    margin-right: 4px;
  }
`;
