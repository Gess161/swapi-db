import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"
import { PersonType } from "../../types";

const cache = window.localStorage;
const prefix = 'swCache'


export default function fetchPeopleById(arr: any) {

    const people = Promise.all(arr.map(async (id: any) => {
        const url = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`
        const cached = cache.getItem(`${prefix}.${url}`)
        if(cached) return JSON.parse(cached);

        const response = await axios.get(url)
        const person: PersonType = response.data.result.properties

        cache.setItem(`${prefix}.${url}`, JSON.stringify(person));
        
        return person;
    }));
    return people;
}