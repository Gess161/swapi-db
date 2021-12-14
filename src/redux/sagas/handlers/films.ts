import { call, put } from "@redux-saga/core/effects";
import { fetchFilmsSucces } from "../../actions/filmsActions";
import { requestFetchFilms } from "../requests/films";

import { Response } from "../../../types";

export function* handleFetchFilms(action: any) {
    const url: string = action.payload
    try {
        const response: Response = yield call(requestFetchFilms, url)
        const { data: { results } }: Response = response;
        yield put(fetchFilmsSucces(results));
    } catch (error) {
        console.log(error)
    }
}