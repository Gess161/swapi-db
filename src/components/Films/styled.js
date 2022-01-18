import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 30px;

    .logo {
        padding: 30px;
        width: 45%;
        height: 30%;
        display: block;
        &-container {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
        }
    }

    @media(max-width: 800px) {
        padding: 0;
        width: 85%;
        .logo{
            width: 60%;
        }
    }
    @media(max-width: 800px) {
        .logo {
            width: 80%;
        }
    }
`