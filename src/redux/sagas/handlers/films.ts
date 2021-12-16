import { call, put } from "@redux-saga/core/effects";
import { fetchFilmsSucces } from "../../actions/filmsActions";
import { requestFetchFilms } from "../requests/films";

import { FilmType, Response } from "../../../types";

export function* handleFetchFilms(action: any) {
    const url: string = action.payload
    try {
        const response: Response = yield call(requestFetchFilms, url)
        const { data: { result } }: Response = response;
        const films: FilmType[] = []

        for (let i = 0; i < result.length; i++) {
            const film = result[i].properties;
            const filmEpisode = film.episode_id;
            films.splice(filmEpisode - 1, 0, film);
        }


        yield put(fetchFilmsSucces(films));
    } catch (error) {
        console.log(error);
    }
}