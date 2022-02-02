import { StyledSmallContainer } from "./styled";
import smallNews from '../../../assets/images/newsimg-s 32.png'
import arrow from '../../../assets/images/readMoreArr.svg'

export default function SmallNewsContainer(){
    return (
        <StyledSmallContainer>
            <img  src={smallNews} alt='news'></img>
            <div className="text">
                <h2>ABC NEWS FEATURES EXPLORES “THE FORCE OF SOUND”</h2>
                <p className="more">Read more 
                    <img src={arrow} alt="read more arrow" />
                </p>
            </div>
        </StyledSmallContainer>
    )
}