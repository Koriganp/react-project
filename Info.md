import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// Formik - React form library

class Info extends Component {
	constructor() {
		super();
		this.state = {}
	}

	static getDerivedStateFromProps(props, state) {
		// return the new, updated state based upon the props
		// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
		// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
	}

	getSnapshotBeforeUpdate() {
		// create a backup of the current way things are
		// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
	}

	DEPRECATED!!!
	// componentWillMount() {

	// }

	componentDidMount() {
		// GET the data I need to correctly display
	}

	DEPRECATED!!!
	// componentWillReceiveProps(nextProps) {
	//     if (nextProps.whatever !== this.props.whatever) {
	//         // do something important here
	//     }
	// }

	shouldComponentUpdate(nextProps, nextState) {
		// return true if want it to update
		// return false if not
	}

	DEPRECATED!!!
	// componentWillUpdate() {

	// }

	componentWillUnmount() {
		// teardown or cleanup your code before your component disappears
		// (E.g. remove event listeners)
	}

	render() {
		return (
			<div>
				Code goes here
			</div>
		)
	}
}

export default Info

/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */
 
 https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
 
 https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a
 
 https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d