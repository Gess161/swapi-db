import { PEOPLE_URL_EXTENTION } from "../constants";

export default function getId(url: string){
    const id: string = url
        .replace(`${process.env.REACT_APP_API_URL + PEOPLE_URL_EXTENTION}`, '')
        .replace(/\//g, '')
    return id;
}