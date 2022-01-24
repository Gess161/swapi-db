import People from ".";
import { BrowserRouter, useNavigate } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import { PersonType } from "../../types";
import { testPerson } from "../../utils/testUtils";

const people = [testPerson]
const empty: PersonType[] = []

const mockFunction = () => {}

const TestWrapper = (props: any) => {
    const navigate = useNavigate()
    const { arr } = props;
    return (
        <People navigate={navigate} people={arr} url="someurl" fetchData={mockFunction} />
    )
}

it("renders with person John Doe", () => {
    render(
        <BrowserRouter>
            <TestWrapper arr={people} />
        </BrowserRouter>
    )
    expect(screen.getByText("John Doe")).toBeInTheDocument();
})

it("renders loader, when there is no person to render", () => {
    render(
        <BrowserRouter>
            <TestWrapper arr={empty} />
        </BrowserRouter>
    )
    expect(screen.getByTestId("loader")).toBeInTheDocument();
})
