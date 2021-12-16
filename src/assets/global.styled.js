import { createGlobalStyle } from "styled-components";
import bgDark from "../assets/images/dark-bg.png"
import bgLight from "../assets/images/light-bg.png"

const backgroundColor = "#0F0F0E"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }
    
    body {
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        background: ${backgroundColor};
        font-family: 'Roboto', sans-serif;
        color: white;
        position: relative;
        &:before{
            content: '';
            display: flex;
            width: 100vw;
            height: 100%;
            background: url(${bgLight});
            background-size: cover;
            z-index: -1;
            opacity: 0.5;
            position: absolute;
        }
    }
`

export default GlobalStyles;