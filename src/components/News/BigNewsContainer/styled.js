import styled from "styled-components";
import bigBg from "../../../assets/images/news-bg-big.svg"

export const StyledBigContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 22vw;
    width: 100%;
    @media(max-width: 1000px){
        height: calc(30vw + (1920px - 100vw)/ 15);
    }
    img {
        display: flex;
        width: 100%;
        height: 65%;
    }

    .text {
        justify-content: space-around;
        width: 100%;
        height: 35%;
        background: url(${bigBg});
        background-size: cover;
        display: flex;
        flex-direction: column;
        padding: 2%;
        position: relative;
        :after {
            content: '';
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            height: 3px;
            background-color: gold;
        }
    }
    h2 {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    .more {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.75rem;
        text-transform: uppercase;
        font-family: "DIN-Cond Bold";
        img {
            height: 8px;
            width: 11px;
            margin-left: 8px;
        }
    }
`