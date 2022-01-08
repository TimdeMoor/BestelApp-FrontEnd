import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
	render(<App />)
	const iElement = screen.getByText(/TestText/i)
	// eslint-disable-next-line no-undef
	expect(iElement).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
	render(<App />)
	const iElement = screen.getByText(/TestText/i)
	// eslint-disable-next-line no-undef
	expect(iElement).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
	render(<App />)
	const iElement = screen.getByText(/TestText/i)
	// eslint-disable-next-line no-undef
	expect(iElement).toBeInTheDocument()
})
