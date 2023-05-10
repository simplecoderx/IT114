import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com');
  @import url('https://fonts.gstatic.com');
  @import url('https://fonts.googleapis.com/css2?family=Alkatra:wght@500&family=Quicksand:wght@500&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
