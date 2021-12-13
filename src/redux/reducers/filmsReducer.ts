import { AnyAction } from "redux";
import { FETCH_FILMS_FAILURE, FETCH_FILMS_SUCCES, FETCH_FILMS_REQUEST } from "../../constants"
import parseFilms from "../../services/parseFilms"

interface FilmsState {
    pending: boolean,
    error: string | null,
    films: Array<any>
    film: {},
}

const initialState: FilmsState = {
    pending: false,
    error: null,
    films: [],
    film: {}
}

export default function filmsReducer(state = initialState, action: AnyAction) {
    switch (action.type){
        case FETCH_FILMS_REQUEST:
            return {
                ...state,
                pending: true,
            }
        case FETCH_FILMS_SUCCES:
            const films = action.payload.map((film: any) => film)
            return {
                ...state,
                pending: false,
                films: action.payload,
                film: parseFilms(films),
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