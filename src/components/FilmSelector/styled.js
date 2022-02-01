import styled from "styled-components"

export const FilmSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .selector-container {
        display: flex;
        height: 60px;
        width: 100%;
        background: rgba(40, 39, 39, 1);
        position: relative;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
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
}
`
export const StyledSelectorItem = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 37px;
    align-items: center;
    &:hover {
        color: gold;
        background-color: rgba(253, 196, 0, 0.2);
    }
`

export const StyledSelectorList = styled.div`
    animation: fade 0.2s;
    background: rgba(40, 39, 39, 1);
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    @keyframes fade {
        from { opacity: 0;}
        to { opacity: 1; }
    }
`