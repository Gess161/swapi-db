import axios from "axios"
import { PEOPLE_URL_EXTENTION } from "../../constants"

export default function fetchPeopleById(arr: any) {
    const people = Promise.all(arr.map(async (id: any) => {
        const characters = await axios.get(`${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION + "/" + id}`)
        return characters.data
    }));

    return people;
}