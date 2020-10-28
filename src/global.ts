import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle;
