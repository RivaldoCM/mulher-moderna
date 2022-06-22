import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --black: #000000;
        --white: #ffffff;
        --green: #0D9E00;
        --background: #eaeaea;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: 0;
        text-decoration: none;
        list-style-type: none;
    }

    html {
        @media screen {
            @media (max-width: 1000px){
                font-size: 93.75%; // 15px
            }

            @media (max-width: 720px){
                font-size: 87.5%; // 14px
            }
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, texarea, input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{font-weight: 700;}

    button {cursor: pointer;}

    a{color: var(--black)}

    [disable] {opacity: 0.6%; cursor: not-allowed;}

    .center {
        display: flex;
        width: 1080px;
        height: auto;
        margin: 0 auto;
    }

    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`