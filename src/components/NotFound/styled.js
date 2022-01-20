import styled from "styled-components"

export const NotFoundContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        opacity: 0.95;
        display: flex;
        width: 200px;
        height: 200px;
    }
    p { 
        background-color: white;
        margin-top: 10px;
        font-size: 22px;
        display: flex;
        padding: 10px;
    }

    .return {
        &:hover {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
        }
        margin: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        background-color: white;
        text-decoration: none;
        color: black;
        height: 50px;
        border-radius: 4px;
        cursor: pointer;
    }
`