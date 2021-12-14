import axios from "axios";
import { PEOPLE_URL_EXTENTION } from "../../../constants";

export function requestFetchPeople(url: string) {
    if (url !== "") {
        return axios.request({
            method: "GET",
            url: `${url}`
        })
    } else {
        return axios.request({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION}`
        })
    }   
}