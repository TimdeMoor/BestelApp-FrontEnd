import React from 'react';
import Bestelling from './bestelling'



export default function BestellingenOverzicht({bestellingen}){
    return (
        bestellingen.map(b => {
            return <Bestelling key={b.id} bestelling={b}/>
        })
     )
}