import { FETCH_FILMS_FAILURE, FETCH_FILMS_SUCCES, FETCH_FILMS_REQUEST } from "../../constants"

export const fetchFilmsRequest = () => ({
    type: FETCH_FILMS_REQUEST
})

export const fetchFilmsSucces = (payload: Array<any>) => ({
    type: FETCH_FILMS_SUCCES,
    payload
})

export const fetchFilmsFailure = (payload: object) => ({
    type: FETCH_FILMS_FAILURE,
    payload
})