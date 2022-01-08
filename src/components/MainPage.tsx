import React, {ChangeEvent, useEffect, useState} from "react"
import {Dish, OrderItem} from "./Entities"
import axios from "axios"
import {Container} from "react-bootstrap"
import Gerecht from "./Gerecht"
import MenuOverzicht from "./MenuOverzicht"
import Bestellijst from "./Bestellijst"


export default function MainPage(props:{
}){
	const [orderItems, setOrderItems] = useState<OrderItem[]>([])

	function handleDishOnClick(DishId: number){
		const newOrderItem: OrderItem = {
			amount: 1,
			comment: "",
			dishId: DishId,
			id: 0,
			orderId: 1
		}
		setOrderItems([...orderItems, newOrderItem])
	}

	return (
		<div>
			<MenuOverzicht handleDishOnClick={handleDishOnClick}/>
			<Bestellijst/>
		</div>

	)
}
