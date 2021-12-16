import axios from "axios";
import { PEOPLE_URL_EXTENTION } from "../../../constants";

const cache = window.localStorage;
const prefix = "swCache"
const baseUrl = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION}`

export async function requestFetchPeople(url: string) {
    const cached = cache.getItem(`${prefix}.${url}`)
    if(cached) return JSON.parse(cached);

    if (url !== "") {
        const res = await axios.get(url);
        cache.setItem(`${prefix}.${url}`, JSON.stringify(res))
        return res;
    } else {
        const res = await axios.get(baseUrl)
        cache.setItem(`${prefix}.${baseUrl}`, JSON.stringify(res))
        return res;
    }   
}