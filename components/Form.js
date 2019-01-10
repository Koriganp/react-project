import React from "react"

function Form() {
	return (
		<div>
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
		</div>
	)
}

export default Form