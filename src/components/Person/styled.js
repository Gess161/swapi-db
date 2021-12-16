import styled from "styled-components";

export const PersonContainer = styled.div`

    display: flex;
    margin: 0 auto;
    padding: 10px;

    div {
        display: flex;
        flex-direction: column;
    }
    p {
        font-size: 22px;
        justify-content: center;
        display: flex;
        padding: 5px;
    }
    img {
        border-radius: 15px;
        display: flex;
    }

    @media(max-width: 400px){
        img {
            width: 100%;
        }
    }
`