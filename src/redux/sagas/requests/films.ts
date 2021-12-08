import axios from "axios";

export function requestFetchFilms(){
    return axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/films`
    })
}