import { Link } from "react-router-dom"
import { NavigationContainer } from "./styled"

export default function Navigation(props: any) {
    const { title, person, id } = props;

    return (
        <NavigationContainer>
            <Link className="nav" to="/">Home</Link>
            <p className="nav-last">/</p>
            <Link className="nav" to={title ? "/films" : "/people"}> {title ? "Films" : "People"}</Link>
            <p className="nav-last"> /{title ? title : person}</p>
        </NavigationContainer>
    )
}