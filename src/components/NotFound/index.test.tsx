import React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundComponent from "."
import { BrowserRouter } from "react-router-dom"

describe("Not Found", () => {
    it('should render a return to homepage button', () => {
        render(
            <BrowserRouter>
                <NotFoundComponent />
            </BrowserRouter>
        )

        expect(screen.getByText("Return to Homepage")).toBeInTheDocument();
    })
})

