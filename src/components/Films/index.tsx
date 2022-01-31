import { Container } from "./styled";
import FilmComponent from "../Film";
import { NavigateFunction } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Loading } from "../Loading";
import logo from "../../assets/images/logo.png"
import Navigation from "../Navigation";
import { FilmType } from "../../types";
import FilmSelector from "../FilmSelector";
import FilmCard from "../FilmCard";
interface IFilms {
    navigate: NavigateFunction,
    films: FilmType[],
}

export default function FilmsComponent(props: IFilms) {
    const { films, navigate } = props;

    return (
        <Container>
            <Outlet />
            <FilmSelector />
            <FilmCard />
        </Container>
    )
}