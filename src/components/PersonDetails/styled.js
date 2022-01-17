import styled from "styled-components";

export const PersonContainer = styled.div`
    display: flex;
    width: 80%;
    height: 30%;
    background-color: white;
    margin: 0 auto;
    flex-direction: row;

    img {
        width: 23%;
        height: 300px;
        object-fit: cover;
        object-position: center 20%;
    }

    h1 {
        padding: 10% 0 0 30%;
        font-size: 24px;
        font-weight: 600;
        color: black;
    }

    ul {
        padding: 5% 0 0 30%;
    }
    li {
        padding: 1.5px;
        font-size: 14px;
        color: grey;
    }
    `

