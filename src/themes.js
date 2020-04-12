import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html,body {
        min-height: 100vh;
        background-color: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: "Comic Neue";
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.4;

        @media (max-width: 700px) {
          font-size: 1.2rem;
        }
    }

    body {
        max-width: 700px;
        margin: 2rem auto;

        @media (max-width: 700px) {
          margin: 2rem;
        }
    }

    h1, h2, h3, h4, h5, h6, h7 {
      font-family: "Roboto";
      color: ${({ theme }) => theme.textLight};
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
`

// https://coolors.co/fbfcff-0f2c4b-12130f-31393c-ffd3e8
export const lightTheme = {
  bg: "#fbfcff",
  text: "#12130f",
  textLight: "#31393c",
  bgDark: "#0f2c4b",
  linkBg: "#ffd3e8",
}

export const darkTheme = {
  bg: "#31393c",
  text: "#fbfcff",
  textLight: "#ffd3e8",
  bgDark: "#0f2c4b",
  linkBg: "#12130f",
}
