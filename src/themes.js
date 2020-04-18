import { createGlobalStyle } from "styled-components"

export const fonts = {
  primary: "Gotu",
  secondary: "Source Serif Pro",
}

export const GlobalStyle = createGlobalStyle`
    html,body {
        min-height: 100vh;
        background-color: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 
        ${fonts.primary};
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.4;

        @media (max-width: 700px) {
          font-size: 1rem;
        }
    }

    body {
        max-width: 700px;
        margin: 2rem auto;

        @media (max-width: 700px) {
          margin: 1rem;
        }
    }

    h1, h2, h3, h4, h5, h6, h7 {
      font-family: ${fonts.secondary};
      color: ${({ theme }) => theme.textLight};
      font-weight: 400;
    }

    a {
      background-color: ${({ theme }) => theme.linkBg};
      border-radius: .2rem;
      padding-left: .5rem;
      padding-right: .5rem;
      color: ${({ theme }) => theme.text};
      text-decoration: none;

      &:hover, &:active {
        color: ${({ theme }) => theme.textLight}
      }
    }

    code[class*="language-"], pre[class*="language-"] {
      font-size: .9rem;
    }

    blockquote {
      border: 1px solid ${({ theme }) => theme.bgDark};
      box-shadow: 0px 0px 10px -3px ${({ theme }) => theme.boxShadow};
      padding: 0 .8rem;
      margin-left: .8rem;
      margin-right: .8rem;
    }
    
    pre {
      border: 1px solid ${({ theme }) => theme.borderColor};
    }
`

// https://coolors.co/fbfcff-0f2c4b-12130f-31393c-ffd3e8
export const lightTheme = {
  bg: "#fbfcff",
  text: "#12130f",
  textLight: "#31393c",
  bgDark: "#0f2c4b",
  borderColor: "#76b4f7",
  linkBg: "#ffd3e8",
  boxShadow: "#31393c22",
}

export const darkTheme = {
  bg: "#31393c",
  text: "#fbfcff",
  textLight: "#ffd3e8",
  bgDark: "#0f2c4b",
  linkBg: "#12130f",
  boxShadow: "#ffd3e822",
}
