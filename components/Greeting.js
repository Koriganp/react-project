import React from "react"

function Greeting() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay
	const styles = {
		fontSize: 30
	}

	if(hours < 12) {
		timeOfDay = "morning"
		styles.color = "#3d756f"
	} else if(hours >= 12 && hours < 17) {
		timeOfDay = "afternoon"
		styles.color = "#ffe527"
	} else {
		timeOfDay = "night"
		styles.color = "#9400d9"
	}

	return (
		<h1 style={styles}>Good {timeOfDay}!</h1>
	)
}

export default Greeting

