import { AnyAction } from "redux";

interface FilmsState {
    films: Array<any>
}

const initialState: FilmsState = {
    films: []
}

export default function filmsReducer(state = initialState, action: AnyAction) {
    return state;
}