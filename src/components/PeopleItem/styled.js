import styled from "styled-components";

export const PersonContainer = styled.div`
    display: flex;
    width: 25%;
    height: 32vw;
    justify-content: center;
    padding: 5px;

    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    p {
        color: grey;
        font-size: 1rem;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
        height: 15%;
        width: 100%
        border-radius: 0 0 2px 2px;
    }
    img {
        border-radius: 2px 2px 0 0;
        object-fit: fill;
        height: 75%;
        display: flex;
    }
    @media(max-width: 800px){
        width: 33%;
        height: 60vw;
        p {
            font-size: 1rem;
        }
        img {
            width: 100%;
        }
    }

    @media(max-width: 450px){
        width: 50%;
        height: 80vw;
        p {
            font-size: 0.65rem;
        }
        img {
            width: 100%;
        }
    }
`