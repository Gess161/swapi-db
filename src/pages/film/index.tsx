import { useNavigate, useParams } from "react-router-dom";
import * as React from "react"
import FilmDetailsComponent from "../../components/FilmDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FilmType } from "../../types"
import getPeopleId from "../../services/getPeopleId"
import getImageUrl from "../../services/getUrlArray"
import getId from "../../services/getId"
import fetchPeopleById from "../../services/api/fetchPeopleById"
import { fetchFilmsRequest } from "../../redux/actions/filmsActions";

interface IPerson {
    name: string,
    id: string,
    image: string,
}

export default function FilmPage() {
    const initialState: IPerson[] = [];
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [people, setPeople] = React.useState(initialState)
    const films: FilmType[] = useAppSelector(state => state.rootReducer.filmsReducer.films)
    const { filmId } = useParams()

    React.useEffect(() => {
        if (films.length > 0) {
            const charactersUrlList = films[+filmId! - 1].characters
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
            dispatch((fetchFilmsRequest("")))
        }
    }, [films, filmId, dispatch])

    return (
        <FilmDetailsComponent
            films={films}
            people={people}
            episode={+filmId!}
            navigate={navigate}
        />
    )
}