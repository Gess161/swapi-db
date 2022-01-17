import { FETCH_PEOPLE_FAILURE, FETCH_PEOPLE_SUCCES, FETCH_PEOPLE_REQUEST, SET_PERSON } from "../../constants"
import { PersonType } from "../../types"

export const setPerson = (payload: PersonType) => ({
    type: SET_PERSON,
    payload
})

export const fetchPeopleRequest = (payload: string) => ({
    type: FETCH_PEOPLE_REQUEST,
    payload
})

export const fetchPeoplesSucces = (payload: any) => ({
    type: FETCH_PEOPLE_SUCCES,
    payload
})

export const fetchPeoplesFailure = (payload: object) => ({
    type: FETCH_PEOPLE_FAILURE,
    payload
})