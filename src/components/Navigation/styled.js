import styled from "styled-components"

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 1400px;
    height: 100px;
    max-width: 100%;
    padding : 5px 20px;
    margin: 0 auto;
    color: white;

    img {
        filter: invert(100%) sepia(1%) saturate(6%) hue-rotate(25deg) brightness(103%) contrast(103%);
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