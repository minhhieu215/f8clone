import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-size : 1.6rem;
  }
`;

export default GlobalStyles;