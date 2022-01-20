import React from "react"
import { render, screen } from "@testing-library/react"
import PeopleContainer from "."

describe("PeopleContainer", () => {
    it('should render a list of characters', () => {
        render(<PeopleContainer />)

        expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
    })
})