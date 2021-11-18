import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function BestelRegel({aantal, gerechtId, opmerking}){

    const [gerecht, setGerecht] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8080/api/v1/dishes/" + gerechtId)
            .then(res => {
                    setGerecht(res.data)
                }
            )
    },[gerechtId])

    function checkExtra(){
        if (opmerking === null){
            return(
                <li>{aantal}x {gerecht.name}</li>
            )
        }else{
            return(
                <li>
                    <li>{aantal}x {gerecht.name}</li>
                    <ul>
                        <li>Opm: {opmerking}</li>
                    </ul>
                </li>
            )
        }
    }

    return (
        <div>{
            checkExtra()
        }</div>
    );
}