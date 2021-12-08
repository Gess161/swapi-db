import { call, put } from "@redux-saga/core/effects";
import { fetchPeoplesSucces } from "../../actions/peopleActions";
import { requestFetchFilms } from "../requests/films";


export function* handleFetchPeople() {
    try {
        const response: object = yield call(requestFetchFilms)
        const { data: { results } }: any = response;
        yield put(fetchPeoplesSucces(results));
    } catch (error) {
        console.log(error)
    }
}