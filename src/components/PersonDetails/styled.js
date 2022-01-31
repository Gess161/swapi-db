import styled from "styled-components";

export const PersonContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #282727;
    .info {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
    }
    .info-item {
        padding: 20px 0 0 20px;
        width: 100%;
        h1 {
            padding: 5px;
            text-transform: uppercase;
            font-size: 1rem;
        }
        p {
            position: relative;
            padding: 5px;
            font-size: 0.9rem;
            color: gold;
            &:after {
                content: '';
                position: absolute;
                bottom: -13px;
                left: 5px;
                width: 50%;
                height: 1px;
                background: white;
            }
        }
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

