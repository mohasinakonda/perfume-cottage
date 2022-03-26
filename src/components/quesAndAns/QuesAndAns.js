import React from "react"

const QuesAndAns = () => {
	return (
		<div className="container">
			<h2>How React works ?</h2>
			<p>
				React is lightweight javascript library,mainly it uses JSX(javascript
				XML) based and small part of components for create web app. React works
				declarative way and it create interactive UIs. Design simple views for
				each state in the application, and React will efficiently update and
				render just the right components data changes or updated by virtual DOM
				to real DOM, that makes website more faster and more efficient .React is
				a Component base javascript library to create interactive web app.
			</p>
			<h2>The difference between state and props?</h2>
			<p>
				<b>Props:</b> Props are known as properties it can be used to pass data
				from one component to another. Props cannot be modified, read-only, and
				Immutable.Props is use to pass data from one component to another.{" "}
				<p className="my-3">
					<b>State:</b>The state represents parts of an Application that can
					change. Each component can have its State. The state is Mutable and It
					is local to the component only.state use only pass data within this
					components.it is mutable that means it allow to modify data
				</p>
			</p>
		</div>
	)
}

export default QuesAndAns
