import { takeLatest } from "redux-saga/effects"
import { FETCH_FILMS_REQUEST, FETCH_PEOPLE_REQUEST } from "../../constants"
import { handleFetchFilms } from "./handlers/films"
import { handleFetchPeople } from "./handlers/people"

export function* watcherSaga() {
    yield takeLatest(FETCH_FILMS_REQUEST, handleFetchFilms)
    yield takeLatest(FETCH_PEOPLE_REQUEST, handleFetchPeople)
};