import axios from "axios";
import { PEOPLE_URL_EXTENTION } from "../../../constants";

export function requestFetchFilms(){
    return axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION}`
    })
}