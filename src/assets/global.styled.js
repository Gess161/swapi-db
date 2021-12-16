import { createGlobalStyle } from "styled-components";

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
        background: ${backgroundColor};
        background-image: url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnJ5JTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80);
        font-family: 'Roboto', sans-serif;
        color: white;
    }
`

export default GlobalStyles;