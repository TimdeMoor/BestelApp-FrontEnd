import React from "react"
import {DishOrderItem, Order, OrderItem} from "./Entities"
import {Badge, Button, ListGroup} from "react-bootstrap"
import requester from "../requester"


export default function Bestellijst(props:{
	orderItems: DishOrderItem[],
	setOrderItems(NewOrderItems:DishOrderItem[])
}){

	async function SubmitOrder(){
		const randomId = Math.floor(100000000 + (Math.random() * 900000000)) as number
		const newBestelling:Order = {id: randomId, isComplete: false, tableId: 1, totalPrice: 0}
		console.log(newBestelling)
		const response = await requester.post("orders", newBestelling)
		console.log(response)

		props.orderItems.forEach(function(orderItem){
			const newOrderItem:OrderItem = {
				amount: orderItem.amount,
				comment: orderItem.comment,
				dishId: orderItem.dishId,
				orderId: randomId
			}
			requester.post("order-items",newOrderItem)
		})

		props.setOrderItems([])
	}


	return (
		<div>
			<h2>Huidige Bestelling</h2>
			<ListGroup as={"ul"} data-testid={"OrderList"}>
				{props.orderItems.map((orderItem, index) => {
					return (
						<ListGroup.Item as={"li"} key={index} variant={index%2 ? "secondary" : "dark"}>
							<span>{orderItem.dishName}</span>
							<Badge pill>{orderItem.amount}x</Badge>
							<p>{orderItem.comment ? "" : orderItem.comment}</p>
						</ListGroup.Item>
					)
				})}
			</ListGroup>
			<Button name={"btnPlaatsBestelling"} variant={"success"} onClick={SubmitOrder}>Plaats bestelling</Button>
		</div>
	)
}
