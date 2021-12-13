import { IMG_URL_EXTENTION } from "../constants"

export default function getImageUrl(id: string) {
        return `${process.env.REACT_APP_IMG_API_URL + id + IMG_URL_EXTENTION}`
}

