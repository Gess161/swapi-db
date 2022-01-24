import { render, screen } from "@testing-library/react";
import { testPerson } from "../../utils/testUtils";
import PersonDetails from ".";
import { BrowserRouter } from "react-router-dom";

it("renders person detailed info", () => {
    render(
        <BrowserRouter>
            <PersonDetails person={testPerson} />
        </BrowserRouter>
    )
    expect(screen.getByTestId("info")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Height: 180cm")).toBeInTheDocument();
    expect(screen.getByText("Mass: 70kg")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();
    expect(screen.getByText("Hair color: blue")).toBeInTheDocument();
    expect(screen.getByText("Skin color: brown")).toBeInTheDocument();
})