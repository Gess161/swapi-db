import styled from "styled-components";

export const PersonContainer = styled.div`
    display: flex;
    width: 21.5%;
    height: 28vw;
    justify-content: center;
    margin: 10px;
    position: relative;
 
    .flipper {
        height: 100%;
        width: 100%;
    }
    .person {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .name {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #282727;
        height: 100%;
        width: 100%;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: hsl(46,100%,49%);
            top: 0;
        }
    }
    img {
        object-fit: fill;
        height: 80%;
        width: 100%;
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