import React, {Component} from "react"

//Import my main components
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<div>
				<Header />
				<MainContent />
				<Footer />
			</div>
		)
	}
}

export default App