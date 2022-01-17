import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"
import { PersonType } from "../../types";

const cache = window.localStorage;
const prefix = 'swCache'

export default async function fetchPersonById(id: string | undefined) {
    const url = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`
    const cached = cache.getItem(`${prefix}.${url}`)
    if (cached) return JSON.parse(cached);
    const response = await axios.get(url)
    const person: PersonType = response.data
    cache.setItem(`${prefix}.${url}`, JSON.stringify(person));
    return person;
}