import React from "react"
import "./Cart.css"

const Cart = ({ cart }) => {
	console.log(cart)
	return (
		<div className="cart">
			<h4>selected Products</h4>
			{cart.map((data) => (
				<p key={data.id}>{data.name}</p>
			))}
			<button className="select-item">select me</button>
			<button>try again</button>
		</div>
	)
}

export default Cart
