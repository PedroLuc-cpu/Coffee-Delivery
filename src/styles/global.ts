import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Roboto', sans-serif;

}

:focus{
       outline: 0;
}

body{
       -webkit-font-smoothing:antialiased;
}

body,input, textarea, button{
       font-family: 'Roboto', sans-serif;
       font-weight: 400;
       font-size: 1rem;
}

a{
       text-decoration: none;
}
`
