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
			firstName: "",
			lastName: "",
			age: "",
			aboutMe: "",
			isAwesome: false,
			gender: "",
			isMarried: false,
			isSingle: false,
			isDivorced: false,
			favColor: "blue"
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleClick() {
		this.setState(prevState =>{
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	handleChange() {
		const {name, value, type, checked} = event.target;
		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
	}

	handleSubmit() {
		//Send to some API somewhere
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

				<form onSubmit={this.handleSubmit}>

					<input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
					<br />

					<input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
					<br />

					<input value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />
					<br />

					<textarea value={this.state.aboutMe} name="aboutMe" placeholder="About Me" onChange={this.handleChange} />
					<br />

					<label>
						<input type="checkbox" name="isAwesome" checked={this.state.isAwesome} onChange={this.handleChange} />
						Is Awesome?
					</label>
					<br />

					<label>
						<input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
						Male
					</label>
					<br />

					<label>
						<input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
						Female
					</label>
					<br />

					<label> Marital Status
						<br />
						<input type="checkbox" name="isMarried" onChange={this.handleChange} checked={this.state.isMarried}/>
						Married
					</label>

					<label>
						<input type="checkbox" name="isSingle" onChange={this.handleChange} checked={this.state.isSingle}/>
						Single
					</label>

					<label>
						<input type="checkbox" name="isDivorced" onChange={this.handleChange} checked={this.state.isDivorced}/>
						Divorced
					</label>

					<label>Favorite Color:</label>
					<select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
						<option value="">-- Please choose a color --</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
						<option value="red">Red</option>
						<option value="orange">Orange</option>
						<option value="yellow">Yellow</option>
					</select>

					<button>Submit</button>
				</form>

				<hr />
				<h2>Entered information:</h2>
				<p>Your name: {this.state.firstName} {this.state.lastName}</p>
				<p>Your age: {this.state.age}</p>
				<p>Your gender: {this.state.gender}</p>
				<p>About me: {this.state.aboutMe}</p>
				<p>Your favorite color: {this.state.favColor}</p>
				<p>
					Your marital status:
					{this.state.isMarried ? "Married" : ""}
					{this.state.isSingle ? "Single" : ""}
					{this.state.isDivorced ? "Divorced" : ""}
				</p>

				<Footer />

			</div>
		)
	}
}

export default App