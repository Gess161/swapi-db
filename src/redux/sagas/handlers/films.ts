import { call, put } from "@redux-saga/core/effects";
import { fetchFilmsSucces } from "../../actions/filmsActions";
import { requestFetchFilms } from "../requests/films";

import { FilmType, Response } from "../../../types";

export function* handleFetchFilms(action: any) {
    const url: string = action.payload
    try {

        //getting films
        const response: Response = yield call(requestFetchFilms, url)
        const { data: { results } }: Response = response;
        const films: FilmType[] = []

         //puting films in chronological order
        for (let i = 0; i < results.length; i++) {
            const film = results[i];
            const filmEpisode = film.episode_id;
            films.splice(filmEpisode - 1, 0, film);
        }

        yield put(fetchFilmsSucces(films));
    } catch (error) {
        console.log(error);
    }
}