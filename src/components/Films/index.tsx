import { Container } from "./styled";
import FilmComponent from "../Film";
import { NavigateFunction } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Loading } from "../Loading";
import logo from "../../assets/images/logo.png"
import Navigation from "../Navigation";
import { FilmType } from "../../types";

interface IFilms {
    navigate: NavigateFunction,
    films: FilmType[],
}

export default function FilmsComponent(props: IFilms) {
    const { films, navigate } = props;

    return (
        <Container>
            <img className="logo" alt="logo" src={logo} />
            <Navigation isFilm={true} />
            {films.length > 0 ? films.map((film: FilmType) => {
                return <FilmComponent
                    navigate={navigate}
                    episode={film.episode_id}
                    key={film.title}
                    title={film.title}
                />
            }) : <Loading data-testid="loader"/>}
            <Outlet />
        </Container>
    )
}