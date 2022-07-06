/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  float: left;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  padding: 10px;
  padding-right: 30px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;

export const Text = styled.div`
  float: "left"
`;

export const HeaderStyle = styled.div`
  background-color: lightblue;
`;
