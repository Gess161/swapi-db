import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    li {
        list-style-type: none;
        white-space:nowrap;
    }
    
    body {
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        background-color: black;
    }
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
}
`

export default GlobalStyles;