import styled from "styled-components";

export const Container = styled.div`
    margin: 70px auto;
    display: flex;
    height: 50px;
    width: 87.85%;
    justify-content: space-between;
    position: relative;
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
        border-bottom: 1px solid #FFF;
        justify-content: space-between;
        align-items: center;

    }
    .item-container-small {
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
        left: 43.5%;
        width: 200px;
    }
}
`