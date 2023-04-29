import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *::after,
  *::before {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      width: 100%;
      min-height: 100vh;
      background: ${theme.colors.mainBg};
      color: ${theme.colors.gray};
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input {
    font-family: inherit;
  }
`;
