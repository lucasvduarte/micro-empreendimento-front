import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .MuiInputBase-formControl {
    border-radius: 10px;
  }

  div.Mui-disabled {
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px;
  }

  .MuiSelect-selectMenu.Mui-disabled {
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.38);
  }

  .MuiFormControlLabel-label {
    font-weight: bold;
  }

`;

/*
Header(em azul): Product Sans
Menu(ícones peguei da net): Poppins
Conteúdo das telas: Product Sans

*/