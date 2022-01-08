import React, {useEffect, useState} from "react"
import {Dish, DishOrderItem} from "./Entities"
import {Container, Row, Col} from "react-bootstrap"
import Gerecht from "./Gerecht"
import config from "./../Config"
import requester from "../requester"
import Bestellijst from "./Bestellijst"

export default function MenuOverzicht() {
	const [dishes, setDishes] = useState<Dish[]>([])
	const [orderItems, setOrderItems] = useState<DishOrderItem[]>([])

	useEffect(() => {
		getMenu()
		setInterval(() => {
			getMenu()
		}, config.RefreshDelayMS)
	}, [])

	async function getMenu(){
		requester.get("dishes")
			.then(res =>
				setDishes(res.data))
	}

	function addToOrder(DishId: number){
		const newOrderItem: DishOrderItem = {
			amount: 1,
			comment: "",
			dishId: DishId,
			dishName: dishes.find(i => i.id === DishId).name,
			orderId: 1,
		}

		setOrderItems([...orderItems, newOrderItem])
	}

	return (
		<Container>
			<Row>
				<Col>{
					dishes.map(dish => {
						return(
							<Gerecht
								addToOrder={addToOrder}
								dish={dish}
								key={dish.id}
							/>
						)
					})
				}
				</Col>
				<Col>
					<Bestellijst orderItems={orderItems} setOrderItems={setOrderItems}/>
				</Col>
			</Row>
		</Container>
	)
}
