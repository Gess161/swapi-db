import styled from "styled-components"
import bg from "../../assets/images/card-bg.svg"

export const FilmCardContainer = styled.div`
    margin: 40px 0 40px 0;
    width: 100%;
    height: calc(18.02vw + (1920px - 100vw) / 3);
    display: flex;
    .film-img {
        display: flex;
        object-fit: cover;
        object-position: 0 25.5%;
        width: 50%;
        height: 100%;
    }
    .info-container {
        position: relative;
        width: 50%;
        height: 100%;
        background: url(${bg});
        background-size: cover;
        &::after {
            position: absolute;
            content: '';
            height: calc(18.02vw + (1920px - 100vw) / 3);
            background-color: hsl(46,100%,49%);
            width: 3px;
            right: 0%;
            bottom: 0%;
        }
    }
    .text-container {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 5%;
        height: 100%;
        .films {
            font-family: "DIN-Cond Bold";
            position: absolute;
            bottom: 10%;
            display: flex;
            justify-self: flex-end;
            width: 100%;
            text-transform: uppercase;
            color: #FDC400;
            cursor: default;
            img {
                width: 2.2%;
                height: 5%;
                margin-right: 5px;
            }
        }
        h1 {
            text-transform: uppercase;
            padding-bottom: 2%;
            font-size: 2em;
        }
        p {
            font-size: 1em;
        }
    }
`