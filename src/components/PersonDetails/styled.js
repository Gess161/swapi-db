import styled from "styled-components";

export const PersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    .info {
        width: 100%;
        height: 30%;
        background-color: white;
        margin: 5px auto;
        flex-direction: row;
        border-radius: 2px;
        display: flex;
    }

    .person {
        width: 23%;
        height: 300px;
        object-fit: cover;
        object-position: center 20%;
        @media(max-width: 800px){
            width: 35%;
        }
    }

    h1 {
        font-size: 24px;
        font-weight: 600;
        color: black;
        padding: 20px;
    }

    ul {
        padding: 10px 20px 20px 20px;
    }
    li {
        padding: 1.5px;
        font-size: 14px;
        color: grey;
    }
    `

