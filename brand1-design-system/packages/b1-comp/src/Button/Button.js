import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../Theme/Theme";
import Brand1Button from "./Button.styles";

function Button({ primary, secondary, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Brand1Button primary={primary} secondary={secondary}>
        {children}
      </Brand1Button>
    </ThemeProvider>
  );
}

export default Button;
