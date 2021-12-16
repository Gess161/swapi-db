import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Container } from "./styled";
import getPeopleId from "../../services/getPeopleId";
import fetchPeopleById from "../../services/api/fetchPeopleById";
import getId from "../../services/getId";
import getImageUrl from "../../services/getUrlArray";
import Person from "../Person";
import LoadingComponent from "../Loading";
import { fetchFilmsRequest } from "../../redux/actions/filmsActions";
import AboutFilm from "./AboutFilm/index";
import { FilmType } from "../../types";
import PeopleContainer from "../People/styled";
import { useNavigate } from "react-router-dom";
interface PersonInterface {
    name: string,
    id: string,
    image: string,
}

export default function FilmDetailsComponent(props: any) {
    const initialState: PersonInterface[] = [];
    const dispatch = useAppDispatch()
    const [people, setPeople] = useState(initialState)
    const films: FilmType[] = useAppSelector(state => state.rootReducer.filmsReducer.films)
    const navigate = useNavigate()
    const { filmId } = props.params;

    useEffect(() => {
        if(filmId <= 0 || filmId > films.length){
            navigate(`/404`)
        }
        if (films.length > 0) {
            const charactersUrlList = films[filmId - 1].characters
            const idList = getPeopleId(charactersUrlList);
            (async () => {
                const response = await fetchPeopleById(idList)
                const peopleList = response.map(({ name, url }) => {
                    const id = getId(url);
                    const image = getImageUrl(id)
                    return {
                        id,
                        name,
                        image
                    }
                })
                setPeople(peopleList)
            })()
        } else {
            dispatch((fetchFilmsRequest('')))
        }
        // eslint-disable-next-line
    }, [films, filmId])

    return (
        <Container>
            {films.length > 0 ?
                <AboutFilm
                    filmId={filmId}
                    film={films[filmId - 1]}
                /> : null}
            <PeopleContainer>
                {people.length > 0 ? Object.values(people).map((person) => {
                    return (
                        <Person key={person.id} name={person.name} id={person.id} image={person.image} />
                    )
                }) : <LoadingComponent />}
            </PeopleContainer>
        </Container>
    )
}