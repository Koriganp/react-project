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
			isLoading: true,
			isLoggedIn: false,
			unreadMessages: [
				"Call your mom!",
				"New spam email available. All links are definitely safe to click."
			]
		};
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState =>{
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}


	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {
		let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
		return (
			<div>

				<Header />

				<button onClick={this.handleClick}>{buttonText}</button>

				{
					this.state.unreadMessages.length > 0 &&
					<h2>You have {this.state.unreadMessages.length} unread messages!</h2>
				}

				<MainContent />

				{
					this.state.isLoading ?
					<h1>Loading...</h1> :
					<Conditional />
				}

				<Footer />

			</div>
		)
	}
}

export default App