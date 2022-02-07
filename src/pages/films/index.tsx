import FilmsComponent from "../../components/Films";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchFilmsRequest } from "../../redux/actions/filmsActions";
import { FilmType } from "../../types";

export default function FilmsPage() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.persistedReducer.filmsReducer)
    const films: FilmType[] = state.films

    useEffect(() => {
        if (films.length < 1) {
            dispatch(fetchFilmsRequest(''))
        }
    }, [dispatch, films.length])

    return (
        <FilmsComponent
            films={films}
        />
    )
}