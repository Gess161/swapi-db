import { render, screen } from "@testing-library/react"
import { Provider } from 'react-redux';
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom"
import { testFilm } from "../../../utils/testUtils";
import AboutFilm from "."

describe("AboutFilm", () => {
    it('should render detailed film info of testFilm', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <AboutFilm film={testFilm} episode={1}/>
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByText("Director: Tentin Quarantino")).toBeInTheDocument();
        expect(screen.getByText("Test title")).toBeInTheDocument();
        expect(screen.getByText("Episode 1")).toBeInTheDocument();
    })
})