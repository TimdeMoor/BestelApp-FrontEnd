import React, {useEffect, useState} from "react"
import Bestelling from "./bestelling"
import axios from "axios"

export default function BestellingenOverzicht(){
	const [bestellingen, setBestellingen] = useState([])
	useEffect(() => {
		axios.get("http://localhost:8080/api/v1/orders/incomplete")
			.then(res =>
				setBestellingen(res.data))
	},[bestellingen])

	return (
		bestellingen.map(b => {
			return <Bestelling key={b.id} bestelling={b}/>
		})
	)
}