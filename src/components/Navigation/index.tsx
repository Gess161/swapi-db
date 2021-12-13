import { Link } from "react-router-dom"
import { NavigationContainer } from "./styled"
import image from "../../assets/icons/lightSide.svg"

export default function Navigation() {
    return (
        <NavigationContainer>
            <ul>
                <img alt="dark or light side"src={image}></img>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/films">Films</Link>
                </li>
                <li>
                    <Link to="/people">People</Link>
                </li>
            </ul>
        </NavigationContainer>
    )
}