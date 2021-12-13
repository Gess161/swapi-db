import axios from "axios";
import { FILMS_URL_EXTENTION } from "../../../constants";

export function requestFetchFilms(){
    return axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL + FILMS_URL_EXTENTION}`
    })
}