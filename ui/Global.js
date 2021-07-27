import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit
}

body {
  margin: 0;
  padding: 0;
  font-family: cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`
