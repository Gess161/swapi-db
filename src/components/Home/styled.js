import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .body {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 40%;
        justify-content: space-between;
        .container {
            display: flex;
            height: 80%;
            width: 40%;
            flex-direction: column;

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
            width: 100%
        }
    }
`