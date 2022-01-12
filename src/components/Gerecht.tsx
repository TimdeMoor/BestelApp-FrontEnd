import React, {useEffect, useState} from "react"
import {Dish} from "./Entities"
import {Button, Card} from "react-bootstrap"

export default function Gerecht(props:{
    dish: Dish,
	addToOrder(DishId: number)
}){
	const [dish, setDish] = useState<Dish>({id: 0, name: "TEST", price: 0})

	useEffect(() => {
		setDish(props.dish)
	},[])

	function handleDishOnClick(){
		props.addToOrder(dish.id)
	}

	return (
		<div>
			<Card key={dish.id}>
				<Card.Body>
					<Card.Title><h3>{dish.name}</h3></Card.Title>
					<div>
						<p>€{dish.price}</p>
						<Button data-testid={`BestelKnop${dish.name}`} variant={"success"} onClick={handleDishOnClick}>Bestel</Button>
					</div>
				</Card.Body>
				<Card.Footer>

				</Card.Footer>
			</Card>
		</div>
	)
}
