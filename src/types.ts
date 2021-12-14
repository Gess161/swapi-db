export interface FilmsResults {
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
}
export interface Response {
    config: object,
    data: {
        count: number,
        next?: null | string,
        previous?: null | string,
        results: any,
    }
}