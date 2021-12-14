import { AnyAction } from "redux";
import { FETCH_PEOPLE_FAILURE, FETCH_PEOPLE_SUCCES, FETCH_PEOPLE_REQUEST } from "../../constants";
import { PersonType } from "../../types"

interface PeopleState {
    pending: boolean,
    error: string | null,
    people: Array<PersonType>,
    person: PersonType | null,
    next: string | null,
}

const initialState: PeopleState = {
    pending: false,
    error: null,
    people: [],
    person: null,
    next: ""
}

export default function peopleReducer(state = initialState, action: AnyAction) {
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
                people: [],
                error: action.payload.error
            }
        default: {
            return state;
        }
    }
}