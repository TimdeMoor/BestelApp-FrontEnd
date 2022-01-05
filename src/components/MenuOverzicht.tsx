import React, {useEffect, useState} from "react"
import {Dish} from "./Entities"
import axios from "axios"
import {Container} from "react-bootstrap"
import Gerecht from "./Dish"


export default function MenuOverzicht(){
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
					<Gerecht dish = {dish} key = {dish.id}/>
				)
			})
		}</Container>
	)
}
