import React from "react"

import MyInfo from "./MyInfo"
import MyList from "./MyList"
import Greeting from "./Greeting"

function MainContent() {
	return (
		<main>
			<Greeting />
			<MyInfo />
			<MyList />
		</main>
	)
}

export default MainContent