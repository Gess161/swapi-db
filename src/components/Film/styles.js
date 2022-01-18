import styled from "styled-components"

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    width: 30%;
    height: 100%;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 2px;

    img {
        display: flex;
        height: 75%;
        width: 100%;
        border-radius: 2px 2px 0 0;
    }
    p {
        color: grey;
        font-size: 0.85rem;
        padding: 5vw;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
        height: 25%;
        width: 100%
        border-radius: 0 0 2px 2px;
    }

    @media(max-width: 800px){
        width: 45%;
        height: 100%;
    }
    @media(max-width: 400px){
        width: 90%;
    }

`