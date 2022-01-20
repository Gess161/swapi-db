import React from "react"
import { render, screen } from "@testing-library/react"
import FilmsComponent from "."

describe("FilmsComponent", () => {
    it('should render a list of films', () => {
        render(<FilmsComponent />)

        expect(screen.getByText("The Phantom Menace")).toBeInTheDocument();
        expect(screen.getByText("A New Hope")).toBeInTheDocument();
    })
})