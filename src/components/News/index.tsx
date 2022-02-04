import { MainNewsContainer } from "./styled";
import SmallNewsContainer from "./SmallNewsContainer";
import BigNewsContainer from "./BigNewsContainer";
import SideNews from "./SideNews";

export default function NewsComponent() {
    return (
        <MainNewsContainer>
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
                <SideNews />
            </div>
        </MainNewsContainer>
    )
}