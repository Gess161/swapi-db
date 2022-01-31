import { createGlobalStyle } from "styled-components";
import dinBold from "../assets/fonts/DIN-Bold.ttf"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .react-card-flip {
        width: 100%;
        height: 100%;
    }
    li {
        list-style-type: none;
        white-space: nowrap;
    }

    .block {
        width: 100%;
        height: 100%;
        display: flex;
        padding-left: 5px;
    }
    
    .logo {
        margin: 20px auto;
        padding: 30px;
        width: 45%;
        display: flex;
        @media(max-width: 800px) {
            padding: 20px;
            width: 65%;
        }
        @media(max-width: 400px) {
            padding: 10px;
            width: 65%;
        }
        &-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }
    }

    body {
        color: #FFF;
        height: fit-content;
        font-family: 'Poppins', sans-serif;
    }

    // background animation
    @keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    @-webkit-keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    @-moz-keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }

    @font-face {
        font-family: "DIN-Cond Bold" ;
        src: url(${dinBold})
}
`

export default GlobalStyles;