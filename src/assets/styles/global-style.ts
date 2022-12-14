import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;        
    }

    html, body, #root {
        height: 100%;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
    }
    
    a {
        text-decoration: none;
        outline: none;
    }
`
export default GlobalStyle;