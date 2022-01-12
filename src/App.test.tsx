import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import Gerecht from "./components/Gerecht"
import {Dish} from "./components/Entities"
import MenuOverzicht from "./components/MenuOverzicht"


test("renders menu text", () => {
	render(<App />)
	const iElement = screen.getByText(/Menu/i)
	// eslint-disable-next-line no-undef
	expect(iElement).toBeInTheDocument()
})

test("renders testDish", () => {
	const testDish:Dish = {
		id: 123,
		name: "TestDish",
		price: 456
	}
	function testFunction(){return null}
	render(<Gerecht dish={testDish} addToOrder={testFunction}/>)

	const testDishNameElement = screen.getByText(testDish.name)
	const testDishPriceElement = screen.getByText("€"+testDish.price)

	expect(testDishNameElement).toBeInTheDocument()
	expect(testDishPriceElement).toBeInTheDocument()
})

test("integrationTestGerechtenBestellen", () => {

	//arrange
	const testDish1:Dish =
		{
			id: 1,
			name: "Frikandel",
			price: 1.5
		}
	const testDish2:Dish =
		{
			id: 2,
			name: "Kroket",
			price: 2.5
		}
	const testDish3:Dish =
		{
			id: 3,
			name: "Kip",
			price: 3.5
		}
	const testDishes:Dish[] = [testDish1, testDish2, testDish3]

	render(<MenuOverzicht dishes={testDishes}/>)

	const buttonElementFrikandel = screen.getByTestId("BestelKnopFrikandel")
	const buttonElementKroket = screen.getByTestId("BestelKnopKroket")
	const buttonElementKip = screen.getByTestId("BestelKnopKip")
	const orderListElement = screen.getByTestId("OrderList")

	expect(orderListElement).toBeInTheDocument()
	expect(orderListElement.childElementCount).toEqual(0)

	buttonElementFrikandel.click()
	buttonElementKip.click()
	buttonElementKroket.click()

	expect(orderListElement.childElementCount).toEqual(3)
})
