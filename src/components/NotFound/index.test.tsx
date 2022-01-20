import React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundComponent from "."

describe("FilmsComponent", () => {
    it('should render a return to homepage button', () => {
        render(<NotFoundComponent />)

        expect(screen.getByText("Return to homepage")).toBeInTheDocument();
    })
})