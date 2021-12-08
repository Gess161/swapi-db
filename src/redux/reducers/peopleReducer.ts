import { AnyAction } from "redux";

interface PeopleState {
    pending: boolean,
    error: string | null,
    people: Array<object>
}

const initialState: PeopleState = {
    pending: false,
    error: null,
    people: []
}

export default function peopleReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case "FETCH_PEOPLE_REQUEST":
            return {
                ...state,
                pending: true,
            }
        case "FETCH_PEOPLE_SUCCES":
            return {
                ...state,
                pending: false,
                films: action.payload,
                error: null
            }
        case "FETCH_PEOPLE_FAILURE":
            return {
                ...state,
                pending: false,
                films: [],
                error: action.payload.error //error
            }
        default: {
            return state;
        }
    }
}