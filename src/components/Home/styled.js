import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 100%;
        justify-content: space-between;
        @media(max-width: 1140px){
            flex-direction: column;
            align-items: center;
        }
        .container {
            display: flex;
            height: 100%;
            width: 45%;
            flex-direction: column;
            border-radius: 2px;
            @media(max-width: 1140px){
                width: 100%;
                margin-bottom: 20px;
            }
            p {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.3rem;
                background-color: white;
                width: 100%;
                height: 50px;
            }
        }
        img {
            height: 100%;
            width: 100%;
        }
    }
`