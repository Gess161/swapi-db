import BigNewsContainer from "../../components/News/BigNewsContainer";
import { StyledBigContainer } from "../../components/News/BigNewsContainer/styled";
import SmallNewsContainer from "../../components/News/SmallNewsContainer";
import { NewsContainer } from "./styled";

export default function News() {
    return (
        <NewsContainer>
            <div className="main-news">
                <div className="main-item">
                    <SmallNewsContainer />
                    <SmallNewsContainer />
                </div>
                <div className="main-item">
                    <BigNewsContainer />
                </div>
            </div>
            <div className="side-news">

            </div>
        </NewsContainer>
    )
}