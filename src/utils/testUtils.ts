import { FilmType, PersonType } from "../types"

export const testPerson: PersonType = {
    birth_year: "2020",
    eye_color: "red",
    films: ["first", "second"],
    gender: "male",
    hair_color: "blue",
    height: "180cm",
    homeworld: "Earth",
    mass: "70kg",
    name: "John Doe",
    skin_color: "brown",
    created: new Date,
    edited: new Date,
    species: [""],
    starships: [""],
    url: "someurl",
    vehicles: [''],
}

export const testFilm: FilmType = {
    characters: ["Random Name", "Another Noname"],
    created: "1996",
    director: "Tentin Quarantino",
    edited: "20.20.2020",
    episode_id: 16,
    opening_crawl: "Some text of opening crawl",
    planets: ['Earth'],
    producer: 'Lorem Ipsum',
    release_date: '2011',
    species: [''],
    starships: [''],
    title: 'Test title',
    url: 'someurl',
    vehicles: ['ZAZ']
}