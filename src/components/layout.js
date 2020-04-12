import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { lightTheme, GlobalStyle } from "../themes"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
