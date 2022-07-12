import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button,body {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  body {
    background: #1F2235;
    height: 100vh;
    color:white
  }

  body::-webkit-scrollbar {
    display: none; 
  }

  #app {
    overflow-x: hidden;
    padding: 32px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #23263a;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  margin-bottom: 24px;
  align-items: center;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
`;

export const ProfileP = styled.p`
  margin-bottom: 8px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
