import styled from "styled-components"

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 10px 10px 20px 10px;
    .nav {
        display: flex;
        height: 100%;
        color: skyblue;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.4rem;
        text-decoration: none;
        &:hover{
            text-shadow: skyblue 1px 0 5px;
        }
    }
    .nav-last {
        display: flex;
        height: 100%;   
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.4rem;
        color: white;
        text-decoration: none;
        &:hover{
            text-shadow: white 1px 0 3px;
        }
    }

`