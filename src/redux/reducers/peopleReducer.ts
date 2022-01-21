import { AnyAction } from "redux";
import { FETCH_PEOPLE_FAILURE, FETCH_PEOPLE_SUCCES, FETCH_PEOPLE_REQUEST, SET_PERSON } from "../../constants";
import { PeopleState } from "../../types"

const initialPerson = {
    birth_year: "birth year",
    eye_color: "eye color",
    films: ["first", "second"],
    gender: "gender",
    hair_color: "hair color",
    height: "height",
    homeworld: "homeworld",
    mass: "mass",
    name: "John Doe",
    skin_color: "skin color",
    created: new Date(),
    edited: new Date(),
    species: [""],
    starships: [""],
    url: "someurl",
    vehicles: [''],
}

const initialState: PeopleState = {
    pending: false,
    error: null,
    people: [],
    person: initialPerson,
    next: ""
}

export default function peopleReducer(state = initialState, action: AnyAction): PeopleState {
    switch (action.type) {
        case SET_PERSON:
            return {
                ...state,
                person: action.payload
            }
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