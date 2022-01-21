import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import PeopleItem from ".";

const TestWrapper = () => {
    const navigate = useNavigate
    return (
        <PeopleItem navigate={navigate} name="John Doe" />
    )
}

it("renders Person named John Doe", () => {
    render(
        <BrowserRouter>
            <TestWrapper />
        </BrowserRouter>
    )
    expect(screen.getByText("John Doe")).toBeInTheDocument();
})

it("checks if img with alt 'jedi' renders", () => {
    render(
        <BrowserRouter>
            <TestWrapper />
        </BrowserRouter>
    )
    expect(screen.getByAltText("jedi")).toBeInTheDocument();
}) 
