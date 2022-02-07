import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"
import { PersonType } from "../../types";

export default async function fetchPeopleById(prop: any) {
    const people = Promise.all(prop.map(async (id: string) => {
        const url = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`
        const response = await axios.get(url)
        const person: PersonType = response.data
        return person;
    }));
    return people;
}