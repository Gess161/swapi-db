import { FETCH_PEOPLE_FAILURE, FETCH_PEOPLE_SUCCES, FETCH_PEOPLE_REQUEST } from "../../constants"

export const fetchPeopleRequest = () => ({
    type: FETCH_PEOPLE_REQUEST
})

export const fetchPeoplesSucces = (payload: Array<any>) => ({
    type: FETCH_PEOPLE_SUCCES,
    payload
})

export const fetchPeoplesFailure = (payload: object) => ({
    type: FETCH_PEOPLE_FAILURE,
    payload
})