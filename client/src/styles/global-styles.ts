import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  /** 
  * Initilize local fonts
  */
  body {
    margin: 0px;
    padding: 0px;
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
