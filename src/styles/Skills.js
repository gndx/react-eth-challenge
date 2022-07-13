import styled, { keyframes } from 'styled-components';
import { FaNodeJs, FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiHtml5, SiCss3 } from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';
import React from 'react';

const IconComponents = {
  node: FaNodeJs,
  javascript: SiJavascript,
  react: FaReact,
  python: FaPython,
  cplusplus: SiCplusplus,
  html5: SiHtml5,
  css: SiCss3,
  default: BsCodeSlash,
};

export const getIconContainer = (iconName = 'default') => {
  let Icon = IconComponents[iconName.toLowerCase()];
  if (Icon === undefined) {
    Icon = IconComponents['default'];
  }
  const IconContainer = styled(Icon)`
    display: block;
    margin: auto;
    font-size: 80px;
    opacity: 0.4;
  `;
  return <IconContainer />;
};

const waveMove = keyframes`
      0% {transform: translateX(0);}
      50% {transform: translateX(-25%);}
      100% {transform: translateX(-50%);}
`;

export const Section = styled.div`
  position: relative;
  margin: 24px 0;
`;

export const SkillsContainer = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  color: #fff;
`;

export const Card = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Frame = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 10px;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: capitalize;
  margin: 12px 0 12px;
`;

export const SkillLevel = styled.div`
  position: absolute;
  top: -19px;
  right: -18px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 50%;
  border: 2px solid;
  border-color: #4fa0ff;
  color: white;
  font-weight: bold;
`;

export const Wave = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v450h800v-.2-31.6z' fill='%234FA0FF'/%3E%3C/svg%3E");
  background-size: contain;
  color: red;
  position: absolute;
  width: 2000%;
  height: ${(props) => props.percentage};
  animation: ${waveMove} 100s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.2;
  bottom: 0;
`;
