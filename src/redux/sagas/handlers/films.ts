import { call, put } from "@redux-saga/core/effects";
import { fetchFilmsSucces } from "../../actions/filmsActions";
import { requestFetchFilms } from "../requests/films";

export function* handleFetchFilms() {
    try {
        const response: object = yield call(requestFetchFilms)
        const { data: { results } }: any = response;
        yield put(fetchFilmsSucces(results));
    } catch (error) {
        console.log(error)
    }
}