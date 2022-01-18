import styled from "styled-components";

export const Stars = styled.div`
    background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index:-1;
    height: 100%;
    width: 100%;
    position: relative;
}
`

export const Twinkle = styled.div`
    background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index:-1;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
`
export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;
    top: 0;
    z-index: -1;
`
