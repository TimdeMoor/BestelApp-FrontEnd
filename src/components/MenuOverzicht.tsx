import React, {useEffect, useState} from "react"
import {Dish} from "./Entities"
import axios from "axios"
import {Container} from "react-bootstrap"
import Gerecht from "./Gerecht"


export default function MenuOverzicht(props:{
	handleDishOnClick(DishId: number)
}){
	const [dishes, setDishes] = useState<Dish[]>([])
	useEffect(() => {
		setInterval(() => {
			axios.get("http://localhost:8080/api/v1/dishes")
				.then(res =>
					setDishes(res.data))
		}, 5000)
	}, [])

	return (
		<Container>{
			dishes.map(dish => {
				return(
					<Gerecht
						handleDishOnClick={props.handleDishOnClick}
						dish={dish}
						key={dish.id}
					/>
				)
			})
		}</Container>
	)
}
