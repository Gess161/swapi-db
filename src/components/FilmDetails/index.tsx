import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { Container } from "./styles";
import getPeopleId from "../../services/getPeopleId";
import fetchPeopleById from "../../services/api/fetchPeopleById";
import getId from "../../services/getId";
import getImageUrl from "../../services/getUrlArray";
import Person from "../Person";
import LoadingComponent from "../Loading";
    
interface PersonInterface {
    name: string,
    id: string,
    image: string,
}

export default function FilmDetailsComponent(props: any) {
    const initialState: PersonInterface[] = [];
    const [people, setPeople] = useState(initialState)
    const film: any = useAppSelector(state => state.rootReducer.filmsReducer.film)
    const { params } = props;
    const filmId = params.filmId
    const { title, opening_crawl, director, producer } = film[filmId];
    const charactersUrlList = film[filmId].characters
    const idList = getPeopleId(charactersUrlList);

    useEffect(() => {
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
    }, [])

    return (
        <Container>
            <h1>{title}</h1>
            <h3>Episode {filmId}</h3>
            <p>{opening_crawl}</p>
            <h4>Director: {director}</h4>
            <h4>Producer: {producer}</h4>
            <h2>Characters:</h2>
            <div className="person-container">
                {people.length > 0 ? Object.values(people).map((person) => {
                    return (
                     <Person key={person.id} name={person.name} id={person.id} image={person.image} />
                    )
                }) : <LoadingComponent /> }
            </div>
        </Container>
    )
}