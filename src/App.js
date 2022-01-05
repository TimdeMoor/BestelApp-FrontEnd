import "./App.css"
import React from "react"
import MenuOverzicht from "./components/MenuOverzicht"


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App(){
	return (
		<div className="App">
			<h1>Menu</h1>
			<MenuOverzicht/>
		</div>
	)
}

export default App
