import { StyledBigContainer } from "./styled";
import newsImage from "../../../assets/images/newsimg-b 31.png"
import arrow from "../../../assets/images/readMoreArr.svg"

export default function BigNewsContainer() {
    return (
        <StyledBigContainer>
            <img src={newsImage} alt='news'></img>
            <div className="text">
                <h2>ABC NEWS FEATURES EXPLORES “THE FORCE OF SOUND”</h2>
                <p className="more">Read more
                    <img src={arrow} alt="read more arrow" />
                </p>
            </div>
        </StyledBigContainer>
    )
}