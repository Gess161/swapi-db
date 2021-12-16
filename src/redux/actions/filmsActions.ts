import { FETCH_FILMS_FAILURE, FETCH_FILMS_SUCCES, FETCH_FILMS_REQUEST } from "../../constants"
import { Response, FilmType } from "../../types"

export const fetchFilmsRequest = (payload: string) => ({
    type: FETCH_FILMS_REQUEST,
    payload
})

export const fetchFilmsSucces = (payload: FilmType[]) => ({
    type: FETCH_FILMS_SUCCES,
    payload
})

export const fetchFilmsFailure = (payload: Response) => ({
    type: FETCH_FILMS_FAILURE,
    payload
})