import axios from "axios";
import { FILMS_URL_EXTENTION } from "../../../constants";

const baseUrl = `${process.env.REACT_APP_API_URL + FILMS_URL_EXTENTION}`

export async function requestFetchFilms(url: string) {
    return url !== "" ? await axios.get(url) : await axios.get(baseUrl);
}