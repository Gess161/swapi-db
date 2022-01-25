import { Container } from "./styled";
import PeopleItem from "../PeopleItem";
import { Loading } from "../Loading";
import AboutFilm from "./AboutFilm/index";
import PeopleContainer from "../People/styled";
import { FilmType } from "../../types";
import { NavigateFunction } from "react-router-dom";
import logo from "../../assets/images/logo.png"

interface IPerson {
    name: string,
    id: string,
    image: string,
}

interface IFilmDetails {
    films: FilmType[],
    people: IPerson[],
    episode: number,
    navigate: NavigateFunction,
}

export default function FilmDetailsComponent(props: IFilmDetails) {
    const { episode, films, people, navigate } = props
    return (
        <Container>
            <img className="logo" alt="logo" src={logo} />
            {films.length > 0 ?
                <AboutFilm
                    episode={episode}
                    film={films[episode - 1]}
                /> : null}
            <PeopleContainer className="people">
                {people.length > 0 ? Object.values(people).map((person) => {
                    return (
                        <PeopleItem navigate={navigate} key={person.name} name={person.name} id={person.id} image={person.image} />
                    )
                }) : <Loading data-testid="loader" />}
            </PeopleContainer>
        </Container>
    )
}