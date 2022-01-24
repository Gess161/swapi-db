import { render, screen } from "@testing-library/react"
import FilmsComponent from "."
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import { BrowserRouter, useNavigate } from "react-router-dom"
import { FilmType } from "../../types";
import { testFilm } from "../../utils/testUtils";

const films = [testFilm]
const empty: FilmType[] = [];
const MockWrapper = (props: any) => {
    const navigate = useNavigate()
    const { filmsArray } = props;
    return <FilmsComponent films={filmsArray} navigate={navigate} />
}

describe("FilmsComponent", () => {
    it('should render a logo, Test title and films navigation', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MockWrapper filmsArray={films} />
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByText("Films")).toBeInTheDocument();
        expect(screen.getByText("Test title")).toBeInTheDocument();
        expect(screen.getByAltText("logo")).toBeInTheDocument();
    })

    it('should render a loader', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MockWrapper filmsArray={empty} />
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByTestId("loader")).toBeInTheDocument();
    })
})