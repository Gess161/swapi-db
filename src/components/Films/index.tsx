import { Container } from "./styled";
import { Outlet } from "react-router-dom";
import { FilmType } from "../../types";
import FilmSelector from "../FilmSelector";
import FilmCard from "../FilmCard";
interface IFilms {
    films: FilmType[],
}

export default function FilmsComponent(props: IFilms) {
    const { films } = props;
    return (
        <Container>
            <Outlet />
            <FilmSelector films={films} />
            {films && films.map((film) => <FilmCard key={film.title} episode={film.episode_id} title={film.title} description={film.opening_crawl} />)}
        </Container>
    )
}