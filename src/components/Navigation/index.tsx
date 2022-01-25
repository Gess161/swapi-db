import { Link } from "react-router-dom"
import { NavigationContainer } from "./styled"

interface INavigation {
    title?: string,
    person?: string,
    isFilm?: boolean
}

export default function Navigation(props: INavigation) {
    const { title, person, isFilm } = props;

    return (
        <NavigationContainer className="block">
            <Link className="nav" to="/">Home</Link>
            <p className="nav-last">/</p>
            <Link className={title || person ? "nav" : "nav-last"} to={isFilm ? "/films" : "/people"}> {isFilm ? "Films" : "People"}</Link>
            <p className="nav-last">/{title ? title : person}</p>
        </NavigationContainer>
    )
}