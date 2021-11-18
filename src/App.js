import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import BestellingenOverzicht from "./bestellingenOverzicht";

function App() {
    const [bestellingen, setBestellingen] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/orders/incomplete")
            .then(res => {
                    setBestellingen(res.data)
                }
            )
    },[])

    return (
        <div className="App">
            <BestellingenOverzicht bestellingen={bestellingen}/>
        </div>
    );
}


export default App;
