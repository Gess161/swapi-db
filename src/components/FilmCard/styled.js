import styled from "styled-components"
import bg from "../../assets/images/card-bg.svg"

export const FilmCardContainer = styled.div`
    margin: 40px 0 40px 0;
    width: 100%;
    height: 18.02vw;
    display: flex;
    .film-img {
        display: flex;
        object-fit: cover;
        width: 50%;
        height: 100%;
    }
    .info-container {
        position: relative;
        width: 50%;
        height: 100%;
        background: url(${bg});
        background-size: cover;
        &::before {
            position: absolute;
            content: '';
            height: 3px;
            background-color: hsl(46,100%,49%);
            width: 18.02vw;
            transform: rotate(90deg);
            right: -20.5%;
            top: 49%;
        }
    }
    .text-container {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 5%;
        color: #FFF;
        .films {
            position: absolute;
            bottom: -10%;
            display: flex;
            justify-self: flex-end;
            width: 100%;
            align-items: center;
            text-transform: uppercase;
            color: #FDC400;
            cursor: pointer;
            img {
                width: 2%;
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