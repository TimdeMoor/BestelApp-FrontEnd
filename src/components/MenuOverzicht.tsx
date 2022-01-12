import React, {useEffect, useState} from "react"
import {Dish, DishOrderItem} from "./Entities"
import {Container, Row, Col, Card} from "react-bootstrap"
import Gerecht from "./Gerecht"
import config from "./../Config"
import requester from "../requester"
import Bestellijst from "./Bestellijst"

export default function MenuOverzicht(props:{
	dishes:Dish[]|undefined
}) {
	const [dishes, setDishes] = useState<Dish[]>(props.dishes)
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

		const existingOrderItem = orderItems.find(oi => oi.dishId === newOrderItem.dishId)
		if (existingOrderItem){
			existingOrderItem.amount++
		}else{
			setOrderItems([...orderItems, newOrderItem])
		}
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
					<Card>
						<Bestellijst orderItems={orderItems} setOrderItems={setOrderItems}/>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
