import React from "react"
import { render, screen } from "@testing-library/react"
import FilmsComponent from "."
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import { BrowserRouter, useNavigate } from "react-router-dom"
import { FilmType } from "../../types";

const film =  {
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
    title: 'Title',
    url: 'someurl',
    vehicles: ['ZAZ']
}

const films = [film]
const empty: FilmType[] = [];

const MockWrapper = (filmsArray: any) => { 
    const navigate = useNavigate()
    return <FilmsComponent films={filmsArray} navigate={navigate} />
}


describe("FilmsComponent", () => {
    it('should render a logo and films nav', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MockWrapper filmsArray={empty}/>
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByText("Films")).toBeInTheDocument();
        expect(screen.getByAltText("logo")).toBeInTheDocument();
    })

    it('should render a loader', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MockWrapper filmsArray={empty}/>
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByTestId("loader")).toBeInTheDocument();
    })
})