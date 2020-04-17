import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { lightTheme, GlobalStyle } from "../themes"
import { MaterialTheme } from "../material"

const Layout = ({ children }) => {
  return (
    <MaterialTheme>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </MaterialTheme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
