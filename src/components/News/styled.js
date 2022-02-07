import styled from "styled-components";

export const MainNewsContainer = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;
    @media(max-width: 1000px){
        flex-direction: column;
    }

    .main-news {
        display: flex;
        flex-direction: column;
        margin-right: 2.5em;
        width: 60%;
        @media(max-width: 1000px){
            width: 100%;
        }
    }
    .main-item {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
    }
    .side-news {
        margin-top: 40px;
        border-left: 1px white solid;
        display: flex;
        width: 40%;
        @media(max-width: 1000px){
            border-left: none;
            border-top: 1px white solid;
            width: 100%;
        }
    }
`