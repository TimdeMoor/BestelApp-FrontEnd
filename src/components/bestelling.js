import React, {useEffect, useState} from "react"
import BestelRegel from "./bestelRegel"
import axios from "axios"

export default function Bestelling({bestelling}){
	const [bestelItems, setBestelItems] = useState([])

	useEffect(() =>{
		axios.get("http://localhost:8080/api/v1/order-items/" + bestelling.id)
			.then(res => {
				setBestelItems(res.data)
			}
			)
	},[bestelling.id])


	return(
		<div>
			<table>
				<th>
					<u>Tafel {bestelling.tableId}</u>
				</th>
				<tr>
					<td>
						<ul>
							{bestelItems.map(bi => {
								return <BestelRegel key={bi.id} gerechtId={bi.dishId} aantal={bi.amount} opmerking={bi.opmerking}/>
							})}
						</ul>
					</td>
					<td>
						<button>Gereed</button>
					</td>
				</tr>
			</table>
		</div>
	)
}