import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0px;
    font-family: 'Roboto', 'Poppins', sans-serif;
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

  .MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1 {
    color: #2B6CB0;
  }

  .MuiSwitch-track {
    border-style: solid;
    border-width: 0.1px;
    border-color:rgba(0,0,0,0.3);
  }

  .MuiInputAdornment-root.MuiInputAdornment-positionEnd button {
    padding: 0px;
  }

  #input-date.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd {
    padding: 10px 0px 10px 10px;
  }

  #input-date.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd {
    padding-right: 6px;
  }

  #input-date-label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-outlined {
    margin-top:-8px;
  }

  #input-date-label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-outlined.Mui-focused , #input-date-label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-outlined.MuiFormLabel-filled {
    margin-top:0px;
  }
  
  #select-month.MuiSelect-root.MuiSelect-root.MuiSelect-select.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-selectMenu.MuiInputBase-input.MuiOutlinedInput-input {
    padding: 10px 14px;
    border-radius: 12px;
  }
`;
