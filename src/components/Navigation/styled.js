import styled from "styled-components"

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 60px;
    padding : 20px;
    margin: 10px auto;
    color: white;
    align-items: center;

    img {
        filter: invert(100%) sepia(1%) saturate(6%) hue-rotate(25deg) brightness(120%) contrast(103%);
        padding: 0;
    }

    ul { 
        height: 40px;
        justify-content: space-evenly;
        width: 100%;
        display: flex;
        flex-direction: row;
        color: white;
    }

    li {
        padding: 5px;
        width: 70px;
        border: 1px solid white;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        display: flex;
        text-decoration: none;

        a {
            text-decoration: none;
            color: white;
        }
    }


`