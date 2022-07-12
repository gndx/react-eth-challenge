import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 140px;
  width: 140px;
  position: absolute;
  left: 27px;
  bottom: -45px;
`;

export const Div = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #23263a;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  margin-bottom: 60px;
`;
