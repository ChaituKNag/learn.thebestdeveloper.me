import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { lightTheme, fonts } from "./themes"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightTheme.bgDark,
      light: lightTheme.textLight,
      contrastText: lightTheme.bg,
    },
    secondary: {
      main: lightTheme.linkBg,
      contrastText: lightTheme.text,
    },
  },
  typography: {
    fontFamily: fonts.primary,
  },
  breakpoints: {
    sm: "700px",
  },
})

export const MaterialTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
