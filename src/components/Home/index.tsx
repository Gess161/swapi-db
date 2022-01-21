import { Container } from "./styled";
import logo from "../../assets/images/logo.png"
import { NavigateFunction } from "react-router-dom";

interface IHome {
    navigate: NavigateFunction,
}

export default function HomeComponent(props: IHome) {
    const { navigate } = props;
    return (
        <Container>
            <div className="logo-container">
                <img className="logo" alt="logo" src={logo} />
            </div>
            <div className="home">
                <div className="container" onClick={() => navigate("/people")}>
                    <img alt="characters" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" />
                    <p>
                        Characters
                    </p>
                </div>
                <div className="container" onClick={() => navigate("/films")}>
                    <img alt="films" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" />
                    <p>
                        Films
                    </p>
                </div>
            </div>
        </Container>
    )
}