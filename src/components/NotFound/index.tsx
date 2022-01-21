import { Link } from "react-router-dom"
import { NotFoundContainer } from "./styled"
import notFoundImage from "../../assets/images/404.svg"

export default function NotFoundComponent() {
    return (
        <NotFoundContainer >
            <img src={notFoundImage} alt="not found" />
            <p>It seems like the page you searching was destroyed by this thing above...</p>
            <Link className="return" to="/">Return to Homepage</Link>
        </NotFoundContainer>

    )
}