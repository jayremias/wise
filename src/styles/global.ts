import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #383E71;
    background-color: #FAF5FF;
  }

  button {
    cursor: pointer;
  }
`;
