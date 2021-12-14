import { useEffect, useState, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Container } from "./styles";
import getPeopleId from "../../services/getPeopleId";
import fetchPeopleById from "../../services/api/fetchPeopleById";
import getId from "../../services/getId";
import getImageUrl from "../../services/getUrlArray";
import Person from "../Person";
import { PersonContainer } from "../Person/styled";
import LoadingComponent from "../Loading";
import { fetchFilmsRequest } from "../../redux/actions/filmsActions";
import AboutFilm from "./AboutFilm";
interface PersonInterface {
    name: string,
    id: string,
    image: string,
}

export default function FilmDetailsComponent(props: any) {
    const initialState: PersonInterface[] = [];
    const dispatch = useAppDispatch()
    const [people, setPeople] = useState(initialState)
    const film: any = useAppSelector(state => state.rootReducer.filmsReducer.film)
    const { filmId } = props.params;

    useEffect(() => {
        if (Object.keys(film).length === 0) {
            dispatch(fetchFilmsRequest(''))
        }
        // eslint-disable-next-line
    }, [film])

    useEffect(() => {
        const charactersUrlList = film[filmId].characters
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
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <AboutFilm
                filmId={filmId}
                film={film}
            />
            <Suspense fallback={<LoadingComponent />}>
                <PersonContainer>
                    {people.length > 0 ? Object.values(people).map((person) => {
                        return (
                            <Person key={person.id} name={person.name} id={person.id} image={person.image} />
                        )
                    }) : <LoadingComponent />}
                </PersonContainer>
            </Suspense>
        </Container>
    )
}