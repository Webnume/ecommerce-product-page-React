import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-size: 16px;
    margin: 0 auto;
    padding: 0;
    background: hsl(0, 0%, 100%);
    font-family: 'Kumbh Sans', sans-serif;
  };
  ${'' /* *{
    border: 1px solid red;
  }; */}
`;

export default GlobalStyle;
