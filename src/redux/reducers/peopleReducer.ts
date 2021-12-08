import { AnyAction } from "redux";

interface PeopleState {
    people: Array<object>
}

const initialState: PeopleState = {
    people: []
}

export default function peopleReducer(state = initialState, action: AnyAction) {
    return state;
}