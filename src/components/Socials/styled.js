import styled from "styled-components";

export const SocialsContainer = styled.div`
    width: 16.7%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    left: 42%;
    h1 {
        justify-content: center;
        text-transform: uppercase;
        display: flex;
        font-size: 1.5rem;
        color: white;
        font-family: "DIN-Cond Bold";
        width: 90%;
        margin: 10px auto;
        white-space: nowrap;
    }
    .icons-container {
        display: flex;
        justify-content: space-between;
        height: 24px;
    }
`