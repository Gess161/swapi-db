import styled from "styled-components"

export const StyledItem = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    position: relative;
    margin-bottom: 12%;
    :after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: -20%;
        left: 0;
        background-color: white;
    }
    img {
        display: flex;
        flex: 1 100px;
        padding: 10px 10px 10px 0;
    }
    
    p {
        padding: 10px;
        display: flex;
        align-items: center;
        flex: 2 250px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
    }
`