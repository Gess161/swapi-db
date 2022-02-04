import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
    display: flex;
    width: 87.85%;
    margin: 0 auto;
    position: relative;
    min-height: 100vh;

    .list {
        display: flex;
        width: 100%;
        margin: 0 auto 10%;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    h2 {
        margin-left: 10px;
        text-transform: uppercase;
        font-size: 3rem;
        font-family: "DIN-Cond Bold"
    }
`
export const StyledSearch = styled.input`
    margin: 32px 0 58px 0;
    width: 100%;
    height: 60px;
    text-transform: uppercase;
    align-items: center;
    border: none;
    outline: none;
    background-color: #282727;
    color: white;
    padding-left: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    ::placeholder {
        color: #707070;
    }

`


export default Container;