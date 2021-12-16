import axios from "axios";
import { FILMS_URL_EXTENTION } from "../../../constants";

const cache = window.localStorage;
const prefix = 'swCache'

export async function requestFetchFilms(url: string) {
    const cached = cache.getItem(`${prefix}.${url}`)
    if(cached) return JSON.parse(cached);
    
    if (url !== "") {
        const res = await axios.get(url)
        cache.setItem(`${prefix}.${url}`, JSON.stringify(res))
        return res;
    } else {
        const baseUrl = `${process.env.REACT_APP_API_URL + FILMS_URL_EXTENTION}`
        const res = await axios.get(baseUrl)
        cache.setItem(`${prefix}.${baseUrl}`, JSON.stringify(res))
        return res;
    }
}