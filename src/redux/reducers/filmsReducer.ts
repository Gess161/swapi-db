import { AnyAction } from "redux";
import { FETCH_FILMS_FAILURE, FETCH_FILMS_SUCCES, FETCH_FILMS_REQUEST } from "../../constants"
interface FilmsState {
    pending: boolean,
    error: string | null,
    films: Array<any>
}

const initialState: FilmsState = {
    pending: false,
    error: null,
    films: []
}

export default function filmsReducer(state = initialState, action: AnyAction) {
    switch (action.type){
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
                films: [],
                error: action.payload.error
            }
        default: {
            return state;
        }
    }
}