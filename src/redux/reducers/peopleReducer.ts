import { AnyAction } from "redux";
import { FETCH_PEOPLE_FAILURE, FETCH_PEOPLE_SUCCES, FETCH_PEOPLE_REQUEST } from "../../constants";
import { PeopleState } from "../../types"

const initialState: PeopleState = {
    pending: false,
    error: null,
    people: [],
    person: {},
    next: ""
}

export default function peopleReducer(state = initialState, action: AnyAction): PeopleState {
    switch (action.type) {
        case FETCH_PEOPLE_REQUEST:
            return {
                ...state,
                pending: true,
            }
        case FETCH_PEOPLE_SUCCES:
            return {
                ...state,
                pending: false,
                people: [...state.people, ...action.payload.results],
                next: action.payload.next,
                error: null
            }
        case FETCH_PEOPLE_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default: {
            return state;
        }
    }
}