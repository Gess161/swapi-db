import axios from "axios";
import { PEOPLE_URL_EXTENTION } from "../../../constants";

const baseUrl = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION}`

export async function requestFetchPeople(url: string) {
    return url !== "" ? await axios.get(url) : await axios.get(baseUrl); 
}