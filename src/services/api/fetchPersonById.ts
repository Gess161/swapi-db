import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"
import { PersonType } from "../../types";

export default async function fetchPersonById(id: string | undefined) {
    const url = `${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`
    const response = await axios.get(url)
    const person: PersonType = response.data
    return person;
}