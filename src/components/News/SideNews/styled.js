import styled from "styled-components";

export const StyledSideNews = styled.div`
    width: 100%;
    padding: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1000px){
        padding: 0; 
        flex-direction: row;
        flex-wrap: wrap;
    }
`