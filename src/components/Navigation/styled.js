import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    position: relative;
    justify-content: center;
    margin: 70px 0;
    nav {
        position: absolute;
        height: 100%;
        width: 87.75vw;
        display: flex;
        justify-content: space-between;
        @media(max-width: 700px){
            top: 100%;
        }
    }
    .item {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        color: #FFF;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        &:hover {
            color: hsl(46,100%,49%);
        }
    }
    .item-container {
        position: relative;
        display: flex;
        width: 22%;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #FFF;
        @media(max-width: 1000px){
            width: 0;
        }
    }
    .item-container-small {
        @media(max-width: 1000px){
            width: 33%;
            border-bottom: 1px solid #FFF;
        }
        @media(max-width: 700px){
            width: 45%;
        }
        &:after, &:before {
            position: absolute;
            content: '';
            height: 1px;
            width: 40px;
            background-color: #FFF;
            transform: rotate(90deg);
            right: -12%;
            z-index: 1;
        }
        &:before {
            left: -12%;
            right: 0;
        }
    }
    input {
        width: 100%;
        padding-left: 10px;
        border: none;
        outline: none;
        background-color:rgba(0, 0, 0, 0.1);
        ::placeholder {
            color: #FFF;
        }
    }
    img {
        display: flex;
        position: absolute;
        margin: 0 auto;
        top: -110%;
        left: calc(50% - 100px);
        width: 200px;
    }
}
`