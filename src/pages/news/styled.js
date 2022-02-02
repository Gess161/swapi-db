import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 87.75vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    .main-news {
        display: flex;
        flex-direction: column;
        flex: 2;
        margin-right: 2.5rem;
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
        flex-direction: column;
        flex: 1;
    }
`