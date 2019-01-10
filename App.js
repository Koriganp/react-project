import React, {Component} from "react"

//Import my main components
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Conditional from "./components/Conditional"

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {
		return (
			<div>
				<Header />
				<MainContent />
				{this.state.isLoading ?
					<h1>Loading...</h1> :
					<Conditional />}
				<Footer />
			</div>
		)
	}
}

export default App