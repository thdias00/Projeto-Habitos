import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

:root {
    --white: #f5f5f5;
    --black: #0C0D0D;
    --green: #458E82;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--black);
    background-color: var(--white);
    overflow-x: hidden;
  }
`;