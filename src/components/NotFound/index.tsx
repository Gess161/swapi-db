import notFoundImage from "../../assets/images/404.svg"
import { NotFoundContainer } from "./styled"

export default function NotFoundComponent() {
    return (
        <NotFoundContainer>
            <img src={notFoundImage} />
            <p>It seems like the page you searching was destroyed by this thing above...</p>
        </NotFoundContainer>

    )
}