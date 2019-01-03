import React from "react"

import MyInfo from "./MyInfo"
import MyList from "./MyList"
import Greeting from "./Greeting"
import ContactCard from "./ContactCard"

function MainContent() {
	return (
		<main>

			<Greeting />

			<MyInfo />

			<MyList />

			<ContactCard
				contact={{name: "Mr. Whiskerson",
							imgUrl: "http://placekitten.com/300/200",
							phone: "(212) 555-1234",
							email: "mr.whiskaz@catnap.meow"}}
			/>

			<ContactCard
				contact={{name:"Fluffykins",
							imgUrl:"http://placekitten.com/400/200",
							phone:"(212) 555-2345",
							email:"fluff@me.com"}}
			/>

			<ContactCard
				contact={{name:"Destroyer",
							imgUrl:"http://placekitten.com/400/300",
							phone:"(212) 555-3456",
							email:"ofworlds@yahoo.com"}}
			/>

			<ContactCard
				contact={{name:"Felix",
							imgUrl:"http://placekitten.com/200/100",
							phone:"(212) 555-4567",
							email:"thecat@hotmail.com"}}
			/>
		</main>
	)
}

export default MainContent