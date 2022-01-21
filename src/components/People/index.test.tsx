import People from ".";
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import { PersonType } from "../../types";

const JohnDoe = {
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
const people = [JohnDoe]
const empty: PersonType[] = []

const mockFunction = () => {}

it("renders with person John Doe", () => {
    render(
        <BrowserRouter>
            <People people={people} url="someurl" fetchData={mockFunction}/>
        </BrowserRouter>
    )
    expect(screen.getByText("John Doe")).toBeInTheDocument();
})

it("renders loader, when there is no person to render", () => {
    render(
        <BrowserRouter>
            <People people={empty} url="someurl" fetchData={mockFunction}/>
        </BrowserRouter>
    )
    expect(screen.getByTestId("loader")).toBeInTheDocument();
})
