import NewsComponent from "../../components/News";
import { NewsContainer } from "./styled";

export default function News() {
    return (
        <NewsContainer>
            <h1>News</h1>
            <NewsComponent />
        </NewsContainer>
    )
}