import React, {useEffect, useState} from "react"
import {Dish, Order, OrderItem} from "./Entities"
import {Button} from "react-bootstrap"
import requester from "../requester"
import {randomUUID} from "crypto"
import {string} from "prop-types"

export default function Bestellijst(props:{

}){
	const [dish, setDish] = useState<Dish>({id: 0, name: "", price: 0})
	const [orderItems, setOrderItems] = useState<OrderItem[]>([])
	const [tableId, setTableId] = useState<number>(0)
	const [comment, setComment] = useState<string>("")

	useEffect(() => {
		setOrderItems([])
	},[])


	async function SubmitOrder(){
		const newBestelling:Order = {id: 1, isComplete: false, tableId: tableId, totalPrice: 0}
		console.log(newBestelling)
		const response = await requester.post("orders", newBestelling)
		console.log(response)
	}

	async function getDishFromId(dishId: number) {
		const response = await requester.get(`/dishes/${dishId}`)
		setDish(response.data as Dish)
	}

	return (
		<div>
			{orderItems.map((orderItem) => {
				return (
					<div key={orderItem.id}>
						{getDishFromId(orderItem.dishId)}
						<p>`1x ${dish.name}`</p>
					</div>
				)
			})}
			<Button variant={"success"} onClick={SubmitOrder}>Plaats bestelling</Button>
		</div>
	)
}
