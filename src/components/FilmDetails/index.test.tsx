
import { render, screen } from "@testing-library/react"
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import { BrowserRouter, useNavigate } from "react-router-dom"
import { testFilm, testPerson } from "../../utils/testUtils";
import FilmDetailsComponent from "."

const TestWrapper = (props: any) => {
    const navigate = useNavigate()
    const { films, people, episode } = props;
    return (
        <FilmDetailsComponent navigate={navigate} films={films} people={people} episode={episode} />
    )
}

describe("FilmDetailsComponent", () => {
    it('should render a film  directed by Tentin Quarantino with title "Test title" and John Doe as a character', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <TestWrapper films={[testFilm]} people={[testPerson]} episode={1} />
                </Provider>
            </BrowserRouter>
        )
        expect(screen.getByText("Director: Tentin Quarantino")).toBeInTheDocument();
        expect(screen.getByText("Test title")).toBeInTheDocument();
        expect(screen.getByText("Episode 1")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    })
})