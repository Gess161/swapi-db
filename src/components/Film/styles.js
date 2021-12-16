import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 40%;
    height: 60px;
    margin: 5px auto;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid white;

    @media(max-width: 400px){
        width: 90%;
    }
`