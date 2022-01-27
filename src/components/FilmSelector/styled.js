import styled from "styled-components"

export const FilmSelectorContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    background: rgba(40, 39, 39, 1);
    position: relative;
    align-items: center;
    justify-content: space-between;

    h1 {
        padding-left: 37px;
        display: flex;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #707070;
        text-transform: uppercase;
    }

    img {
        margin-right: 37px;
        display: flex;
        width: 15px;
        height: 9px;
    }
`