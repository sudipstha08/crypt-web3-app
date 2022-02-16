import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  /** 
  * Initilize local fonts
  */
  @font-face {
    font-family: "yugothic";
    src: url("/assets/fonts/yugothib.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "yugothic-regular";
    src: url("/assets/fonts/YuGothM.ttc");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: "yugothic", sans-serif;
  }

  @font-face {
    font-family: "Quickpen";
    src: url("/assets/fonts/Quickpen.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  p, h1, h2, h3, h4 {
    margin-bottom: 0;
  }
  h1, h2, h3, h4 {
    margin-bottom: 0px;
  }
  p{
    margin: 0px;
  }
  
  button { 
    cursor: pointer;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
