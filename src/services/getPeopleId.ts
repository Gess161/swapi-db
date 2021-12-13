import getId from "./getId";

const getPersonId = (url: string) => getId(url)

export default function getPeopleId(array: Array<string>) {
    const res: Array<string> = [];
    array.map((item: string) => {
        return res.push(getPersonId(item))
    })
    return res;
}