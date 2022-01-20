import { Link } from "react-router-dom"
import { NavigationContainer } from "./styled"

export default function Navigation(props: any) {
    const { title, person, isFilm } = props;

    return (
        <NavigationContainer>
            <Link className="nav" to="/">Home</Link>
            <p className="nav-last">/</p>
            <Link className={title || person ? "nav" : "nav-last"} to={isFilm ? "/films" : "/people"}> {isFilm ? "Films" : "People"}</Link>
            <p className="nav-last"> /{title ? title : person}</p>
        </NavigationContainer>
    )
}