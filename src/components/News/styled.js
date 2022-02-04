import styled from "styled-components";

export const MainNewsContainer = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;

    .main-news {
        display: flex;
        flex-direction: column;
        flex: 2;
        margin-right: 2.5em;
    }
    .main-item {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        flex: 2;
    }
    .side-news {
        margin-top: 40px;
        border-left: 1px white solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }
`