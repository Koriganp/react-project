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
			],
			loading: false,
			character: {},
			firstName: ""
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this)
	}

	handleClick() {

		this.setState(prevState =>{
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	handleChange() {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	componentDidMount() {

		setTimeout(() => {
			this.setState({
				isLoading: false,
				loading: true
			})
		}, 1500);

		fetch("https://swapi.co/api/people/1")
			.then(response => response.json())
			.then(data => {
				this.setState({
					loading: false,
					character: data
				})
			})

	}

	render() {
		let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
		const text = this.state.loading ? "loading..." : this.state.character.name;
		return (
			<div>

				<Header />

				<button onClick={this.handleClick}>{buttonText}</button>

				<p>{text}</p>

				{
					this.state.isLoading ?
						<h1>Loading...</h1> :
						<Conditional />
				}

				{
					this.state.unreadMessages.length > 0 &&
					<h2>You have {this.state.unreadMessages.length} unread messages!</h2>
				}

				<MainContent />

				<form>
					<input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
					<input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
				</form>

				<Footer />

			</div>
		)
	}
}

export default App