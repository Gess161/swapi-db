import styled from "styled-components"

export const StyledItem = styled.div`
    display: flex;
    width: 100%;
    height: calc(8.2vw + (1920px - 100vw) / 10);
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 1%;
    border-bottom: 1px solid white;
    img {
        display: flex;
        width: 6vw;
        height: 6vw;
        padding-right: 1%;
        @media(max-width: 1000px){
            width: calc(15vw + (1920px - 100vw) / 100);
            height: calc(15vw + (1920px - 100vw) / 100);
        }
    }  
    p {
        padding: 10px;
        display: flex;
        align-items: center;
        flex: 2 250px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        @media(max-width: 1200px) {
            line-height: 18px;
            font-size: 14px;
            padding: 6px;
        }
        
    }
`