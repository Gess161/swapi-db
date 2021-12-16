import { AnyAction } from "redux";
import { FETCH_FILMS_FAILURE, FETCH_FILMS_SUCCES, FETCH_FILMS_REQUEST } from "../../constants"
import { FilmState } from "../../types";

const initialState: FilmState = {
    pending: false,
    error: "",
    films: [],
};

export default function filmsReducer(state = initialState, action: AnyAction): FilmState {
    switch (action.type) {
        case FETCH_FILMS_REQUEST:
            return {
                ...state,
                pending: true,
            }
        case FETCH_FILMS_SUCCES:
            return {
                ...state,
                pending: false,
                films: action.payload,
                error: null
            }
        case FETCH_FILMS_FAILURE:
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