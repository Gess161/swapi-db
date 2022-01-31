import styled from "styled-components";

export const Loading = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    display: flex;
    width: 100px;
    height: 100px;
    :after {
        content: " ";
        display: flex;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        opacity: 0.5;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`