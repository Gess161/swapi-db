export interface FilmType {
    characters: string[],
    created: string,
    director: string,
    edited: string,
    episode_id: number,
    opening_crawl: string,
    planets: string[],
    producer: string,
    release_date: string,
    species: string[],
    starships: string[],
    title: string,
    url: string,
    vehicles: string[]
}
export interface PersonType {
    birth_year: string;
    eye_color: string;
    films: string[]
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[]
    starships: string[]
    url: string;
    vehicles: string[]
    img?: string,
}

export interface ResultObject {
    description: string;
    properties: FilmType;
    uid: string;
    __v: number;
    _id: string;
}
export interface Response {
    config: object,
    data: {
        message: string,
        results: FilmType[]
    }
}
export interface FilmState {
    pending: boolean,
    error: string | null,
    films: FilmType[] | [], 
}
export interface PeopleState {
    pending: boolean,
    error: string | null,
    people: PersonType[] | [],
    person: {
        person: PersonType,
        id: string | number  
    } | {},
    next: string,
}