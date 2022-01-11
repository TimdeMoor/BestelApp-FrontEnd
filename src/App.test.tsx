import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import Gerecht from "./components/Gerecht"
import {Dish} from "./components/Entities"

// eslint-disable-next-line no-undef
test("renders menu text", () => {
	render(<App />)
	const iElement = screen.getByText(/Menu/i)
	// eslint-disable-next-line no-undef
	expect(iElement).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
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


//test("test insert new order", async () => {
//	const testOrderId = 9999999
//	const testOrder: Order = {
//		id: testOrderId,
//		isComplete: false,
//		tableId: 1,
//		totalPrice: 0
//	}
//	const testOrderItem: OrderItem = {
//		dishId: 1,
//		orderId: testOrderId,
//		amount: 3,
//		comment: ""
//	}
//
//	await requester.post("orders", testOrder)
//
//})
