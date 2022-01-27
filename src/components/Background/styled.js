import styled from "styled-components";
import deathStar from "../../assets/images/deathStarBg.png"
import darthVader from "../../assets/images/darthVaderBg.png"

export const Stars = styled.div`
    background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index:-10;
    min-height: 100%;
    width: 100%;
    position: relative;
}
`
export const Twinkle = styled.div`
    background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index:-10;
    position: fixed;
    top: 0;
    min-height: 100%;
    width: 100%;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    z-index: -10;
`
export const DeathStar = styled.div`
    height: 50%;
    width: 50%;
    background-image: linear-gradient(90deg, rgba(55,55,55,0) 1%, rgba(0,0,0,1) 100%) ,url(${deathStar}) ;
    background-size: cover;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -9;
`
export const DarthVader = styled.div`
    height: 50%;
    width: 50%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(55,55,55,0) 65%), url(${darthVader});
    background-size: cover;
    display: block;
    position: fixed;
    bottom: -2%;
    right: -2%;
    z-index: -9;
`