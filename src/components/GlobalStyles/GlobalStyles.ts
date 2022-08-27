import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Montserrat',Arial,Helvetica,sans-serif;

    &::selection { 
      color:white;
      background : #f05123;
    }
  }
  html {
    font-size: 62.5%;
    line-height:1.15;
  }
  li{
    list-style:none;
  }
  body{
    font-size : 1.6rem;
  }
`;

export default GlobalStyles;