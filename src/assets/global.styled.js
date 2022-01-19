import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
        white-space:nowrap;
    }
    .block {
        width: 100%;
        height: 100%;
        display: block;
        padding-left: 5px;
    }
    
    .logo {
        margin: 20px auto;
        padding: 30px;
        width: 45%;
        display: flex;
        &-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }
    }

    body {
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        background-color: black;
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

}
`

export default GlobalStyles;