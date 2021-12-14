import { call, put } from "@redux-saga/core/effects";
import { fetchPeoplesSucces } from "../../actions/peopleActions";
import { requestFetchPeople } from "../requests/people";
import { Response } from "../../../types";

export function* handleFetchPeople(action: any) {
    console.log(action)
    const url: string = action.payload
    try {
        const response: Response = yield call(requestFetchPeople, url);
        const { data: { results, next } }: Response = response;
        yield put(fetchPeoplesSucces({ results, next }));
    } catch (error) {
        console.log(error)
    }
}