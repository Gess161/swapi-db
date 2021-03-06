import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"
import { PersonType } from "../../types";

const cache = window.localStorage;
const prefix = 'swCache'

export default async function fetchPeopleById(prop: any) {
    const people = Promise.all(prop.map(async (id: string) => {
        const url = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`
        const cached = cache.getItem(`${prefix}.${url}`)
        if (cached) return JSON.parse(cached);
        const response = await axios.get(url)
        const person: PersonType = response.data
        cache.setItem(`${prefix}.${url}`, JSON.stringify(person));
        return person;
    }));
    return people;
}