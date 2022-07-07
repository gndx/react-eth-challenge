import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

#app {
  width: 100%;
  height: auto;
  min-height: 100vh;
  min-width: 390px;
}

`;
export default GlobalStyle;
