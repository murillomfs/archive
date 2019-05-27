import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  body {
      font-family: 'Raleway', sans-serif;
      font-size: 14px;
      background: #fff;
      color: #fff;
      /* 
        colors: 
        #54d9be light-blue
        #fa786b light-orange 
      */
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
      height: 100%;
  }

  a { text-decoration: none; }
`;
