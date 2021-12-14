import axios from "axios";
import { FILMS_URL_EXTENTION } from "../../../constants";

export function requestFetchFilms(url: string) {
    if (url !== "") {
        return axios.request({
            method: "GET",
            url: `${url}`
        })
    } else {
        return axios.request({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL + FILMS_URL_EXTENTION}`
        })
    }
}